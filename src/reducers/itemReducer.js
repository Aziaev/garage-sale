import initialState from '../initial-state';

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {
    case 'ITEM_ADDED':
      let all = [...updated.all, action.data];
      updated['all'] = all;
      return updated;
    default:
      return updated;
  }
}