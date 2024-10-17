import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import { userReducer } from "./reducers/userSlice";
import { movieReducer } from "./reducers/movieSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store;