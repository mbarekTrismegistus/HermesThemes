import anime from "animejs"
import React from "react"
import styles from './barStyle.module.css'

export default function ProgressBar(props){

    let style = {
        backgroundColor: props.color,
        backgroundImage: `linear-gradient(to right, ${props.gradientColor.first}, ${props.gradientColor.second})`,
        borderRadius: "20px",
        boxShadow: `0px 0px 15px ${props.color}`
    }



    React.useEffect(() => {
    
        const bars = document.getElementsByName("progressLine")
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
        <div className={styles.BarLine}>
            <div className={styles.progressLine} name="progressLine" id={props.id} style={style}></div>
        </div>
    )
}
