import anime from "animejs"
import React from "react"

export default function ProgressBar(props){

    let style = {
        backgroundColor: props.color,
        backgroundImage: `linear-gradient(to right, ${props.gradientColor.first}, ${props.gradientColor.second})`,
        borderRadius: "20px",
        boxShadow: `0px 0px 15px ${props.color}`
    }



    React.useEffect(() => {
    
        const bars = document.querySelectorAll(".progressLine")
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    if(entry.target.id === props.id){
                        anime({
                            targets: entry.target,
                            width: props.progress,
                            duration: 1000,
                            easing: 'linear'
                        })

                    }
                    
                
                
                }
                
    
            })
        })
        bars.forEach((el) => observer.observe(el))
      })


    

    return(
        <div className="BarLine">
            <div className="progressLine" id={props.id} data-progress={props.progress} data-color={props.color} style={style}></div>
        </div>
    )
}