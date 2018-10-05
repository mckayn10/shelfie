import React, {Component} from 'react';
import './form.css';
import axios from 'axios';

class Form extends Component {

    constructor(){
        super()


    this.state = {
        urlText: '',
        nameText: '',
        priceText: ''
    }
}

    updateUrl(value){
        this.setState({ urlText: value })
    }

    updateName(value){
        this.setState({ nameText: value})
    }

    updatePrice(value){
        this.setState({ priceText: value })
    }

    cancelButton = () => {
        this.setState({ urlText: '', nameText: '', priceText: 0})
    }

    addNewProduct = () => {
        const {getUpdatedInventory} = this.props;
        axios.post('/api/product', {product_name: this.state.nameText, price: this.state.priceText, image_url: this.state.urlText})
        .then(response => {
            getUpdatedInventory()
            this.cancelButton()
        })

    }

    render() {
        console.log(this.state.urlText)
        return(
            <div className="input-container">
                <div className="input-fields">
                    <div id="form-title">Image URL:</div>
                    <input className="input" onChange={(e) => {this.updateUrl(e.target.value)}} value={this.state.urlText} />
                    <div id="form-title">Product Name:</div>
                    <input className="input" onChange={(e) => {this.updateName(e.target.value)}} value={this.state.nameText} />
                    <div id="form-title">Price:</div>
                    <input className="input" onChange={(e) => {this.updatePrice(e.target.value)}} value={this.state.priceText} placeholder="0" />

                </div>
                <div className="button-container">
                    <button onClick={this.cancelButton}>Cancel</button>
                    <button onClick={this.addNewProduct}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;