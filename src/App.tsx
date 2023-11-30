import { Provider } from "react-redux";
import "./App.css";
import GlobalStyles from "./GlobalStyles";
import OrderDetailsContainer from "./containers/OrderDetailsContainer";
import AppHeader from "./modules/common/AppHeader";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <div className="container">
        <AppHeader />
        <main>
          <OrderDetailsContainer />
        </main>
      </div>
    </Provider>
  );
}

export default App;
