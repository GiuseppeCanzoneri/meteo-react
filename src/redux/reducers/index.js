const initialState = {
  weather: null,
  favourites: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_WEATHER":
      return {
        weather: action.payload,
        favourites: state.favourites,
      };
    case "STORE_CITY":
      return {
        weather: state.weather,
        favourites: [action.payload, ...state.favourites],
      };
    default:
      return state;
  }
};

export default mainReducer;
