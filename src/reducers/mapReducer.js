let initialState = {
  currentLocation: { lat: 40.72224017, lng: -73.9896 }
};

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch (action.type) {
    case 'LOCATION_CHANGED':
      console.log(`LOCATION_CHANGED IN MAP REDUCER : ${JSON.stringify(action.data)}`);
      updated['currentLocation'] = action.data;
      return updated;
    default:
      return updated;
  }
}