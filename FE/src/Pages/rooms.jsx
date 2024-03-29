import { useEffect, useState } from "react";
import { getRooms } from "../service/product.service";
import CardRooms from "../components/fragment/CardRooms";
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
            <CardRooms key={product.id} height="h-90" width="w-25">
              <CardRooms.Header image="./image/meeting-room.jpg" />
              <CardRooms.Body roomName={product.roomName}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardRooms.Body>
              <CardRooms.Footer costPerHour={product.costPerHour} />
            </CardRooms>
          ))}
      </div>
    </>
  );
}

export default RoomsPage;