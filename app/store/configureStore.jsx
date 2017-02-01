import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from "redux";
import {loginReducer, recipesListReducer} from "reducers";
import promise from "redux-promise";

export var configure = (initialState = {loggedIn: null}) => {
    var reducers = combineReducers({
        loggedIn: loginReducer,
        recipesList: recipesListReducer
    });

    var store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    var createStoreWithMiddleware = applyMiddleware(promise)(createStore);

    return createStoreWithMiddleware(reducers);
}