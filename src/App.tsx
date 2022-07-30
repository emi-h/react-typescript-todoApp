import React, { useState } from 'react';
import './styles/App.css';

function App() {
  const [value, setValue] = useState<string>('');
  const [todo, setTodo] = useState<Todo[]>([]);

  type Todo = {
    id: number;
    value: string;
    checked: boolean;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // make newTodo
    const newTodo: Todo = {
      id: todo.length,
      value: value,
      checked: false,
    }
    setTodo([...todo, newTodo]);
    setValue('');
  };

  const handleEdit = (id: number, value: string) => {
    const newTodo = todo.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    });

    setTodo(newTodo);
  };
  // const handleDelete = (id: number) => {
  //   const newTodo = todo.filter((todo) => todo.id !== id);
  //   setTodo(newTodo);
  // }

  return (
    <div className="App">
      <h1>Todo App 🗒</h1>
      <div className="app_inner">
        <div className="inputArea">
          <input type="text" className='input' value={value} onChange={(e) => handleChange(e)} />
          <button className='btnAdd' onClick={(e) => handleAdd(e)}>+</button>
        </div>
        <ul className='todolist'>
          {todo.map((todo) => (
            <li key={todo.id}>
              <div className='txt'>
                <input type="text" className='input' value={todo.value} onChange={(e) => handleEdit(todo.id, e.target.value)} />
              </div>
              {/* <button className='btnDelet' onClick={() => handleDelete(todo.id)}>-</button> */}
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
}

export default App;
