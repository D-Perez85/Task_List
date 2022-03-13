export const reducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((tareas) => tareas.id !== action.payload);
      case 'toggle': 
    return state.map((value)=>
        (value.id === action.payload) ? 
        {
          ...value, 
          done: !value.done
        } : value
    )
    default:
      return state;
  }
};
