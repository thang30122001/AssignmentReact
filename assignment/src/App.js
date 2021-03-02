import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Products from './components/products/Products';
import Categories from './components/categories/Categories';
import Home from './components/Home';


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
         
         

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                  <Link to="/home">Trang chủ</Link>
                </li>
              <li class="nav-item ml-4">
                <Link to="/products">Sản phẩm</Link>
              </li>
              <li class="nav-item ml-4">
                <Link to="/categories">Danh mục</Link>
              </li>
              {/* <li class="nav-item dropdown ml-4">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Danh mục
        </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li> */}
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>





      </div>
      <Switch>
      <Route path="/home"><Home/></Route>
        <Route path="/products"><Products /></Route>
        <Route path="/categories"><Categories /></Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
