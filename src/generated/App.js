import React from 'react'; 
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
 import Home  from './Home.js'; 
 const App = () => { return <div className="app dark-mode darkcyan"> 
 <Router> 
 <Routes>
 <Route exact path="/" element={<Home/>}/>; 
 
 </Routes> 
 </Router> 
 </div> } 
 export default App 