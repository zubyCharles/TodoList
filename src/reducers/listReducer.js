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
      return state.filter((_, index) => index !== action.index);
    case 'toggleTaskState':
      return state.map((task, index) =>
        task.title === action.title
          ? task.status === 'active'
            ? { ...task, status: 'completed' }
            : { ...task, status: 'active' }
          : task
      );
    default:
      return state;
  }
};

export default reducer;
