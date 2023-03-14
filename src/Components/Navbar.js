// import useState hook
import { useState } from "react";

// import FontAwesome icons
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Navbar styles
import '../styles/Navbar.scss'

// main function to export Navbar component
export default function Navbar() {
  // temporary links
  const links = ['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum']

  // set Navbar state
  const [actve,setActive] = useState(false)
  // function to handle click on navbar button, set state different state than previous
  const handleClick = () =>{ 
    setActive(!actve)
    
  }

  // final component to return
  return (
    // toggle class active on state
    <nav className={`nav ${actve?'active':''}`}>
      {/* button to handle click , set content on state*/}
      <button onClick={handleClick}>{actve?<FontAwesomeIcon icon={faXmark}/>:<FontAwesomeIcon icon={faBars}/>}</button>
      <ul> 
        {/* custom Links component*/}
        <Links links={links}/>
      </ul>
    </nav>
  )
}
// function to return navbar links component
const Links = (props) =>{
        // map trough array of temporary links
        return(props.links.map((link, idx)=>{
          // return link
            return(<Link key={idx} title={link}/>)
        }))
}

// function to renturn link component
const Link = (props) =>{
    return(<li><a href="/">{props.title}</a></li>)
}

