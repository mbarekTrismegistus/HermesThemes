"use client"
import anime from "animejs"
import React from 'react';
import $ from 'jquery';
import "./style.css"
import Home from './components/home';
import About from './components/about';
import Products from './components/products';
import Contact from "./components/contact";
import NavBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.css';






export default function Page(){
  
  React.useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  React.useEffect(() => {
    $(document).bind('mousemove',function(e){ 
    
      
      anime({
          targets: '.mouse',
          left: e.pageX - 20,
          top: e.pageY - 20,
          
          duration: 300,
          easing: 'easeOutExpo'
      })
  }); 
  })
  
  const [component, setComponent] = React.useState("home")
  const [theme, setTheme] = React.useState({
    color: "black",
    text: "white"
})

function changeTheme(){
  
  setTheme(oldTheme => {
    if(oldTheme.color === "white"){
      anime({
        targets: '.toggle-btn',
        left: '5px',
        backgroundColor: '#212529',
        easing: 'easeInOutQuad',
        duration: 400
      });
      anime({
        targets: '.tbtn-con',
        backgroundColor: '#ffffff',
        easing: 'easeInOutQuad',
        border: '1px solid #212529',
        duration: 400
      });
    
      return {
        color: "black",
        text: "white"
      }
    }
    else{
      anime({
        targets: '.toggle-btn',
        left: '30px',
        backgroundColor: '#ffffff',
        easing: 'easeInOutQuad',
        duration: 400
      });
      anime({
          targets: '.tbtn-con',
          backgroundColor: '#212529',
          easing: 'easeInOutQuad',
          border: '1px solid #ffffff',
          duration: 400
        });
      
      return {
        color: "white",
        text: "black"
      }
    }
  })
  document.documentElement.style.setProperty(`--themeColor`, `${theme.color === "black" ? "white" : "black"}`);
  document.documentElement.style.setProperty(`--textColor`, `${theme.color}`);
  console.log(theme)
  
  

}

  
  React.useEffect(() => {
    anime({
      targets: `.${component}`,
      opacity: 1,
      duration: 500,
      easing: 'linear'
    })
    console.log("shown")

  })
  

  return(
    <div className="container-fluid all">
   
      <div className="mouse">

      </div>
        <NavBar setComponent={setComponent} changeTheme={changeTheme} theme={theme} selected={component}/>
        {component === "home" && <Home/>}
        {component === "about" && <About theme={theme}/>}
        {component === "product" && <Products theme={theme}/>}
        
    </div>

  )
  

}
