import React, { useState } from "react";

const Todos = () => {
	
	const [newInput, setNewInput ] = useState('');
	const [newTodo, setNewTodo ] = useState([]);
	function addNewTodo(){
		setNewTodo(newTodo.concat(newInput))
		setNewInput('')
	}
	
	return (
		<div className="notepad">
				<h1 className="todos-title">todos</h1>
				<input className="input-notes" value={newInput} onKeyDown={(e) => (e.keyCode === 13 ? addNewTodo(e) : null)} onChange={(e)=>setNewInput(e.target.value)} placeholder="What needs to be done?" type="text" name="firstName" />
				{newTodo.map( (element, index) =><p className="element" key={index}>{element}</p>)}
				<p className="footer">{newTodo.length} items left</p>
        </div>
	);
};

export default Todos;
