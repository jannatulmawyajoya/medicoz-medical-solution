import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import SingleService from './components/SingleService/SingleService';
import Login from './components/Login/Login/Login';
import Menubar from './components/MenuBar/MenuBar';
import Footer from './components/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Department from './components/Department/Department';
import MoreServices from './components/MoreServices/MoreServices';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Register from './components/Register/Register';





function App() {
  return (
    <div className="App">
     <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
             <Register></Register>
            </Route>
            <PrivateRoute path="/departments">
              <Department></Department>
            </PrivateRoute>
            <Route path="/services">
              <MoreServices></MoreServices>
            </Route>
            <Route path="/contactUs">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/singleService/:serviceId">
              <SingleService></SingleService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
     </AuthProvider>
      
    </div>
  );
}

export default App;
