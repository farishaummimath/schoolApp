import React from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap'
import SchoolList from './components/schools/List'
import SchoolNew from './components/schools/New'
import SchoolShow from './components/schools/Show'
import Home from './components/Home/Home'
import SchoolEdit from './components/schools/Edit'

function App() {
  return (
    <BrowserRouter>
      <>
      <Navbar color="blue" dark expand="md" className="mb-5 bg-primary">
        <NavbarBrand>My School App</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link text-white" to="/">Home</Link>
            </NavItem>
                <NavItem>
                  <Link className="nav-link text-white" to="/schools">Schools</Link>
                </NavItem>
                </Nav>
      </Navbar>
      <div className ="container">
        <Switch>
          <Route path="/" component ={Home} exact ={true}/>
          <Route path="/schools" component={SchoolList} exact = {true}/>
          <Route path ="/schools/new" component={SchoolNew} exact = {true}/>
          <Route path="/schools/edit/:id" component={SchoolEdit} exact = {true}/>
          <Route path="/schools/:id" component={SchoolShow} exact = {true}/>

        </Switch>
      </div>
      
      </>
    </BrowserRouter>
  );
}

export default App;
