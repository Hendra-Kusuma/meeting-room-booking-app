
import { useEffect, useState } from "react";
import { getRooms } from "../service/product.service";
import Rooms from "../components/fragment/Rooms";
import Navbar from "../components/navbar/Navbar";

function RoomsPage() {
  const [products, setProducts] = useState([]); // Menggunakan useState untuk mendefinisikan state products

  useEffect(() => {
    getRooms((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar/>
      <div className="flex flex-col justify-center bg-slate-100">
      <h1 className="text-5xl font-bold text-center m-8 font-serif">Rooms Available</h1>
        {products.length > 0 &&
          products.map((product) => (
            <Rooms key={product.id}>
              <Rooms.Body roomName={product.roomName}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Rooms.Body>
              <Rooms.Footer costPerHour={product.costPerHour} />
            </Rooms>
          ))}
      </div>
    </>
  );
}

export default RoomsPage;
