import React, {useState} from 'react';
import Context from "./Context";
import {url, endPoints} from "../constants"

const getLocalItem = () => {
    let list = localStorage.getItem('todos')
    if (list) {
        return JSON.parse(localStorage.getItem('todos'))
    } else {
        return []
    }
}

function ContextProvider({children}) {

    const {api} = url
    const {CHARACTERS, LOCATIONS, EPISODES} = endPoints
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pageOfCharacters, setPageOfCharacters] = useState(1);
    const [pageNumber, setpageNumber] = useState(1);

    let [todos, setTodos] = useState(getLocalItem())


    const onTodoCreate = (newTodo) => {
        if (!newTodo || !newTodo.title) {
            console.error('wrng arg for new todo, should be smth like {title: "..."}')
            return
        }
        setTodos([newTodo, ...todos])
    }

    const isDoneToggle = (id, checkedWishListCheckbox) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.complited = !checkedWishListCheckbox
            }
            return todo
        }))
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const nextPageHandler = () => {
        setPageOfCharacters(pageOfCharacters + 1)
    }
    const prevPageHandler = () => {
        setPageOfCharacters(pageOfCharacters - 1)
    }

    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
    }


    return (
        <Context.Provider value={{
            CHARACTERS,
            LOCATIONS,
            EPISODES,
            error,
            nextPageHandler,
            prevPageHandler,
            api,
            pageOfCharacters,
            pageNumber,
            onlyUnique,
            removeTodo,
            isDoneToggle,
            todos,
            isLoading,
            onTodoCreate,
            setError,
            setIsLoading,
            setpageNumber
        }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;