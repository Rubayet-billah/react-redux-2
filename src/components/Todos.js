import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosAction';
import './Todos.css'

const Todos = () => {
    const { todos, isLoading, error } = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos())
    }, [])

    return (
        <div>
            <h1>Todos App</h1>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            <main className='parent-container'>
                {
                    todos?.map(todo => {
                        return <section key={todo.id}>
                            <div className='child-container'>
                                <p>{todo.id}</p>
                                <p>{todo.title}</p>
                            </div>
                        </section>
                    })
                }
            </main>
        </div>
    );
};

export default Todos;