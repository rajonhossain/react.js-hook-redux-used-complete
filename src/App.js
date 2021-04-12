import logo from './logo.svg';

import { useSelector, useDispatch } from 'react-redux';
import Viewpage from './Viewpage';

import React, { useState, useEffect } from 'react';
const axios = require('axios');




function App(props) {    
    const dispatch = useDispatch();
      const [count, setCount] = useState([]);


useEffect(() => {  
  axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(resp => {        
        console.log(resp.data);
          resp.data.map((datax) => {            
            dispatch({type:"DECREMENT", playload:datax});          
          })

      });
  }); 
 


                     
        
  return (
    <div className="App"> 
    <div className=""><h1>Header</h1></div>
    <Viewpage/>  
      
    </div>
  );
}

export default App;



