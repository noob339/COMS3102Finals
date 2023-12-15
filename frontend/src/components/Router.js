import Header from './Header.js';
import Footer from './Footer';
import Contact from '../pages/Contact.js';
import Home from '../pages/Home.js';
import AnimalFacts from '../pages/AnimalFacts.js';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';

function Router(){


    const Layout = () => {
        return(
          <>
            <Header/>
            <Outlet/>
            <Footer/>
          </>
        );
      }

    return(
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="contact-us" element={<Contact/>} />
                    <Route path="facts/:id" element={<AnimalFacts/>} />
                </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;