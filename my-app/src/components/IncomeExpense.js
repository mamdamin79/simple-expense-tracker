import React from 'react';
const IncomeExpense = (props) => {
    let inc = 0;
    let exp = 0;
    props.transactions.filter(t=> t.amount > 0).map(t=> inc += parseFloat(t.amount))
    props.transactions.filter(t=> t.amount < 0).map(t=> exp += parseFloat(t.amount))
    return (
        <div className="inc-exp-container">
            <div className="income-div">
                <p>
                    INCOME
                </p>
                <p className="green">
                    {inc}
                </p>
            </div>
            <div className="expense-div">
                <p>
                    EXPENSE
                </p>
                <p className="red">
                    {exp}
                </p>
            </div>
        </div>
    );
}
 
export default IncomeExpense;