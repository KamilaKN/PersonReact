import React, { useState } from "react";
import "./App.css";

function App() {
    const [persons, setPersons] = useState([{ name: "Rysbekova Kamila" }]);

    const [newName, setNewName] = useState("");

    const addPerson = (event) => {
        event.preventDefault();
        const personsObject = {
            name: newName,
        };
        const personss = persons.find((p) => {
          return p.name.toLowerCase() === newName.toLowerCase()
        })
        if(personss) {
          alert("Такой рльзователь уже")
        }
        setPersons(persons.concat(personsObject));
        setNewName("");
    };
    return (
        <div className="App">
            <h1>Пользователь</h1>
            <form onSubmit={addPerson}>
                <input
                    type="text"
                    placeholder="person"
                    value={newName}
                    onChange={(event) => setNewName(event.target.value)}
                />
                <input type="submit" value="Добавить пользователя" />
            </form>
            <div>
                {persons.map((person) => {
                    return (
                      <p key={person.name}>{person.name}</p>
                      )
                })}
            </div>
        </div>
    );
}

export default App;
