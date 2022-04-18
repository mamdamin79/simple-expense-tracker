import React from 'react';
const IncomeExpense = () => {
    return (
        <div className="inc-exp-container">
            <div className="income-div">
                <p>
                    INCOME
                </p>
                <p className="green">
                    $30000
                </p>
            </div>
            <div className="expense-div">
                <p>
                    EXPENSE
                </p>
                <p className="red">
                    $25600
                </p>
            </div>
        </div>
    );
}
 
export default IncomeExpense;