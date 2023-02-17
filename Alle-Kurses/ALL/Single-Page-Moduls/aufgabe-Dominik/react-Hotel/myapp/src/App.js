import rooms from "./room.json"
import RoomList from './components/RoomList';
import './App.css';
import Form from './components/Form.js'


const sortedRooms = rooms.sort((a, b)=> a.roomNo - b.roomNo);

function App() {
  return (
    <div className="App">
      <Form />
      <RoomList rooms={sortedRooms}/>
        
     
    </div>
  );
}

export default App;
