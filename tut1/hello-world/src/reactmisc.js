
/*
    var i=2;
    
    var mystyle = {
       fontSize: 100,
       color:'red'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" >
          To get started, edit <code>src/App.js</code> and save to reload.
          <h3 style={mystyle}> test world </h3>
          <p> {1+1} {1==1 ? "true" : "false"} </p>
        </p>
      </div>
    ); */ 

     {this.state.data.map((item,i) => <tr> <td key={i}>{item.id}</td> </tr>)}