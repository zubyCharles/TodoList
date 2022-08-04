const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          title: action.title,
          status: action.status,
        },
      ];
    case 'remove':
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
};

export default reducer;
