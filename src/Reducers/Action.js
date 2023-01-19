// const initialState=10
// const changeTheNumber=(state=initialState,action)=>{
//     switch(action.type){
//         case "INCREMENT":return state + 1;
//         case "DECREMENT":return state - 1;
//          default : return state;

//     }

// }
// export default changeTheNumber;
let initial = false;

export const darkReducer = (state = initial, action) => {
  switch (action.type) {
    case "DARK":
      return !state;
    default:
      return state;
  }
};
