import React, { useState, useEffect, useMemo } from 'react';

function About() {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async(id) => {
    console.log(1);
    try {
      if (!id) {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await res.json();
        setUsers(json);
      } else {
        let arr = [];
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const json = await res.json();
        arr.push(json);
        setUsers(arr);
      } 
    } catch (error) {
        console.log(7);
        console.log(error);
        setUsers(null);
      }
  }

  async function handleUserNumber(e) {
    if (e.target.value) {
      let num = JSON.parse(e.target.value);
      return fetchUsers(num);
    } else {
      return fetchUsers();
    }
  }

  return (
    <div className="page__container">
      <input onChange={handleUserNumber} placeholder="type user number" />

      <ul>
        {users && users.length && users.map((each, i) => <li key={i}>{each.name}</li>)}
        {!users || !users.length && <p>Error</p>}
      </ul>
    </div>
  );
}

export default About;
