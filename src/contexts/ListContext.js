import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import reducer from '../reducers/listReducer';
import Tab from './TabContext';
import data from '../data/TodoList.json';

const { Todos } = data;

const ListContext = createContext();

export const useTodoList = () => useContext(ListContext);

const ListContextProvider = ({ children }) => {
  const [todosArray] = useState(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem('todoList'));
    if (localStorageTodos) {
      return localStorageTodos;
    }
    return Todos;
  });

  const [todos, dispatch] = useReducer(reducer, todosArray);

  // const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
  }, [todos]);

  return (
    <ListContext.Provider value={{ todos, dispatch }}>
      <Tab>{children}</Tab>
    </ListContext.Provider>
  );
};

export default ListContextProvider;
