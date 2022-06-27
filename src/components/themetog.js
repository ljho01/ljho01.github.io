import React, { useState, useEffect } from "react"
import "./themetog.css"


const Toggle = () => {
    const websiteTheme = typeof window != `undefined` ? window.__theme : null
    const [ theme, setTheme ] = useState(websiteTheme)
    useEffect(() => {
        setTheme(window.__theme)
        window.__onThemeChange = () => {
        setTheme(window.__theme)
        }
    }, [])

    const ThemeToggle = () => {
        window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark')
    }
    return (
        <>
            <button onClick={ThemeToggle} id="tog"/>
            <label className="toggleback" htmlFor="tog">
                    <div className="togglecon"/>
            </label>
        </>   
    )
}

export default Toggle