

// const ValidPassword =()=><h1>its a vallid password</h1>;
// const InvalidPassword =()=><h1>its in valid password</h1>;
// const Password =({isValid}) => {
//   if(isValid)
//   {
//     return <ValidPassword/>;
//   }
//   return <InvalidPassword/>;
//    return isValid? <ValidPassword /> : <InvalidPassword /> ;
// }
// const App = () => {
//   return <section>
//     <Password isValid={false}/>
//   </section>;
// };
// export default App;



// import Button from "./components/Button";
// import Colorpicker from "./components/Colorpicker";
// import Mycomponent from "./components/Mycomponent";
// import Profilepicture from "./components/Profilepicture";
// import SearchBartypo from "./components/SearchBartypo";


// import Student from "./components/Student";

// import Fetchdata from "./Fetchdata";




// const Cart = () => {
//   const items=["wirelessbuds","powerbank","new ssd"];
//   return (
//     <div>
//       <h1>cart</h1>
//       {items.length>0 && <h2>you have around items.length in your cart</h2> }
      
      
//      <ul>
//       <h4>products</h4>
//     {items.map(item=>(
//       <li key={Math.random()}>{item}</li>
//     ))}

//      </ul>
      
//       </div>
//   )
// };



// const App = () => {
//     return <Cart/>;
  
// };
// export default App;





// import {useState} from 'react';
// import Example3 from './components/Example3';
// import Todolist from './components/Todolist';
// import Profile from './components/Profile';
// import CopyInput from './components/CopyInput';
// import PopupContent from './components/PopupContent';

// const App = () => {
//   const[count,setCount]=useState(0);

//   const increment =() => setCount(count+1)
//   const decrement=()=>setCount(count-1)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <Example3 />
//       <Todolist />
//       <Profile />
//       <CopyInput />
//       <PopupContent/>
//       </div>
//   );
// };

// export default App;
// import {useState,useEffect} from "react";

// const App = () => {

//   const [value,setValue]=useState(0)

//   useEffect(()=>{
//     console.log("can use effect")
//     document.title='Increment ${value}'
//   },[value]); //empty dependenciey array 


//   return (
//     <div><h2>{value}</h2>
//     <button onClick={() =>setValue(value+1)}>click me</button></div>
//   );
// };

// export default App;

// import { createContext } from "react";
// import ComponentA from "./components/ComponentA";
// export const Data=createContext();
// const App = () => {
  
//   const name="saiavan";

//   return (
//     <div>
//       <Data.Provider value ={name}>
//         < ComponentA  />
//       </Data.Provider>
      

//     </div>
//   );
// };

// export default App;

// import List from "./components/List.jsx";

// const App = () => {
//   const fruits=[{id:1 ,name:"apple",calories:95},
//                 {id:2 ,name:"orange",calories:45},
//                 {id:3 ,name:"coconut",calories:105},
//                 {id:4 ,name:"pineapple",calories:37}];
//   const vegetables=[{id:6 ,name:"Tomato",calories:975},
//                       {id:7 ,name:"cucumber",calories:745},
//                       {id:8 ,name:"drumstick",calories:15},
//                       {id:9 ,name:"dalma",calories:67}];
//   return (
//     <div>
      
//       <List items={fruits} category="Fruits" /> 
//       <List items={vegetables} category="Vegetables"/>
//     </div>
    
//   )
// };

// export default App;




// const App = () => {
//   return (
//     <div>
//       <Button />
//       <Profilepicture />
//       <SearchBartypo />
//       <Colorpicker />
//       <Mycomponent />
//     </div>
//   )
// };

// export default App;



// import UserStatus from "./components/UserStatus";
// // import Weather from "./components/weather";


// const Button =()=>{
//   return <button onClick={()=>console.log("you clisked me")}>click</button>
// }
// const App = () => {
//   const styles={color:"white", backgroundColor:'teal' ,padding: "2rem"};
//   return (
//     <div>
//       {/* <Weather /> */}
//        <UserStatus Loggedin={true} isAdmin={true}/>
//       <h1 style={styles}>inline text</h1> 
//       <Button />
//     </div>
//   );
// };

// export default App;




// import Digitalclock from "./components/Digitalclock";

// const App = () => {
//   return (
//     <div>
//       <Digitalclock/>
//     </div>
//   )
// };

// export default App;





import Dashboard from './components/Dashboard';
import EmergencyAlert from './components/EmergencyAlert';
import Login from './components/login';
import Settings from './components/Settings';


const App = () => {
  return (
    <div>
      <Dashboard />
      {/* <EmergencyAlert />
      <Login />
      <Settings /> */}

    </div>
  );
};

export default App;