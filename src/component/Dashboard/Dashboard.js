import React, {Component} from 'react';
import Product from '../Product/Product';
import './dashboard.css';

class Dashboard extends Component {
    render(){
        const inventoryItems = this.props.inventory.map((item, i) => {
            return(
                <div  className="product-box">
                    <Product key={i} name={item.name} price={item.price} image={item.image} />
                </div>
                
            )
        })
        return (
            <div>
                <div>
                    {inventoryItems}
                </div>
            </div>
        )
    }
}

export default Dashboard;