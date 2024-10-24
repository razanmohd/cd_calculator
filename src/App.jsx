import TextField from '@mui/material/TextField';
import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle, setPrinciple] = useState();
  const [rate, setRate] = useState();
  const [year, setYear] = useState();
  const [isPrincipleInputValid, setIsPrincipleInputValid] = useState(false);
  const [isRateInputValid, setIsRateInputValid] = useState(false);
  const [isYearInputValid, setIsYearInputValid] = useState(false);
  const [interest, setInterest] = useState(0);

  const handleValidation = (tag) => {
    const { name, value } = tag;

    if (!!value.match(/^\d*\.?\d+$/)) {
      // valid condition
      if (name === "principle") {
        setPrinciple(value);
        setIsPrincipleInputValid(false);
      } else if (name === "year") {
        setYear(value);
        setIsYearInputValid(false);
      } else {
        setRate(value);
        setIsRateInputValid(false);
      }
    } else {
      // invalid condition
      if (name === "principle") {
        setPrinciple(value);
        setIsPrincipleInputValid(true);
      } else if (name === "year") {
        setYear(value);
        setIsYearInputValid(true);
      } else {
        setRate(value);
        setIsRateInputValid(true);
      }
    }
  };

  const calculate = (e) => {
    e.preventDefault();
    if (!isPrincipleInputValid && !isRateInputValid && !isYearInputValid) {
      const calculatedInterest = (principle * rate * year) / 100;
      setInterest(calculatedInterest);
    }
  };

  const reset = () => {
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setInterest(0);
    setIsPrincipleInputValid(false);
    setIsRateInputValid(false);
    setIsYearInputValid(false);
  };

  return (
    <>
      <div style={{ minHeight: "100vh", width: "100%" }} className="d-flex justify-content-center align-items-center">
        <div className="bg-info p-5 rounded">
          <h2>Simple Interest Calculator</h2>
          <p>Calculate your simple interest with us</p>
          <div className="d-flex justify-content-center align-items-center p-5 rounded bg-warning">
            <h1>{interest}</h1>
          </div>
          <div className="mt-5">
            <form style={{ boxShadow: "4px 6px 8px black" }} className='border rounded  d-flex flex-column'>
              <TextField
                style={{ backgroundColor: "whitesmoke" }}
                id="principle"
                name='principle'
                value={principle}
                onChange={(e) => handleValidation(e.target)}
                label="Principle Amount"
                variant="outlined"
              />
              {isPrincipleInputValid && <div className="text-danger">Invalid input</div>}

              <TextField
                style={{ backgroundColor: "whitesmoke" }}
                id="year"
                name='year'
                value={year}
                onChange={(e) => handleValidation(e.target)}
                label="Year"
                variant="filled"
              />
              {isYearInputValid && <div className="text-danger">Invalid input</div>}

              <TextField
                style={{ backgroundColor: "whitesmoke" }}
                id="rate"
                name='rate'
                value={rate}
                onChange={(e) => handleValidation(e.target)}
                label="Rate of Interest"
                variant="standard"
              />
              {isRateInputValid && <div className="text-danger">Invalid input</div>}
            </form>
          </div>
          <div className="mt-3 d-flex justify-content-around">
            <Button onClick={calculate} type='submit' variant="contained" className='bg-success'>Calculate</Button>
            <Button onClick={reset} variant="contained" className='bg-danger'>Reset</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;