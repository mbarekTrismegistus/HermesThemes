import styles from './HomeStyle.module.css'

export default function Home(){

  
    return(
        <div className="home text-center" id="home">
          <main className="">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className="">Welcome to my <span className="glow">Page</span></h1>
                  <h3>I am A full stack web devloper not yet :( but soon</h3>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit </h3>
                  <button className={`btn btn-light mt-5 me-3 ${styles.orderbtn}`}>Order Now!</button>
                  <button className={`btn btn-light mt-5 ms-3 ${styles.conbtn}`}>Contact Me</button>
                </div>
              </div>
            </div>
          </main>
        </div>
    )
}
