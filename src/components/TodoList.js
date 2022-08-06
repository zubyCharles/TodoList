import { useTodoList } from '../contexts/ListContext';
import { useTabContext } from '../contexts/TabContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useTodoList();

  const { activeTab } = useTabContext();

  return (
    <div className="w-[90%] mx-auto bg-white dark:bg-[#272937] -translate-y-12 rounded-md">
      <ul className="w-[100%]">
        {todos
          .filter(({ status }) => {
            switch (activeTab) {
              case 'active':
                return status === 'active';
              case 'completed':
                return status === 'completed';
              case 'all':
                return todos;
              default:
                return todos;
            }
          })
          .map(({ title, status }, index) => (
            <TodoItem title={title} status={status} index={index} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
