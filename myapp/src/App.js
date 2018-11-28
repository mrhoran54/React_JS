import React, { Component } from 'react';
import ReactDelayRender from 'react-delay-render';
import './App.css';

// using my local api & database
const API = 'http://localhost:8080/api/thisforthat';


// I was originally using the API that they provided to get the react working until I made my own API
//const API = 'http://itsthisforthat.com/api.php?json';
//const proxyURL = 'https://cors-anywhere.herokuapp.com/';


class App extends Component {

    // add a constructor so we can preserve state
    //x is going to hold the value of "this"
    //y is going to hold the value of "that"
    // isloading is basically what it sounds like! to see if we are still loading from the api on render
   constructor(props) {
    super(props);
    this.state = {
      x: [],
      y: [],
      isloading: false,
    };
  }

// this sets the state on first render
//is executed before rendering, on both the server and the client side.
  componentDidMount(){

    this.setState({isloading: true}) // about to load the data

    fetch(API)
    .then(blob => blob.json())
    .then(data => {
      this.setState({x: data.this, y: data.that, isloading: false}); // once we get the data we aren't loading
    })
    .catch(e => {
      console.log(e);
      return e;
    });       
    }

    // function to handle the return the data when you click the "that" option
    // functionally the same API call as componentDidMount except it is just updating one state

    handleClick_that() {

      fetch(API)
      .then(blob => blob.json())
      .then(data => {

        this.setState({x:data.that});
      })

      }

    // function to handle the return the data when you click the "that" option
    // functionally the same API call as componentDidMount except it is just updating one state
    handleClick_this() {

      fetch(API)
      .then(blob => blob.json())
      .then(data => {

        this.setState({y:data.this});
      })

      }

  // the actual rendering of the page

  render() {

    // if we are loading, displaying the loading page for better user experience

    const { isloading } = this.state;

    if (isloading){
      return <p> Loading... </p>
    }

    return (

      <div className="App">

         <header className="App-header2"> 

            So, Basically, it's a
             
            </header>

         <header className="App-header" 
            onClick={
            () => this.handleClick_this()}>
            
            {this.state.y}
            
          </header>

          <text> {"\n"} for </text>

        <header className="App-header" 
            onClick={
            () => this.handleClick_that()}>
            
            {this.state.x}
            
          </header>
          
          <button className="App-button"
            onClick={
            () => this.componentDidMount()}>

            Refresh
              
          </button>   

      </div>

    );


  }
}

export default App;



