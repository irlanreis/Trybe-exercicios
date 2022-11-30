import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

// 1. Cria o reduce com o estado inicial

const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action) => {
    if(action.type === "INCREMENT_COUNTER") {
        return { count: state.count + 1 };
    }
    return state;
}

// 2. Cria a store já com Redux dev tools

const store = createStore(reducer, composeWithDevTools());

// 3. Cria a action(ação)

const action = { type: "INCREMENT_COUNTER" };

// 4. Dispara a nossa action

const incrementButton = document.querySelector("button");
incrementButton.addEventListener("click", () => {
    store.dispatch(action);
});

// Lendo as alterações do estado

store.subscribe(() => {
    const globalState = store.getState();

    const counterElement = document.querySelector("h2");
    counterElement.innerHTML = globalState.count;
})