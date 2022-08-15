import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
	const [todoList, setTodoList] = useState([
		{ id: 1, title: "toi thich di choi" },
		{ id: 2, title: "toi ko thich di lam" },
	]);

	const [postList, setPostList] = useState([]);
	useEffect(() => {
		axios
			.get("http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1")
			.then((res) => {
				const data = res.data;
				setPostList(data.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return <TodoItem toDoList={postList} />;
}

export default TodoList;
