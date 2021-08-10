import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [firstNameS, setFirstName] = useState('');
  const [lastNameS, setLastName] = useState('');
  const [emailS, setEmail] = useState('');
  const [ageS, setAge] = useState(0);
  const [idToUpDate, setIdToUpDate] = useState("");
  function send() {
    Axios.post('https://asalef-alena.herokuapp.com/api/students', {
      student: {
        firstName: firstNameS,
        lastName: lastNameS,
        email: emailS,
        age: ageS,
      },
    });
  }
  function show() {
    Axios.get('http://localhost:8080/dbStudent/').then((response)=>{return console.log(response)}) 
  }
  function upDate() {
    Axios.put(`http://localhost:8080/dbStudent/${idToUpDate}`, {
      student: {
        firstName: firstNameS,
        lastName: lastNameS,
        email: emailS,
        age: ageS,
      },
    });
  }
  return (
    <div>
      <h1>hello</h1>
      <input
        type="text"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        placeholder="firstName"
      ></input>
      <input
        type="text"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        placeholder="lastName"
      ></input>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="email"
      ></input>
      <input
        type="number"
        onChange={(e) => {
          setAge(e.target.value);
        }}
        placeholder="age"
      ></input>
      <input type="text" placeholder="idToUpDate" onChange={(e)=>{setIdToUpDate(e.target.value)}}>

      </input>
      <button onClick={send}>Send</button>
      <button onClick={show}>Show</button>
      <button onClick={upDate}>Update</button>

    </div>
  );
}

export default App;
