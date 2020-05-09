import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
   
      monster: [],
      searchField: ''
  };

  /* this.handleChange = this.handleChange.bind(this); */

}

//.bind() is a method on any function that returns a new function where the contect of 'this' is set to what ever you pass to it. In this case the this key word is defined in the constructor by : this.handleChange = this.handleChange.bind(this);



/* CompountDidMount is used because of our class component,  We are fetch from URL, taking a response and converting to JSON format so that JAvascript can understand use, take the users and set monsters to that array of users returns a promise */
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monster: users }));
}

handleChange = (e) => {
  this.setState({ searchField: e.target.value });
}

//

//you can use an error function to create an automatic bind of the context to the constructor. It saves doing an extra step.


  render() {

    const { monster, searchField } = this.state;
    const filteredMonster = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    //toLowerCase makes it not case sensitive
    //.filter()
    //.includes() checks whether string value passing inside the includes is actually in the string being called on 

    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}
      />
      <CardList monster={filteredMonster} /> 
      </div>
    );
  }
  
}

export default App;



/* 

1) You need to display a list of monsters.  to do this create a new property called monsters which have an array with a string value of each monster. 

2) Between curly braces you can render any JS render in this  case the h1's with the monsters name.
map() returns the return of whatever function you pass to it iterated over every element within the array in the state.abs

3) An id is needed for each property in the state so that react can identify which one to render. To make this work the html tag e.g. h1 needs to have a key e.e.  <h1 key={monster.id}> This way it knows it doesn't have to render everything.

A good rule of thumb as to when to use the key attribute you saw in the previous video, is this: Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)


4) lifecycle methods - They are methods that get called at different stages at when the component gets rendered. The main one to focus on is compounentDidMount. 

ComponentDidMount - is used when making an api request.

*/


/* -----onChange----- */
/* onChange={e => console.log(e.target.value)}/> 

onChange fires with the synthetic event (event in browser) when the input is changed by the user adding input.  The e represents the synthetic event. 


the target gets you the html element this is because it is the html element that fired the event. Value is a property on the input that gives the string value. This is how it can be stored on the state. 



*/


 //filter monsters when their names don't match the field.  We can make a new array using the .filter() method. Destructuring allows us to pull properties off of an object and set them to const that you put inside {} curly brackets.