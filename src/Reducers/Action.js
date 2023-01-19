let initial = false;

export const darkReducer = (state = initial, action) => {
  switch (action.type) {
    case "DARK":
      return !state;
    default:
      return state;
  }
};
