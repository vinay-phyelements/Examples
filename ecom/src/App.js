import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ShopCategory from "./Components/Pages/ShopCategory"
import Shop from "./Components/Pages/Shop"
import Product from "./Components/Pages/Product"
import Cart from "./Components/Pages/Cart"
import LoginSignup from "./Components/Pages/LoginSignup"
import Grid1 from './Components/Grid1';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category='men'/>}/>
      <Route path='/womens' element={<ShopCategory category='women'/>}/>
      <Route path='/kids' element={<ShopCategory category='kid'/>}/>
      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/loginsignup' element={<LoginSignup/>}/>

      </Routes>
      </BrowserRouter> */}
      <Grid1/>
    </div>
  );
}

export default App;
