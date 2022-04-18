import React from 'react';
const NewTransaction = () => {
    return (
        <>
            <h3>Add new transaction</h3>
        <form >
            <div>
                <label htmlFor="">Text</label>
                <input type="text" placeholder="description..." />
            </div>
            <div>
                <label htmlFor="">Amount</label>
                <input type="text" placeholder="how much..." />
            </div>
            <button>Create</button>
        </form>
        </>
    );
}
 
export default NewTransaction;