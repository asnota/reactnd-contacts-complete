import React, { Component } from 'react';
import ListContacts from './ListContacts'

class App extends Component {
  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SMCsSBwdm3B8mqMmCWt9vNNgqU5R0I5DfT9ylEBGgr2a8qTE"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SMCsSBwdm3B8mqMmCWt9vNNgqU5R0I5DfT9ylEBGgr2a8qTE"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SMCsSBwdm3B8mqMmCWt9vNNgqU5R0I5DfT9ylEBGgr2a8qTE"
      }
    ]
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  render(){
    return(
    <div>
      <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
    </div>
    )
  }
}

export default App;
