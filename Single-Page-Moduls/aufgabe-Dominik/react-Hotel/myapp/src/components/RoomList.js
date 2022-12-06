import Room from "./Room";
function RoomList ({rooms}) {
  console.log(rooms);

    return(
        <div className ="RoomList">
            {rooms.map((room,index)=> 
  <Room key={index} room={room} />
)}


        </div>
    )
}
export default RoomList;