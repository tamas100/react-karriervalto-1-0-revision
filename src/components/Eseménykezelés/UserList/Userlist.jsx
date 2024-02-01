import React, { useState, useEffect, useRef } from 'react';
import UserItem from '../UserItem/UserItem';
import axios from 'axios';

export default function Userlist() {
  const [users, setUsers] = useState([]);  

  useEffect(() => {
      // mellékhatás
      if ( users.length === 0) {           
        axios
          .get('https://randomuser.me/api/?results=3&nat=DE')
          .then(resp => {
            const users = resp.data.results;
            for (let user of users) {
              insertElement(user);
            }
            console.log(users);
            });   
      }
  });
  
  function componentDidMount() {
    axios
      .get('https://randomuser.me/api/?results=3&nat=DE')
      .then(resp => {
        const users = resp.data.results
        for (let user of users) {
          this.insertElement(user);
        }
        console.log(users);
      });   
  }

  const insertElement = (userData) => {
    const newUser = {
      name: `${userData.name.title} ${userData.name.first} ${userData.name.last}` ,
      address: `${userData.location.street.name} ${userData.location.street.number}`, 
      email: `${userData.email}`, 
      key: `${userData.login.uuid}`
    };

    setUsers(oldUsers => [...oldUsers, newUser])
  }
  
  const deleteElement = (key) => {
    setUsers(oldUserList => oldUserList.filter(user => user.key !== key));    
  }

  const handleInsert = () => {
    axios
      .get('https://randomuser.me/api/?results=3&nat=DE')
      .then(resp => {
        const users = resp.data.results        
        insertElement(users[0]);        
        console.log(users);
      });
  }

  const handleDelete = () => {
    const len = users.length; 
    if (len > 1) {
      const randomIndex = Math.trunc(Math.random() * len);
      const key = users[randomIndex].key
      deleteElement(key);
    }
  }

     
  const userItems = users.map(
    user => <UserItem name={user.name}
                      address={user.address}
                      email={user.email}
                      key={user.key}
                      id={user.key}
                      handleClick={deleteElement} />
  );

  return (
    <>
    <ul>
      {userItems}
    </ul>
    <button onClick={handleInsert}>Beszúr</button>
    <button onClick={handleDelete}>Töröl</button>  
    UserList {users.length}    
    </>
  )
  
}