const counterReducer = (state = 60, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
  
    default:
      return state;
  }
}

export default counterReducer;