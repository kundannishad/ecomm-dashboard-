import './App.css';
import { BrowserRouter, Route, Routes,Switch } from 'react-router-dom'
import Login from "./Login"
import Register from "./Register"
import AddProduct from "./AddProduct"
 import UpdateProduct from "./UpdateProduct"
 import Protected from "./Protected"
 import ProductList from './ProductList';


 

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/add" element={<AddProduct></AddProduct>}></Route>
          <Route path="/update" element={<UpdateProduct></UpdateProduct>}></Route>
        </Routes>
      </BrowserRouter> */}

<BrowserRouter>

        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path='/add' element={<Protected Cmp={AddProduct} />}></Route>
          <Route path='/update/:id' element={<Protected Cmp={UpdateProduct} />}></Route>
          <Route path='/' element={<ProductList></ProductList>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
