import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
	const [todoList, setTodoList] = useState([
		{ id: 1, title: "toi thich di choi" },
		{ id: 2, title: "toi ko thich di lam" },
	]);

	return <TodoItem toDoList={todoList} />;
}

export default TodoList;
