import React from 'react'

export default function UserItem(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.handleClick(props.id);
  };
  
  return (
    <li>
      {props.name} ({props.email}): {props.address}
      <button onClick={handleClick}>Törlés</button>
    </li>
  )  
}
