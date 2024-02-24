import Navbar from "../components/navbar/Navbar";
import CardRooms from "../components/fragment/CardRooms";
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
                <CardRooms key={product.id} height="h-50" width="w-150">
                    <CardRooms.Header image="./image/man.jpg" />
                    <CardRooms.Clients name={product.name} email={product.email} phone={product.phone} credit={product.credit}></CardRooms.Clients>
                </CardRooms>
            ))}
          </div>
        </>
      );
}

export default ClientsPage