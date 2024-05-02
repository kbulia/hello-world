
import { useState } from 'react';
import './App.css'
import CanDrink from './components/CanDrink';
import Greeting from './components/Greeting';
//import Greeting from './components/Greeting';
import SongList from './components/SongList';


function App() {

 
  const mattsName = "Matt";

  
  const [age,setAge] = useState<number>(18);
  //1. gives back an array 2. gives stateful variables 3. gives setter method to update stateful var

  const haveBirthday = () => {
      setAge((age) => age + 1);
      console.log("happy birthday");
      console.log({age});
  };

  return (<div style={{"marginRight":"20px"}}><p className="greeting">Hello World</p>
  <hr />
  {/* <Greeting name={mattsName} age={age} ageFunc={haveBirthday}/>
  <CanDrink  name={mattsName} age={age} /> */}
  <SongList />

  </div>
  );
}

export default App
