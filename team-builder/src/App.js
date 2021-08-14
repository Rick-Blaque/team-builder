import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React, { Component, useState, useEffect } from 'react'

const teamMeambers = [
  {name: "Tim", email: "Tim@yahoo.com", role: "frontend engineer"},
  {name:"Lex", email:"123@yahoo.com", role: "designer" },
  {name: "Monique", email:"missyou@yahoo.com", role:"engineer"}
]

function App() {
  const [team, setTeam] = useState(teamMeambers);
  function addTeamMember(member) {
      setTeam([...team, member])
  }
  
  return (
    <div className="App">
      {team.map((person) => {
        return <div>
            <h1>Team Member: {person.name}</h1>
            <h2>Role: {person.role}</h2>
          </div>
      })}
      
     <Form addMember={addTeamMember}/>
    </div>
  );
}

export default App;
