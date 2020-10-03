import React,{useContext} from 'react'
import ThemeContext from '../Context/themeContext'
import ToggleTheme from './toggleTheme'

export default function Header() {
    const themeProvider = useContext(ThemeContext)

    console.log('themeProvider', themeProvider[0])
    return (
        <div>
            <h1
            style={themeProvider[0]== 'light' ? {color:'black'} :{color:'white'} }
            >Header</h1>
            <ToggleTheme/>
        </div>
    )
}
