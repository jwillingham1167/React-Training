import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        showPersons: false
    }

    switchNameHandler = (newName) => {
        // console.log('OIOIOI');
        // DON'T DO THIS: this.state.persons[1].name = 'Maximilian';
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ],
            otherState: 'some State!'
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 26 }
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    // render() is executed on load
    render() {
        const buttonStyle = {
            backgroundColor: 'skyblue',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons === true) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person) => {
                            return <Person name={person.name} age={person.age} />
                        })
                    }
                </div>
            );
        }

        return (
        <div className="App">
            <h1>Hi, I'm a react App</h1>
            <p>This is really working!</p>
            <button
                style={buttonStyle}
                onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;