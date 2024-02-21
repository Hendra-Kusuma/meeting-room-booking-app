import Button from "../button/button";
import { Link } from "react-router-dom";

function CardProducts(props) {
  const { children } = props;
  return (
    <div className="border border-gray-300 w-full flex flex-col justify-between bg-slate-400 max-w-sm rounded-lg shadow mx-2 my-2">
      {children}
    </div>
  );
}

function Header(props) {
  const { image } = props;
  return (
    <Link href="#">
      <img
        src={image}
        alt="ps5"
        className="p-4 rounded-t-lg"
      />
    </Link>
  );
}

function Body(props) {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <Link href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-s text-white">{children}</p>
      </Link>
    </div>
  );
}

function Footer(props) {
  const { price } = props;
  return (
    <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-white px-4">{price}</span>
        <Button color="bg-blue-600" text="Add To Cart" />
    </div>
  )
}
CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
