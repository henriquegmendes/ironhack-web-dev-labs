import React, { Component } from 'react';

import './App.css';

import Table from './components/Table/Table';
import ActionsContainer from './components/ActionsContainer/ActionsContainer';

import contacts from './contacts.json';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  }

  updateContactsState = (value) => {
    this.setState({ contacts: value });
  }

  handleAddRandomContact = () => {
    const randomContact = this.getRandomContact(contacts);

    this.state.contacts.push(randomContact);

    this.updateContactsState(this.state.contacts);
  }

  handleSortContactsByName = () => {
    this.state.contacts.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name));

    this.updateContactsState(this.state.contacts);
  };

  handleSortContactsByPopularity = () => {
    this.state.contacts.sort((contact1, contact2) => contact1.popularity - contact2.popularity);

    this.updateContactsState(this.state.contacts);
  };

  handleDeleteContact = (contactId) => {
    const { contacts } = this.state;

    const contactToDeleteIdx = contacts.findIndex(contact => contact.id === contactId);

    contacts.splice(contactToDeleteIdx, 1);

    this.updateContactsState(contacts);
  };

  getRandomContact = contacts => {
    return contacts[this.getRandomNumber(0, contacts.length)];
  }

  getRandomNumber = (min, max) => {
    const minNum = min;
    const maxNum = max;
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <ActionsContainer
          addRandomContact={this.handleAddRandomContact}
          sortContactsByName={this.handleSortContactsByName}
          sortContactsByPopularity={this.handleSortContactsByPopularity}
        />
  
        <Table
          headers={['Picture', 'Name', 'Popularity', 'Action']}
          data={this.state.contacts}
          deleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }

}

export default App;
