import Navbar from "../components/navbar/Navbar";
import CardRooms from "../components/fragment/CardRooms";
import { getUsers } from "../service/product.service";
import { useEffect, useState } from "react";

function UsersPage(){

    const [products, setProducts] = useState([]); 

    useEffect(() => {
        getUsers((data) => {
            console.log(data);
            setProducts(data);
        })
    },[])
    return (
        <>
          <Navbar/>
          <div className="flex flex-col justify-center bg-slate-100">
          <h1 className="text-5xl font-bold text-center m-8 font-serif">Users</h1>
            {products.length > 0 && products.map((product) => (
                <CardRooms key={product.id} height="h-50" width="w-125">
                    <CardRooms.UsersSection name={product.name} email={product.email} phone={product.phone}/>
                </CardRooms>
            ))}
          </div>
        </>
      );
}

export default UsersPage