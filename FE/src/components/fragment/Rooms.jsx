import { Link } from "react-router-dom";
import Button from "../button/button";

function Rooms(props) {
    const { children } = props;
    return (
      <div className="flex justify-center items-center">
        <div className="max-w-screen-lg w-full px-8 py-6 shadow-xl sm:rounded-xl bg-teal-400 m-4">
          {children}
        </div>
      </div>
    );
  }

function Header(props) {
  const { image } = props;
  return (
    <Link href="#">
      <img src={image} alt="ps5" className="p-4 rounded-t-lg" />
    </Link>
  );
}

function Body(props) {
  const { roomName } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <Link href="#">
        <h5 className="text-2xl font-semibold tracking-tight text-white">
          Type Room : <br />
          {roomName}
        </h5>
      </Link>
    </div>
  );
}

function Footer(props) {
  const { costPerHour } = props;
  return (
    <div className="flex items-center justify-between">
      <span className="text-xl font-bold text-white px-4">
        Cost Per Hour : {costPerHour} Credits
      </span>
      <Button color="bg-blue-600" text="Rent" />
    </div>
  );
}
Rooms.Header = Header;
Rooms.Body = Body;
Rooms.Footer = Footer;

export default Rooms;
