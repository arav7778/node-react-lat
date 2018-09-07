import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
      super(props);
      this.state={
        headerText: "Welcome to React!",
        contentText:"In this lecture,we will go over component"
      };
  } 

  render() {
    
return (
   <div className="App">
   
   <h3> hello world </h3>
   { 

    
     <Header/> 
     /*<Content/>
     */
    }
    <h3> {this.state.headerText} </h3>
    <p> {this.state.contentText }  </p>
   
   </div>


  );

  }  
}

class Header extends Component {
   render() {
       return (
          <div className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React1</h1>
          </div>


        );
   }

}

class Content extends Component {
   constructor(props) {
    super(props);
    this.state={
      data: [
         {
           "id":1,
           "name":"foo",
           "age" : "30"
         },
         {
          "id":2,
          "name" : "Bar",
          "age" : "35"
         },
         {
           "id":3,
           "name" : "Baz",
            "age":"35"
         }
          
      ]
      }
    }
  
  
  render() {
        var mystyle = {
       fontSize: 100,
       color:'red'
    };
    var mystyle1='test1';
      return (
     <table>
         <thead>
             <th>
                <td> Id </td>
                <td> Name </td>
                <td>Age </td>
             </th>
         </thead>
         <tbody>
              {this.state.data.map((item,i) => <TableRow ke1y={i} data1={item}/>)}
         </tbody>

      </table>

        );
  }
}

class TableRow extends Component {
  render() {
    return (
        <tr>
           <td> {this.props.data1.id}  - {this.props.ke1y}</td>
        </tr>
     
    );
  }
}
export default App;

