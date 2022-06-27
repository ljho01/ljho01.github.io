import * as React from "react"
import "./background.css"
import { GatsbyImage } from "gatsby-plugin-image"


const background = (arg) => {
    if (arg.data) {
        return (
            <div className="back-image">
                <GatsbyImage image={arg.data} alt="background"/>
                <span>progress</span>
            </div>
        )
    }
    return (
        <div className="nothumb-background"/>
    )
}

export default background