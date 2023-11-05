import React, { useCallback } from 'react';
import Header from './components/Header/Header'
import Userinput from './components/UserInput/UserInput';
import ResultTable from './components/ResultsTable/ResultsTable';
import { useState } from 'react';
function App() {
  const [userInput,setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    setUserInput(userInput);

    // do something with yearlyData ...
  };
  const yearlyData = [];// per-year results

  if(userInput){

    let currentSavings = userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput['expected-return'] / 100;
    const duration = userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <div>
      <Header />
      <Userinput onCalculate={calculateHandler}/>
      {!userInput && <p className='alterTable'>Enter your data to see results</p>}
      {userInput && <ResultTable data ={yearlyData} initialInvestment={userInput['current-savings']}/> }

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}     
    </div>
  );
}

export default App;
