import React from 'react';
const Balance = (props) => {
    let inc = 0;
    let exp = 0;
    props.transactions.filter(t=> t.amount > 0).map(t=> inc += parseFloat(t.amount))
    props.transactions.filter(t=> t.amount < 0).map(t=> exp += parseFloat(t.amount))
    return (
        <>
            <p>your balance :</p>
            <h2>{ inc + exp }</h2>
        </>
    );
}
 
export default Balance;