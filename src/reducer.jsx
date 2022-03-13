export const reducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((tareas) => tareas.id !== action.payload);
    default:
      return state;
  }
};
