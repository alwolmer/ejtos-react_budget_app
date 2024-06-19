import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, totalExpenses, remaining, dispatch } = useContext(AppContext);
    // const [newBudget, setNewBudget] = useState(budget)
    // const handleBudgetChange = (event) => {
    //     setNewBudget(event.target.value);
    // }

    const handleBudgetChange = (event) => {
        const newBudget = event.target.value < 0 ? 0 : event.target.value;

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ </span>
            <input type='number' step='10' value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;