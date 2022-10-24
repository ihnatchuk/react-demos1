import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";
import React, {useEffect, useState} from 'react';

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
        users.map(value => <div>
          <h2>{value.id}. {value.name}</h2>
          <p>{value.email}</p>
        </div>
        )
      }

    </div>
  );
}

export default App;
