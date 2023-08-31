import Image from "next/image"
import $ from 'jquery';
import React from "react";
import anime from "animejs"
import styles from './productStyle.module.css'

export default function Products(props){

  React.useEffect(() => {

    $(".card-img-top").on('mouseenter',function(){
      
      anime({
          targets: this,
          scale: 1.1,
          duration: 500,
          backgroundColor: '#FFF',
          easing: 'easeOutExpo'
      })
  })
  
  $(".card-img-top").on('mouseleave',function(){
      anime({
          targets: this,
          scale: 1.0,
          duration: 500,
          easing: 'easeOutExpo'
      })
  })
  })




    return(
      <div className="container">
        <div className={`${styles.product} pt-5 container`} id="products">
          <h1 className="text-center glow">My Products</h1>
          <div className="container">
            <div className="text-center text-white row my-5">
              
              <div className="col-lg-6 d-flex justify-content-center mt-5">
                <div className={`${styles.pcard} card mx-5`}>
                  <Image src="/p1.png" width={500} height={200} className="card-img-top" alt="..."/>
                  
                  <div className={`card-body ${styles.cardbody}`}>
                    <h5 className="card-title">My first product</h5>
                    <button className={`${styles.pbtn} btn btn-outline-dark d-block mx-auto my-3`}>Get the theme</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center  mt-5">
                <div className={`${styles.pcard} card mx-5`}>
                  <Image src="/p3.png" width={500} height={200}  className="card-img-top" alt="..."/>
                  
                  <div className={`card-body ${styles.cardbody}`}>
                    <h5 className="card-title">My first product</h5>
                    <button className={`${styles.pbtn} btn btn-outline-dark d-block mx-auto my-3`}>Get the theme</button>
                  </div>
                </div>
              </div>
              
              
            </div>
            <div className="text-center text-white row my-5">
              
              <div className="col-lg-6 mt-5 d-flex justify-content-center ">
                <div className={`${styles.pcard} card mx-5`}>
                  <Image src="/p3.webp" width={500} height={200} className="card-img-top" alt="..."/>
                  
                  <div className={`card-body ${styles.cardbody}`}>
                    <h5 className="card-title">My first product</h5>
                    <button className={`${styles.pbtn} btn btn-outline-dark d-block mx-auto my-3`}>Get the theme</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 d-flex justify-content-center ">
                <div className={`${styles.pcard} card mx-5`}>
                  <Image src="/p4.png" width={500} height={200} className="card-img-top" alt="..."/>
                  
                  <div className={`card-body ${styles.cardbody}`}>
                    <h5 className="card-title">My first product</h5>
                    <button className={`${styles.pbtn} btn btn-outline-dark my-3`}>Get the theme</button>
                  </div>
                </div>
              </div>
              
              
            </div>
            
            
          </div>
        </div>

      </div>
    )
}
