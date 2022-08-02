
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../type/todo';

export const useHandles = () => {
    const [value, setValue] = useState<string>('');
    const [todo, setTodo] = useState<Todo[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // make newTodo
        if (value !== "") {
            const newTodo: Todo = {
                id: uuidv4(),
                value: value,
                checked: false,
            }
            setTodo([...todo, newTodo]);
            setValue('');
        }
    };

    const handleEdit = (id: string, value: string) => {
        const newTodo = todo.map((todo) => {
            if (todo.id === id) {
                todo.value = value;
            }
            return todo;
        });

        setTodo(newTodo);
    };

    const handleChecked = (id: string, checked: boolean) => {
        const newTodo = todo.map((todo) => {
            if (todo.id === id) {
                todo.checked = !checked;
            }
            return todo;
        });

        setTodo(newTodo);
    };

    const handleDelete = (id: string) => {
        const newTodo = todo.filter((todo) => todo.id !== id);
        setTodo(newTodo);
    };

    return { value, todo, handleChange, handleAdd, handleEdit, handleChecked, handleDelete };
}