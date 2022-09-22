import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
		<Mobile></Mobile>
		<Todos></Todos>
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

//Create New API Load Componenet
function Todos(){
	const [todos, setTodo] = useState([''])
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/todos')
		.then(res=>res.json())
		.then(data=>setTodo(data))
	},[])
	return (
		<div className="container">
			{
				todos.map(todo=><Showdata userid={todo.userId} title={todo.title}></Showdata>)
			}
		</div>
	)
}


function Showdata(props){
	return (
		<div>
			<h3>UserId: {props.userid}</h3>
			<p>Title: {props.title}</p>
		</div>
	)
}
export default App;
