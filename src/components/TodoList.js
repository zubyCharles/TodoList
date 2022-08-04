import { useTodoList } from '../contexts/ListContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useTodoList();

  return (
    <div className="w-[90%] mx-auto bg-white dark:bg-[#272937] -translate-y-12 rounded-md">
      <ul className="w-[100%]">
        {todos.map(({ title, status }, index) => (
          <TodoItem title={title} status={status} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
