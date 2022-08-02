
import './styles/App.css';
import { useHandles } from './hooks/useHandles';

function App() {
  const { value, todo, handleChange, handleAdd, handleEdit, handleChecked, handleDelete } = useHandles();

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
                <input type="text" className='input' value={todo.value} onChange={(e) => handleEdit(todo.id, e.target.value)} disabled={todo.checked} />
                <input type="checkbox" className='input' onChange={(e) => handleChecked(todo.id, todo.checked)} />
                <button className='btnDelet' onClick={() => handleDelete(todo.id)}>-</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
}

export default App;
