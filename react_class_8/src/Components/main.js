import React,{useContext} from 'react';
import AppTheme from '../color';
import ThemeContext from '../Context/themeContext';
import Header from './header';


export default function Main(props) {
    const themeProvider = useContext(ThemeContext)

    console.log('themeProvider', themeProvider[0])
const currentTheme = AppTheme[themeProvider[0]]
console.log('currentTheme', currentTheme)

    return (
        <div style={currentTheme}>
 <Header avatar={'..img/xyz'} />

            <h1 style={{color:currentTheme.color} } >Main</h1>
  {/* style={condition ? {}:{}} */}
        </div>
    )
}
