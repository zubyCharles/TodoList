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
    default:
      return state;
  }
};

export default reducer;
