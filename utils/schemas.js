const userSchema = {
    name: {
        type: "string",
        min: 3,
        max: 32,
        messages: {
            stringMin: "username must be at least 3 characters",
            stringMax: "username can't be longer than 32 characters"
        }
    },
    email: {
        type: "email",
        messages: {
            email: "email address is not valid"
        }
    },
    phone: {
        type: "string",
        min: 10,
        max: 15,
        pattern: "^[0-9]*$",
        messages: {
            stringMin: "Phone number must be at least 10 digits",
            stringMax: "Phone number can't be longer than 15 digits",
            stringPattern: "Phone number must only contain numbers"
        }
    },
    password: {
        type: "string",
        min: 6,
        max: 50,
        messages: {
            stringMin: "The password must be at least 6 characters.",
            stringMax: "The password can't be longer than 50 characters."
        }
    },
    confirmpassword: "string"
}

module.exports = { userSchema }