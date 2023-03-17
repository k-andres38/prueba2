import React, { useState } from 'react';

import '../Form.css';

const Form = () => {
  const [Name, setName] = useState('');
  const [LastName, setLastName] = useState('');
  const [NameAlias, setNameAlias] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Password2, setPassword2] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataFormulario={
       
        
      usuAli: NameAlias,
        usuNom: Name,
        usuApe: LastName,
        usuEma: Email,
        usuPas1: Password,
        usuPas2: Password2

    }
    console.log(dataFormulario)

    fetch('http://127.0.0.1:4000/createUser',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(dataFormulario)
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

   // console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Contact Form</h2>
      <label>
        Name:
        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        LastName:
        <input type="text" value={LastName} onChange={(e) =>  setLastName(e.target.value)} />
      </label>
      <label>
        NameAlias:
        <input type="text" value={NameAlias} onChange={(e) => setNameAlias(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Password2:
        <input type="password" value={Password2} onChange={(e) => setPassword2(e.target.value)} />
      </label>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
