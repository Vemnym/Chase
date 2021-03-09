import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';


const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}
/*function validateForm() {
        var un = document.loginForm.username.value;
        var pw = document.loginForm.password.value;
        var username = "MitchWardle";
        var password = "123abc456";
        if ((un == username) && (pw == password)) {
            console.log("Password True");
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
        }
    }*/

/*<form id="loginForm">
        <p id="usernameLabel">Username:</p>
        <input type="text" name="username" id="username" placeholder="username"/><br />
        <p id="passwordLabel">Password: </p>
        <input type="password" name="password" id="password" placeholder="password"/><br />
        <input id="loginButton" type="button" value="Login!" onclick="validateForm(); return false; "/>
      </form>
      <p id="loginMessage">Please Login!</p> */

function App() {
 // api Get test
  const[people, setPeople] = useState([])
  useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8000/api/test-api/"
        }).then(response => {
             setPeople(response.data)
        })
  }, []) // [] чтобы не запрос не повторялся

 // обработка данных из формы
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);

    const username = "MitchWardle";
    const password = "123456";


    if (formData.name == "password" && formData.value == "123456") {
        console.log("Password True");
        }
    else {
        alert ("Login was unsuccessful, please check your username and password");
        }


  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
}



  return (
    <div className="App">
      <h1>Test</h1>

      <ul>
        {people.map(p => (
            <li key={p.id}>{p.name}</li>
        ))}
      </ul>


      {submitting &&
       <div>
         You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
       </div>
      }
        <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>"Вход"</p>
            <input name="name" placeholder="Имя" onChange={handleChange}/><br/>
            <input name="password" placeholder="Пароль" onChange={handleChange}/><br/>
          </label>
          <button type="submit">Отправить</button>
        </fieldset>

      </form>

    </div>
  );
}



export default App;
