import React, { useState } from 'react';
import { v4 } from 'uuid';
const NewTransaction = (props) => {
    const [transInfo , setTransInfo] = useState({amount:0, description:"" ,id: null})
    return (
        <>
            <h3>Add new transaction</h3>
        <form onSubmit={(e) =>e.preventDefault()}>
            <div>
                <label htmlFor="">Text</label>
                <input value={transInfo.description} onChange={(e) => setTransInfo({...transInfo, description: e.target.value})} type="text" placeholder="description..." />
            </div>
            <div>
                <label htmlFor="">Amount</label>
                <input value={transInfo.amount} onChange={(e) => setTransInfo({...transInfo, amount: e.target.value})} type="number" placeholder="how much..." />
            </div>
            <button className='add-btn' onClick={()=> props.addTransaction({...transInfo,id:v4()})}>Create</button>
        </form>
        </>
    );
}
 
export default NewTransaction;