import React from "react";

const listcustomer = [
    {
        id:1,
        name: 'Alice',
        skills: ['html','css']
    },
    {
        id:2,
        name: 'Bruno',
        skills: ['reason','java']
    },
    {
        id:3,
        name: 'Tobias'
    },
    {
        id:4,
        name: 'Etelka'
    }
]

const App = () => {

    const renderCustomers = (customer, index) => {
        return (
            <div>
                <li>{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>
            
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
            
            
        )
    }

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem-Vindo</p>
            <div>
                <ul>
                {listcustomer.map(renderCustomers)}
                </ul>
                <ul>
                {listcustomer.map(renderSkills)}
                </ul>
                
            </div>
        </div>
    );
};

export default App;
