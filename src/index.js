import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


class Course extends React.Component{
  constructor(props){
      super(props);
      this.state={
          click:"No"
      }
      this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
      this.setState({
          click:"yes"
      });
  }

render()
{
  return(
  <div><h2>Click</h2>  
   <p>{this.state.click}</p> 
  <button onClick={this.handleClick}>Click</button>
   </div>)
}
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Course />
  </React.StrictMode>
);


    
reportWebVitals();
