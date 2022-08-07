import { useTodoList } from '../contexts/ListContext';
import Check from '../assets/icon-check.svg';
import Cross from '../assets/icon-cross.svg';

const TodoItem = ({ title, status }) => {
  const { dispatch } = useTodoList();

  const removeItem = (title) => {
    dispatch({
      type: 'removeTask',
      title,
    });
  };

  const toggleTaskState = (title) => {
    dispatch({
      type: 'toggleTaskState',
      title,
    });
  };

  return (
    <li className="w-[100%] flex flex-row justify-between items-center border-b-[.1px] border-b-slate-300 dark:border-b-slate-700 p-4">
      <div className="flex flex-row items-center">
        <span
          className={`${
            status === 'completed' ? 'radio-gradient' : null
          } w-[20px] h-[20px] border-[1px] border-slate-200 dark:border-slate-700 rounded-[50%] cursor-pointer`}
          onClick={() => {
            toggleTaskState(title);
          }}
        >
          {status === 'completed' && (
            <img
              className="w-[50%] m-auto translate-y-[70%]"
              src={Check}
              alt=""
            />
          )}
        </span>
        <span
          className={`${
            status === 'completed'
              ? 'text-slate-400 dark:text-slate-600'
              : 'text-slate-600 dark:text-slate-400'
          } font-semibold text-xs pl-2 ${
            status === 'completed' ? 'line-through' : null
          }`}
        >
          {title}
        </span>
      </div>
      <span className="cursor-pointer" onClick={() => removeItem(title)}>
        <img className="w-[70%]" src={Cross} alt="" />
      </span>
    </li>
  );
};

export default TodoItem;
