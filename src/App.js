import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
		<Mobile></Mobile>
    </div>
  );
}

function Mobile(){
	const [charge, setCharge] = useState(100)
	const increaseCharge = ()=>{
		let valueIncrease = charge + 10;
		if(valueIncrease<100 || valueIncrease===100){
			setCharge(valueIncrease);
		}
	}
	const decreaseValue = () =>{
		let newValue = charge - 10;
		if(newValue>0 || newValue===0){	
			setCharge(newValue);
		}
	}
	const reset = () =>{
		let resetValue = 100;
		setCharge(resetValue)
	}
	return (
		<div>
			<h1>Mobile Charge:<span style={{color: 'red'}}>{charge + '%'}</span></h1>
			<button onClick={decreaseValue}>Battery Down</button>
			<button onClick={increaseCharge}>Battery Up</button>
			<button onClick={reset}>Full Charge</button>
		</div>
	)
}
export default App;
