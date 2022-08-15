import React from "react";

interface ITodoItemProps {
	toDoList: TodoList[];
}

function TodoItem({ toDoList }: ITodoItemProps) {
	return (
		<div>
			<ul>
				{toDoList.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
}

export default TodoItem;
