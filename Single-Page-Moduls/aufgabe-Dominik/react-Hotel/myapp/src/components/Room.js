// const nomro = room.map((el, index) => (
//     <li key={index} className="title">
//         {el}
//     </li>
// ));
// console.log(nomro);
// const room1 = room.sort();
//  const room1 = (item1, item2) => {
//     return item1.roomNo - item2.roomNo;
// };
// const room2 = room.sort(room1);
 //  const sortedRooms = Rooms.sort((a, b)=> a.roomNo - b.roomNo);
//  const reverse = (str) => {
//      return str.split("-").reverse().join("/");
//  };

// const mapp1 = room2.map((listItem, index) => (
//     <h3 key={index} className="title1">
//         <p>
//             <strong> RoomNummer : </strong> {listItem.roomNo}
//         </p>
//         <p className="firlast">
//             {" "}
//             <strong>FirstName:</strong> {listItem.guest.firstName}
//         </p>

//         <p className="firlast">
//             <strong> LastName : </strong>
//             {listItem.guest.lastName}
//         </p>

//         <p className="dat">
//             {" "}
//             <strong>checkIn : </strong>
//             {reverse(listItem.checkIn)}
//         </p>

//         <p className="dat">
//             <strong>checkOut :</strong> {reverse(listItem.checkOut)}
//         </p>
//         <button onClick={handlerEvent}>checkIn</button>
//             <button onClick={handlerEvent}>checkOut</button>
//     </h3>
// ));
import {useEffect,useState} from "react"

    

function Room({ room }) {
    const [checkIn, setcheckIn] = useState(false)
 
    const handlerEvent = (event) =>{
      setcheckIn(!checkIn)
      console.log(event)
    }
    useEffect(() =>{
      console.log(useEffect)
      if(checkIn){
        alert("Zimmer Nr. {room.roomNr} ist voll.")
      }
    },[checkIn])
    console.log(room);
    const reverse = (str) => {
        return str.split("-").reverse().join("/");
    };
  
    return (
        <div className="Room">
            <h2 className="zimmer">ZimmerNo: {room.roomNo}</h2>
            <h3 className="firsN"> <span>FirstName:</span> 
                {room.guest.firstName} 
            </h3>
            <h3 className="firsN"><span>LastName:</span>  {room.guest.lastName}</h3>
            <h4 className="Room_CheckIn-CheckOut">
            <span>CheckIn:</span>
                {reverse(room.checkIn)} 
            </h4>
            <h4 className="Room_CheckIn-CheckOut">
            <span>CheckOut:</span>
                 {reverse(room.checkOut)}
            </h4>
   <br></br>
   <button className="btn" onClick={handlerEvent}>{checkIn? "check In": "check Out"}</button>
        </div>
    );
}

export default Room;
