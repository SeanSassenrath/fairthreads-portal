const initialState = [
  { name: 'test1' }, { name: 'test2' }
]

const productsReducer = (state =initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default productsReducer;