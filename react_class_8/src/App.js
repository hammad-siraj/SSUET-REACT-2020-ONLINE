import React,{useState} from 'react';
import './App.css';
import Header from './Components/header';
import Main from './Components/main';
import ThemeContext from './Context/themeContext';

function App() {

  const themeHook = useState('light')
  console.log('themeHook', themeHook)
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  
 {/* <h1>hello context api</h1> */}
 <ThemeContext.Provider value={themeHook} >
 <Main data={'hamad'}/>

 </ThemeContext.Provider>
{/* <NavBar/> */}

     </div>

  );
}

export default App;
