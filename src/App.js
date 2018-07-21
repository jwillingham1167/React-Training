import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: 5342, name: 'Max', age: 28 },
            { id: 2432, name: 'Manu', age: 29 },
            { id: 233423, name: 'Stephanie', age: 26 }
        ],
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        
        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    // render() is executed on load
    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        // () => refers to function so run on click instead of run on render
        if (this.state.showPersons === true) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id} 
                                changed={(event) => this.nameChangedHandler(event, person.id)} />
                        })
                    }
                </div>
            ); // this.state.persons = person in the function

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }

        }
        console.log(this.state.persons);

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red'); // classes = ['red']
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold'); // classes = ['red', 'bold'], need to add .join(' ') on the {classes} below to remove comma between array items
        }

        return (
        <StyleRoot>
            <div className="App">
                <h1>Hi, I'm a react App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        </StyleRoot>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default Radium(App);