import { useState } from 'react';
import { useTodoList } from '../contexts/ListContext';

const InputField = () => {
  const [todoTitle, setTodoTitle] = useState('');

  const { dispatch } = useTodoList();

  const handleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const addItem = () => {
    if (
      todoTitle.toString().match(/^$/) ||
      todoTitle.toString().length < 1 ||
      todoTitle
        .toString()
        .split('')
        .every((char) => char === ' ')
    ) {
      return setTodoTitle('');
    }
    dispatch({
      type: 'add',
      title: todoTitle,
      status: 'active',
    });
    setTodoTitle('');
  };

  return (
    <div className="input-div flex items-center w-[90%] pb-20 mx-auto">
      <input
        className="w-[100%] dark:bg-[#272937] text-sm text-slate-600 dark:text-slate-400 py-3 pl-4 mx-auto rounded outline-none"
        onChange={handleChange}
        value={todoTitle}
        type="text"
        placeholder="Create a new todo..."
      />
      <button
        className="text-slate-200 font-semibold p-3 bg-violet-600"
        onClick={addItem}
      >
        Add
      </button>
    </div>
  );
};

export default InputField;
