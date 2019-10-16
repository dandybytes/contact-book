import {createStore} from "redux";
import rootReducer from "../reducers/reducerRoot";

const saveToLocalStorage = state => {
    try {
        localStorage.setItem("contactBook", JSON.stringify(state));
    } catch (error) {
        console.error("saving to local storage failed: ", error);
    }
};

const loadFromLocalStorage = () => {
    try {
        const savedState = localStorage.getItem("contactBook");
        if (savedState === null) return undefined;
        return JSON.parse(savedState);
    } catch (error) {
        console.error("failed to retrieve state from local storage: ", error);
        return undefined;
    }
};

const storeFromLocalStorage = loadFromLocalStorage();

const store = createStore(
    rootReducer,
    storeFromLocalStorage,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
