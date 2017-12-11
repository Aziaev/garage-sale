var initialState = {
  all: null
};

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {
    case 'ITEM_ADDED':
      return updated;
    default:
      return updated;
  }

}