import { Switch, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndOut from "./pages/sign-in-and-up/sign-in-and-up.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndOut} />
      </Switch>
    </div>
  );
}

export default App;
