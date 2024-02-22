import Navbar from "../components/navbar/Navbar";
import Rooms from "../components/fragment/CardRooms";

function ClientsPage(){
    return (
        <>
          <Navbar/>
          <div className="flex flex-col justify-center bg-slate-100">
          <h1 className="text-5xl font-bold text-center m-8 font-serif">Clients</h1>
            <Rooms>
                <Rooms.Clients></Rooms.Clients>
            </Rooms>
          </div>
        </>
      );
}

export default ClientsPage