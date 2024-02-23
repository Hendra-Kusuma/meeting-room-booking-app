import Navbar from "../components/navbar/Navbar";
import Rooms from "../components/fragment/CardRooms";
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
                <Rooms key={product.id}>
                    <Rooms.UsersSection name={product.name} email={product.email} phone={product.phone}/>
                </Rooms>
            ))}
          </div>
        </>
      );
}

export default UsersPage