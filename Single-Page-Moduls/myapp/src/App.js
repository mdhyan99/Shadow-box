import UserCard from './components/UserCard'
import "./main.css"


const names = [
  {name : "maina" , address: "cairo" , phone:"12345",gender: "male"},
  {name : "kareem" , address: "giza" , phone:"4445",gender: "male"},
  {name : "omnia" , address: "gaza" , phone:"3435",gender: "female"}
]
const App = () => {
  


  
  return (
  
  <>
  <UserCard />
    </>
  );
};

export default App ;