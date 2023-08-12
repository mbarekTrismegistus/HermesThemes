import anime from "animejs"

export default function Home(){

  function animeBtn(isthere){
    // if(isthere){
    //   anime({
    //       targets: ".orderbtn",
          
    //       duration: 100,
    //       boxShadow: '0 0 15px var(--primaryColor)',
    //       easing: 'easeInOutQuad'
    //   })
    //   anime({
    //       targets: ".orderbtn",
    //       scale: 1.1,
    //       duration: 500,
         
    //       easing: 'easeInOutQuad'
    //   })

    // }
    // else{
    //   anime({
    //     targets: ".orderbtn",
    //     scale: 1.0,
    //     duration: 500,
    //     boxShadow: '0 0 10px var(--primaryColor)',
    //     easing: 'easeInOutQuad'
    // })
    // }
  }
    return(
        <div className="home text-center" id="home">
          <main className="">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className="">Welcome to my <span>Page</span></h1>
                  <h3>I am A full stack web devloper not yet :( but soon</h3>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit </h3>
                  <button className="btn btn-light mt-5 me-3 orderbtn">Order Now!</button>
                  <button className="btn btn-light mt-5 ms-3 conbtn">Contact Me</button>
                </div>
              </div>
            </div>
          </main>
        </div>
    )
}