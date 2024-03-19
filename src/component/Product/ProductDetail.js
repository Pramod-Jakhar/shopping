import React, { useState } from 'react';
import TopHeader from '../Layout/Header/Topheader';
import SearchPanel from '../Layout/Header/Searchpanel';
import Footer from '../Layout/Footer';
import "./Productlist.css"; // Import CSS file
import Breadcrumb from '../Pages/Breadcrumb';

function ProductDetail() {
    const [orderItems, setOrderItems] = useState([
        { id: 1, name: 'Item 1', quantity: 3, price: 10 },
        { id: 2, name: 'Item 2', quantity: 2, price: 20 },
        { id: 3, name: 'Item 3', quantity: 1, price: 30 },
    ]);

    const handleQuantityChange = (id, type) => {
        setOrderItems(prevItems => {
            return prevItems.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: type === 'increase' ? item.quantity + 1 : item.quantity - 1
                    };
                }
                return item;
            });
        });
    };

    const calculateSubtotal = (quantity, price) => {
        return quantity * price;
    };

    return (
        <div>
            <TopHeader />
            <SearchPanel />
           <Breadcrumb/>
            <div className="product-detail-container">
                <h2>Order Details</h2>
                {orderItems.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p><strong>Quantity:</strong> 
                            <button onClick={() => handleQuantityChange(item.id, 'decrease')}>-</button>
                            {item.quantity}
                            <button onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
                        </p>
                        <p><strong>Price:</strong> ${item.price}</p>
                        <p><strong>Subtotal:</strong> ${calculateSubtotal(item.quantity, item.price)}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;