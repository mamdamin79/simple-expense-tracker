import React from 'react';
const Transaction = (props) => {
    return (
        <>
            <li>
                <span>{props.info.description}</span>
                <div className="button-container">
                    <span>{props.info.amount}</span>
                    <button onClick={() => props.removeTransaction(props.info.id)} className="remove-button">-</button>
                </div>
            </li>
        </>
    );
}
 
export default Transaction;