import initialState from '../initial-state';

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {
    case 'CENTER_CHANGED':
      updated['mapCenter'] = action.data;
      return updated;
    default:
      return updated;
  }
}