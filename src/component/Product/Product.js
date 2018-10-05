import React from 'react';


export default function Product (props) {
    return (
        <div>
            <div>
                <div>Name: {props.name}</div>
                <div>Price: {props.price}</div>
                <div>Image: {props.image}</div>
            </div>
        </div>
    )
}