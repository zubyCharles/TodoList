const reducer = (state, action) => {
  switch (action.type) {
    case 'addTask':
      return [
        ...state,
        {
          title: action.title,
          status: action.status,
        },
      ];
    case 'removeTask':
      return state.filter((task, _) => task.title !== action.title);
    case 'toggleTaskState':
      return state.map((task, _) =>
        task.title === action.title
          ? task.status === 'active'
            ? { ...task, status: 'completed' }
            : { ...task, status: 'active' }
          : task
      );
    case 'clearCompleted':
      return state.filter(({ status }) => status !== 'completed');
    case 'reorderList':
      return (() => {
        const items = Array.from(state);
        const [movedItem] = items.splice(action.source, 1);
        items.splice(action.destination, 0, movedItem);
        return items;
      })();
    default:
      return state;
  }
};

export default reducer;
