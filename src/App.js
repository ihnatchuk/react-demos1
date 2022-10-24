import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";
import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponent";
import {getUsers} from "./serices/UserServices";

function App() {
    let [users,setUsers]=useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
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
