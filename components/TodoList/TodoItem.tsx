import React from 'react';

const lists = [
  {
    id: 1,
    name: "di choi 1"
  },
  {
    id: 2,
    name: "di choi d"
  },
  {
    id: 3,
    name: "di  3"
  }

]
function TodoItem() {
  return (
    <div>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>{list.name}</li>
        ))}
       
      </ul>
    </div>
  );
}

export default TodoItem;