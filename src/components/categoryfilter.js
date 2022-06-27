import * as React from "react"
import { Link } from "gatsby"
import "./categoryfilter.css"


const categoryfilter = (props) => {
    return (
        <>
            <div className="post-counter">
                <input type="checkbox" className="burger" id="burger-check"/><label htmlFor="burger-check">모든 글/</label><span>{props.tot}개의 글</span>
                <div className="sidecategory">
                    <ol className="cate-list" style={{ listStyle: `none` }}>
                        {props.categories.map(cat => {
                        const name = cat.fieldValue
                        const count = cat.totalCount
                        return (
                            <li key={name}><Link to={`/${name}`}>{`${name}(${count})`}</Link></li>
                        )
                        })}
                    </ol>
                </div>
                <div><label className="side-shadowbox" htmlFor="burger-check"/></div>
            </div>
        </>
    )
}


export default categoryfilter