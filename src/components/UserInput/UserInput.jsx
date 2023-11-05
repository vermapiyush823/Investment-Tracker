import React, { useState } from 'react';
import './UserInput.scss';
const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1000,
    'expected-return': 7,
    'duration': 1,
};
const UserInput = (props) => {


    const [userInput, setUserInput] = useState(initialUserInput);

    const submitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInput);
    };

    const resetHandler = (event) => {
        console.log('Reset');
        setUserInput(initialUserInput);
        return;
    };

    const changeHandler = (input, value) => {
        console.log(input, value);
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value,
            };
        });
    };

    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        type="number"
                        id="current-savings"
                        onChange={(event) =>
                            changeHandler('current-savings', event.target.value)
                        }
                        value={userInput['current-savings']}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        type="number"
                        id="yearly-contribution"
                        onChange={(event) =>
                            changeHandler('yearly-contribution', event.target.value)
                        }
                        value={userInput['yearly-contribution']}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        type="number"
                        id="expected-return"
                        onChange={(event) =>
                            changeHandler('expected-return', event.target.value)
                        }
                        value={userInput['expected-return']}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        type="number"
                        id="duration"
                        onChange={(event) =>
                            changeHandler('duration', event.target.value)
                        }
                        value={userInput['duration']}
                    />
                </p>
            </div>
            <p className="actions">
                <button type="reset" onClick={resetHandler} className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default UserInput;
