import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventoryList: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8080/api/inventory')
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log('error getting data', err)
    })
  }

  getInventoryList(){
    axios.get('http://localhost:8080/api/inventory')
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log('error getting data', err)
    })
  }
  
  render() { 
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="body-container">
          <div>
            <Dashboard inventory={this.state.inventoryList}/>
          </div>
          <div>
            <Form getUpdatedInventory={this.getInventoryList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
