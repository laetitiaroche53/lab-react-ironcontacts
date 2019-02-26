import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      contacts: 
        contacts.slice(0,5)
    }
  }

  addContact = () => {
    let random = Math.floor(Math.random()*contacts.length);
    const newContact = contacts[random];
    const contactsCopy = [...this.state.contacts];
    contactsCopy.push(newContact);
    this.setState({ contacts: contactsCopy });
  }

  sortByName = () => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort((a,b) => {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    else return 0;
  });
  this.setState({ contacts: contactsCopy });
  }

  sortByPopularity = () => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort((a, b) => {
      if (a.popularity > b.popularity) return -1;
      else if (a.popularity < b.popularity) return 1;
      else return 0;
    });
    this.setState({ contacts: contactsCopy });
  }

  contactDelete = (i) => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(i,1);
    this.setState({ contacts: contactsCopy });
  }

  render() {
    return (
      <div className="App">
          <h1 >IRON CONTACTS</h1>
          <button onClick={this.addContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort By Name</button>
          <button onClick={this.sortByPopularity}>Sort By Popularity</button>
          <table>
            <thead> 
              <tr>
                <td>PICTURE</td>
                <td>NAME</td>
                <td>POPULARITY</td>
              </tr>
            </thead>
            <tbody>             
             {
              this.state.contacts.map((oneContact, index) => {
                return (<tr>
                  <td><img src={oneContact.pictureUrl} className="App-logo" alt="logo" /></td>
                  <td> {oneContact.name}</td>
                  <td> {oneContact.popularity}</td>
                  <td> <button onClick={this.contactDelete}>Delete</button></td>
                  </tr>)
             })
             }
            </tbody>
          </table>
      </div>
  );
}
}


export default App;
