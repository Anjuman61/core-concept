import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'photoshop', price: '$99.99'},
    {name: 'illustrator', price: '$70.99'},
    {name: 'pdf reader', price: '$9.99'},
    {name:'editor', price: '$1.11'}
  ]

  const friends = ['Elias', 'jamal', 'kamal', 'rahim']



//   var subject = {
// name:'khan',
// job:'teacher'
//   }

//   var subject2 = {
//     name:'Alom',
//     job:'student'
//       }

//     var style = {
//         color:'red'
//       }

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            friends.map(friend=><li>{friend}</li>)
          }
        </ul>

        {
          products.map(pd=><Product product = {pd}></Product>)
        }

        

        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Person name = "Sakib" job ="Cricketer"></Person>
        <Person name = "Alom" job ="joker"></Person>
        <Person name = "shariar" job ="betrayer"></Person>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1>Heading: {2+3}</h1>
        <h3 className="" style={style}>subject:{subject.name+" " + subject.job}</h3>
        <h3 style ={{color:'yellow'}}>subject2:{subject2.name+" " + subject2.job}</h3>


        <p>My first paragraph in React</p> */}
        
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>setUsers(data))
  },[])

  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {users.map(user =><li>{user.name}</li>)}
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0)
  const handleIncrease = ()=>{
    // const newCount = count +1;
    setCount(count +1)
  }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}


function Product(props){
  const productsStyle = {
    border:'2px solid yellow',
    margin:'5px',
    backgroundColor:'gray',
    height:'200px',
    width:'200px',
    float:'left'

  }
  console.log(props)
  const {name, price} = props.product
  return(
    <div style ={productsStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
  
    </div>
  )
}



function Person(props){

  console.log(props)
  const personStyle ={
    border: '2px solid red',
    margin: '5px'

  }

  return (
    <div style={personStyle}>
      <h1>Name:{props.name}</h1>
      <h3>Job:{props.job}</h3>
    </div>
  )


}

export default App;
