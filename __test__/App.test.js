import React from "react";
import { shallow } from "enzyme";
import App from "../src/App.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../src/reducers";

const store = createStore(rootReducer);

it("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
