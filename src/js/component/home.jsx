import React, { useState, Component } from "react";

const Home = () => {
	
	const [newInput, setNewInput ] = useState('');
	const [newTodo, setNewTodo ] = useState([]);
	function addNewTodo(){
		setNewTodo(newTodo.concat(newInput))
		setNewInput('')
	}
	
	return (
		<>
				<h1 className="todos-title">todos</h1>
				<input value={newInput} onChange={(e)=>setNewInput(e.target.value)} type="text" name="firstName" />
				{newTodo.map( (element, index) =><p key={index}>{element}</p>)}
				<button onClick={addNewTodo}></button>
				<p>{newTodo.length} items left</p>
		</>
				
	);
};

export default Home;
