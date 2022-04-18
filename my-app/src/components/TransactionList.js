import React from 'react';
import Transaction from './Transaction';
const TransactionList = (props) => {
    return (
        <div>
            <h3>
                History
            </h3>
            <ul>
                {props.transactions.map(t=> <Transaction removeTransaction={props.removeTransaction} info={t} key={t.id} />)}
            </ul>
        </div>
    );
}
 
export default TransactionList;