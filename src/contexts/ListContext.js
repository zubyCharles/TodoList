import { createContext, useContext, useReducer, useState } from 'react';
import reducer from '../reducers/listReducer';
import Tab from './TabContext';
import data from '../data/TodoList.json';

const { Todos } = data;

const ListContext = createContext();

export const useTodoList = () => useContext(ListContext);

const ListContextProvider = ({ children }) => {
  const [todosArray] = useState(Todos);

  const [todos, dispatch] = useReducer(reducer, todosArray);

  return (
    <ListContext.Provider value={{ todos, dispatch }}>
      <Tab>{children}</Tab>
    </ListContext.Provider>
  );
};

export default ListContextProvider;
