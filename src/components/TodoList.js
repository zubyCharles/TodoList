import { useTodoList } from '../contexts/ListContext';
import { useTabContext } from '../contexts/TabContext';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, dispatch } = useTodoList();

  const { activeTab } = useTabContext();

  const filterActiveTab = (tab) => {
    return todos.filter(({ status }) => {
      switch (tab) {
        case 'active':
          return status === 'active';
        case 'completed':
          return status === 'completed';
        case 'all':
          return todos;
        default:
          return todos;
      }
    });
  };

  const clearCompleted = () => {
    dispatch({
      type: 'clearCompleted',
    });
  };

  return (
    <div className="w-[90%] lg:w-[40%] mx-auto bg-white dark:bg-[#272937] -translate-y-12 rounded-md">
      <DragDropContext>
        <Droppable droppableId="lisItems">
          {(provided) => (
            <ul
              className="w-[100%]"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filterActiveTab(activeTab).map(({ title, status }, index) => (
                <Draggable key={title} draggableId={title} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoItem title={title} status={status} index={index} />
                    </div>
                  )}
                </Draggable>
              ))}
              {/* {provided.placeholder} */}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className="w-[100%] flex flex-row justify-between p-4">
        <p className="text-xs text-slate-400">
          {filterActiveTab(activeTab).length === 1
            ? `1 item left`
            : `${filterActiveTab(activeTab).length} items left`}
        </p>
        <p
          className="clear-btn text-xs text-slate-400 cursor-pointer font-semibold hover:text-violet-600"
          onClick={clearCompleted}
        >
          Clear Completed
        </p>
      </div>
    </div>
  );
};

export default TodoList;
