import React,{useContext} from 'react'
import ThemeContext from '../Context/themeContext'

export default function ToggleTheme() {
    const [theme,setThemeMode] = useContext(ThemeContext)
    // const [theme, settheme] = useState('grey')

    // setTheme('white')

    console.log('theme', theme,)
    return (
        <div style={{cursor:'pointer'}} onClick={()=>setThemeMode(theme === 'light' ? 'dark':'light')}>
        <span title = "switch theme">
             {theme === 'light' ?  "🌙" : "☀️" }
        </span>
    </div>
    )
}
