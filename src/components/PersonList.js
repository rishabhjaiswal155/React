import React from 'react'

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

    const PersonList=persons.map(person=><h2>I am {person.name},I am {person.age} years old,My id is {person.id}</h2>)
  return <div>{PersonList}</div>
    
}

export default PersonList