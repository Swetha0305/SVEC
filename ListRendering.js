import React from 'react'

export default function ListRendering() {
 


let emplist=[
    {
        name:"kavya",
        salary:30000,
        email:"kavya@gmail.com"
    },
    {
        name:"Swetha",
        salary:80000,
        email:"swetha@gmail.com"
    },  
    {
        name:"Sujith",
        salary:80000,
        email:"sujith@gmail.com"
    }  
    
]






    return (
        <div>
            <h1> List Rendering</h1>
            {/* {
            emplist.map(element =>(
                <h1>{element }</h1>
            ))
        } */}
        {emplist.map(
            empdata=>
            <>
                <p>{empdata.name}</p>
                <p>{empdata.salary}</p>
                <p>{empdata.email}</p>
                </>
        )
}
        </div>
    )
}
