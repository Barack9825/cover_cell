import React from "react";

export function Greetings({ title, name = "user" }) {
  return (
    <h1>
      {title} dice {name}
    </h1>
  );
}

export function UserCard({name, amount,married,address,greet}) {
  console.log(greet)
  return <div>
    <h1>{name}</h1>
    <p>💵{amount}</p>
    <p>{married ? "married" : "single"}</p>
    <ul>
      <li>{address.city}</li>
      <li>{address.street}</li>
    </ul>
    </div>;
}
