const Validator = require("fastest-validator");
const User = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { userSchema } = require("../utils/schemas");

const v = new Validator();

const register = async (req, res) => {
  // validation
  try {
    // validation
    const { password, email, name, confirmpassword, phone } = req.body;

    // check field confirmpassword and match it with password
    if (!confirmpassword || password !== confirmpassword) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send("Confirm Password not match");
    }

    // check if the user already exists by username and email
    const existingUserByUsername = await User.user.findOne({ where: { name } });
    const existingUserByEmail = await User.user.findOne({ where: { email } });

    if (existingUserByUsername) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send("Username already exists");
    }
    if (existingUserByEmail) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send("Email address already exists");
    }

    // validate body with userschema will return array of object error
    const validate = v.validate(req.body, userSchema);
    if (validate.length) {
      let errorMessage = validate[0].message;

      return res.status(StatusCodes.BAD_REQUEST).json(errorMessage);
    }

    // hashing password and confirm password
    const hashedPassword = bcrypt.hashSync(password, 5);
    const userObject = {
      ...req.body,
      password: hashedPassword,
    };

    // process create
    const result = await User.user.create(userObject);
    const userData = result.toJSON();
    delete userData.password;
    delete userData.confirmpassword;
    delete userData.phone;
    delete userData.createdAt;
    delete userData.updatedAt;

    return res.json({
      status: StatusCodes.CREATED,
      message: "Success create data",
      data: userData,
    });
  } catch (err) {
    console.error(err); // Log error to the console
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("An error occurred");
  }
};

const login = async (req, res) => {
  try {
    const { email, password: enteredPassword } = req.body;
    console.log(req.body);
    const user = await User.user.findOne({ where: { email } });

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send("User is not found!");
    }

    const isMatch = await bcrypt.compare(enteredPassword, user.password); // Use async version
    if (!isMatch) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send("Wrong password or email");
    }

    const token = jwt.sign(
      {
        name: user.name,
        id: user.id
      },
      process.env.JWT_KEY,
      { expiresIn: "1d" }
    );

    const userObject = user.toJSON();
    let {
      password: hashedPassword,
      confirmpassword,
      createdAt,
      updatedAt,
      balance,
      ...info
    } = userObject;

    // if (user.role === "user") {
    //   info.balance = balance;
    // }

    res
      .cookie("accessToken", token, {
        httponly: true,
      })
      .json({
        status: StatusCodes.OK,
        message: "Successfully logged in",
        data: info,
        token: token, // added the token here
      });
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("An error occurred");
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("accessToken").status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "Successfully logged out",
    });
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("An error occurred");
  }
};

module.exports = { register, login, logout };
