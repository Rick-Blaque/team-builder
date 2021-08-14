import React, { Component, useState, useEffect } from 'react'


const defaultFormValues = {name: '', email: '', role: '' }

export default function Form (props){
    
    const [teamster, setTeamster] = useState(defaultFormValues)
       function onSubmit(event) {
            event.preventDefault();
            props.addMember(teamster)
            console.log(teamster);
            


       }
       function onChange (evt) {
        //    console.log(evt.target.name);
        //    console.log(evt.target.value);
        // const { name, value } = evt.target;
           setTeamster({...teamster, [evt.target.name]: evt.target.value})
           //console.log(teamster)
       }
    return (
            <div>
               
                <form onSubmit={onSubmit}>
                    <label htmlFor='name'>Name: </label>
                <input type='text' name='name' placeholder='name' onChange={onChange}/>
                <br/>
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' placeholder='email' onChange={onChange}/>
                <br/>
                <label htmlFor='role'>Role: </label>
                <input type='text' name='role' placeholder='role' onChange={onChange}/>
                <br/>
                <button>Submit</button>
                </form>
            </div>
        )
    }

