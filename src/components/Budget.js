import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
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
            <span>Budget: {currency} </span>
            <input type='number' step='10' value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;