import Navbar from "../components/navbar/Navbar";
import Rooms from "../components/fragment/CardRooms";
import { getClients } from "../service/product.service";
import { useEffect, useState } from "react";

function ClientsPage(){

    const [products, setProducts] = useState([]); 

    useEffect(() => {
        getClients((data) => {
            console.log(data);
            setProducts(data);
        })
    },[])
    return (
        <>
          <Navbar/>
          <div className="flex flex-col justify-center bg-slate-100">
          <h1 className="text-5xl font-bold text-center m-8 font-serif">Clients</h1>
            {products.length > 0 && products.map((product) => (
                <Rooms key={product.id}>
                    <Rooms.Header image="./image/man.jpg" />
                    <Rooms.Clients name={product.name} email={product.email} phone={product.phone} credit={product.credit}></Rooms.Clients>
                </Rooms>
            ))}
          </div>
        </>
      );
}

export default ClientsPage