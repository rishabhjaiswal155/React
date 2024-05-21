import React from 'react'
import Person from './Person'
function PersonList() {
    const persons=[
        {
            id:1,
            name:'Rishabh',
            age:27
        },
    {id :2,
        name:'Vishal',
        age:25
    },
    {id:3,
        name:'mauli',
        age:28
    }
    ]

    // const PersonList=persons.map(person=><h2>I am {person.name},I am {person.age} years old,My id is {person.id}</h2>)
    const PersonList=persons.map(person=><Person key={person.id} person={person}/>)
  return <div>{PersonList}</div>
    
}

export default PersonList