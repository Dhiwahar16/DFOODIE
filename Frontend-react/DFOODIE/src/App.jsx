  import React from 'react'
  import { Route, Routes } from 'react-router-dom';
  import Navbar from './components/Navbar/Navbar';
  import Menu from './components/Menu/Menu';
  import Contact from './components/Contact/Contact';
  import About from './components/About/About';
  import Items from './components/Items/Items';
  import Cart from './pages/Cart/Cart';
  import ItemProvider from './components/Items/ItemsProvider';
  import MenuProvider from './components/Menu/MenuProvider';
  import { useSelector } from 'react-redux';
  import Footer from './pages/Footer/Footer';
  import Header from './components/Header/Header';
  import CheckOut from './pages/CheckOut/CheckOut';
  import Delivery from './pages/Delivery/Delivery';
  import PlaceOrder from './pages/Order/PlaceOrder';
import ScrollToTop from './ScrollToTop';


  const App = () => { 
    const category=useSelector((state)=>state.category.value);
    const menu=useSelector((state)=>state.menu.value);
    const cartitems=useSelector((state)=>state.cart.value);

    return (
      <div className='app-all'>
      <div className='app'>
        <ScrollToTop />
        <Navbar menu={menu} />
        <Routes>
          <Route path='/' element={<Header menu={menu} />} />
          <Route path='/Menu' element={<MenuProvider> <Menu /></MenuProvider> } />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/Items' element={<ItemProvider><Items cartitems={cartitems} category={category} /></ItemProvider>} />
          <Route path='/Cart' element={<Cart cartitems={cartitems} />} />
          <Route path='/CheckOut' element={<CheckOut cartitems={cartitems} />} />
          <Route path='/Delivery' element={<Delivery />} />
          <Route path='/PlaceOrder' element={<PlaceOrder cartitems={cartitems} />} />
        </Routes>
        
      </div>
      <Footer menu={menu} />
      </div>
    )
  }

  export default App