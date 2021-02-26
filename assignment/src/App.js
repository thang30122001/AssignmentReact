import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products/Products';
import Categories from './components/categories/Categories';


import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/products">Products</Link>
        </li>
        <li class="nav-item">
        <Link to="/categories">Categories</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex ">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
       
      </div>
      <Switch>
        <Route path="/products"><Products /></Route>
        <Route path="/categories"><Categories /></Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
