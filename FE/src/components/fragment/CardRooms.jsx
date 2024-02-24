import { Link } from "react-router-dom";
import Button from "../button/button";

function CardRooms(props) {
  const { children, height, width="w-full" } = props;
  return (
    <div className="flex justify-center items-center">
      <div className={`${width} ${height} px-8 py-6 shadow-xl sm:rounded-xl bg-teal-400 m-4 max-w-fit`}>
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
      <div className="font-extralight">
        <h5 className="text-2xl font-semibold tracking-tight text-white">
          Type Room : <br />
          {roomName}
        </h5>
      </div>
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

function UsageSection(props) {
  const { clientId, roomId, startTime, endTime, bookingDate, quotaUsed } =
    props;
  return (
    <div className="px-4 pb-5 h-full">
      <div className="text-xl font-bold text-white">
        <h1>
          Name : {clientId}
          <br />
          Type Room : {roomId} <br />
          Start Time : {startTime} <br />
          End Time : {endTime} <br />
          Booking Date : {bookingDate} <br />
          Quota Used : {quotaUsed}
        </h1>
      </div>
    </div>
  );
}

function Clients(props) {
  const { name, email, phone, credit } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <div className="font-extralight">
        <h5 className="text-4xl font-semibold tracking-tight text-white px-4">
          <p className="py-4">Name : {name}</p>
          <p className="py-4">email : {email}</p>
          <p className="py-4">phone : {phone}</p>
          <p className="py-4">credit : {credit}</p>
        </h5>
      </div>
    </div>
  );
}

function UsersSection(props) {
  const { name, email, phone } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <div className="font-extralight">
        <h5 className="text-4xl font-semibold tracking-tight text-white px-4">
          <p className="py-4">Name : {name}</p>
          <p className="py-4">email : {email}</p>
          <p className="py-4">phone : {phone}</p>
        </h5>
      </div>
    </div>
  );
}

CardRooms.Header = Header;
CardRooms.Body = Body;
CardRooms.Footer = Footer;
CardRooms.UsageSection = UsageSection;
CardRooms.Clients = Clients;
CardRooms.UsersSection = UsersSection;

export default CardRooms;
