import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const nayoks = ['Imran', 'Shohag', 'Arafat'];
  const products = [
    {name:'Adobe Photoshop', price:'$100.69'},
    {name:'Adobe Illustrator', price:'$120.69'},
    {name:'Adobe Photoshop', price:'$100.69'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        {
          products.map((product) => <Product product={product}></Product>)
        } 
      </header>
    </div>
  );
}
function Users(){

  const[users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  });

  return(
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
           users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Person(props){
  const personSyle={
    border:'2px solid yellow',
    margin:'10px',
    padding:'5px'
  }
  return(
    <div style={personSyle}>
      <h1>Nayok: {props.name}</h1>
      <p>Hero of {props.nayika}</p>
    </div>
  ) 
}

function Counter(){
  const [count, setCount] = useState(10);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'2px solid yellow',
    margin:'10px',
    padding:'5px'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  )
}

export default App;
