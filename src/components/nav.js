
import * as React from "react"
import { Link } from "gatsby"
import "./nav.css"
import Toggle from "./themetog"


const Nav = (title) => {
  const Title = title ? title.title : <></>
  React.useEffect(()=>{
    document.getElementById("nav").style.backgroundColor = "rgba(0,0,0,0)"
          document.getElementById("navline").style.opacity = "0"
          document.getElementById("nav").style.backdropFilter = "blur(0px)"
          document.getElementById("backImg").style.opacity = "1"
  }, [])
  if (typeof window !== 'undefined') {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos < window.innerHeight / 2) {
          const opct = (((window.innerHeight/3)-prevScrollpos)/(window.innerHeight/3))
          const blr = ((20*prevScrollpos)/window.innerHeight)
          document.getElementById("nav").style.backgroundColor = "rgba(0,0,0,0)"
          document.getElementById("navline").style.opacity = `${blr/10}`
          document.getElementById("nav").style.backdropFilter = `blur(${blr}px)`
          document.getElementById("backImg").style.opacity = `${opct}`
        }
        else {
          document.getElementById("nav").style.backgroundColor = "var(--color-nav-background)"
          document.getElementById("navline").style.backgroundColor = "var(--color-line)"
          document.getElementById("nav").style.backdropFilter = "blur(10px)"
          document.getElementById("backImg").style.opacity = "1"
        }
          
        prevScrollpos = currentScrollPos;
      }
    }
  return(
      <div id="nav" className="navmaster">
        <Link to="/" className="navlogo" itemProp="url">ㅇㅈㅎ</Link>
        <span className="navlocation">{Title}</span>
        <Toggle/>
        <div id="navline" className="navline"/>      
      </div>
  )
}

export default Nav

