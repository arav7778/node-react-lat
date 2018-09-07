import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Layout,Header,Content,Navigation,Drawer} from 'react-mdl'
import  Router from 'react-router-dom/HashRouter'
import Link from 'react-router-dom/Link'

function closeDrawer() {
    document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
}

class App extends Component {

  render() {
    
return (
 
  <div className="App">
     <Router>
                  <Layout fixedHeader>
                      <Header title='Product Hunt PWA'>
                                <Navigation className='hide-on-sm'>
                                          <Link to='/techproducts'> Tech products </Link>
                                          <Link to='/gameproducts'> Game Products </Link>

                                </Navigation>
                      </Header>
<Drawer title="product hunt">
            <Navigation>
                <Link to='/techproducts' onClick={closeDrawer} > Tech products </Link>
                                          <Link to='/gameproducts' onClick={closeDrawer}> Game Products </Link>

            </Navigation>
        </Drawer>
                      <Content>
                           Dynamic Content here 
                      </Content>
                  </Layout>
         </Router>        
         </div>


  );

  }  
}

export default App;
