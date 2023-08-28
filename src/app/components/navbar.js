import Image from 'next/image'
import React from 'react';
import styles from './NavbarStyle.module.css'



export default function NavBar(props){
    const [color, setColor] = React.useState("#D7788E")
    
    function handleColor(event){
        setColor(event.target.value)
        document.documentElement.style.setProperty(`--primaryColor`, `${color}`);
        document.documentElement.style.setProperty(`--transparentColor`, `${color}d8`);
        
        
    }
    

  


    return(
        <header>
            <nav className={`navbar navbar-expand-lg navbar-${props.theme.color} bg-${props.theme.color} fixed-top`}>
                <div className="container-fluid mt-0">
                <a href="#" className={`navbar-brand text-${props.theme.text} ${styles.navbarBrand}`}>
                    <Image src={`/mercury${props.theme.color}.jpg`} alt="" width={50} height={50}/>
                    HermesThemes
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center text-center" id="navbarSupportedContent">
                    <ul className={`nav navbar-nav ms-auto text-white`}>
                    <li className={`${styles.navitem} me-3 ${props.selected === "home" ? styles.active : ""}`}>
                        <button className={`${styles.navlink} nav-link px-2 text-${props.theme.text}`} onClick={() => props.setComponent("home")}>Home</button>
                    </li>
                    <li className={`${styles.navitem} me-3 ${props.selected === "about" ? styles.active : ""}`}>
                        <button className={`${styles.navlink} nav-link px-2 text-${props.theme.text}`} onClick={() => props.setComponent("about")}>About Me</button>
                    </li>
                    <li className={`${styles.navitem} me-3 ${props.selected === "product" ? styles.active : ""}`}>
                        <button className={`${styles.navlink} nav-link px-2 text-${props.theme.text}`} onClick={() => props.setComponent("product")} >Products</button>
                    </li>
                    <li className={`${styles.navitem} me-3 ${props.selected === "contact" ? styles.active : ""}`}>
                        <button className={`${styles.navlink} nav-link px-2 text-${props.theme.text}`} onClick={() => props.setComponent("contact")} >Contact Me</button>
                    </li>
                    <li className={`${styles.navitem} me-3 ${props.selected === "others" ? styles.active : ""}`}>
                        <button className={`${styles.navlink} nav-link px-2 text-${props.theme.text}`} onClick={() => props.setComponent("others")} >Others</button>
                    </li>
                    </ul>

                    <form className="d-flex ms-auto">
                        <input className="form-color me-2 mt-1" onChange={handleColor} value={color} id="color" type="color"/>
                        
                        <div className={`${styles.tbtncon} ms-auto me-3`} id='tbtncon' onClick={props.changeTheme}>
                            <div className={`${styles.toggleBtn} my-1`} id='toggleBtn'></div>
                        </div>
                    </form>
                </div>
                

                </div>
            </nav>
    </header>
    )

}
