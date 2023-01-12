import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosAction';

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
            {
                todos?.map(todo => <div>{todo.title}</div>)
            }
        </div>
    );
};

export default Todos;