import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";
import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponent";

function App() {
    let [users,setUsers]=useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(value => value.json())
          .then(value =>{
            setUsers(value);
          } )
    },[])
  return (
    <div>
      {
        users.map(value =>
            <UserComponent key={value.id} item={value}/>
        )
      }

    </div>
  );
}

export default App;
