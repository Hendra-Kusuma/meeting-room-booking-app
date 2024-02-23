import { useEffect, useState } from "react";
import { getRoomsUsage } from "../service/product.service";
import Rooms from "../components/fragment/CardRooms";
import Navbar from "../components/navbar/Navbar";

function RoomsUsage() {
  const [products, setProducts] = useState([]); // Menggunakan useState untuk mendefinisikan state products

  useEffect(() => {
    getRoomsUsage((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center bg-slate-100">
        <h1 className="text-5xl font-bold text-center m-8 font-serif">
          Rooms Usage
        </h1>
        {products.map((product) => (
          <Rooms key={product.id}>
            <Rooms.UsageSection
              clientId={product.clientId}
              roomId={product.roomId}
              startTime={product.startTime}
              endTime={product.endTime}
              bookingDate={product.bookingDate}
              quotaUsed={product.quotaUsed}
            />
          </Rooms>
        ))}
        {/* <Rooms>
          <Rooms.UsageSection text="" />
        </Rooms> */}
      </div>
    </>
  );
}

export default RoomsUsage;
