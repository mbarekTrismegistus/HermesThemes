import styles from './contactStyle.module.css'

export default function Contact(props){
    return (
        <main className="contact">
            <div className="container">
                <div className={`row ${styles.conform}`}>
                
                    <div className="col-md-6 align-items-center d-flex flex-column justify-content-center">
                        <h1 className="mb-3 glow">Contact Form</h1>
                        <h3 className="text-center">You have a project ? I can help you making a website for it</h3>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        
                        
                        <label className={`form-label text-${props.theme.text} mb-0`}>Your Name</label>
                        <input type="text" className={`form-control mb-5 ${styles.input}`}/>

                        <label className={`form-label text-${props.theme.text} mb-0`}>Your Name</label>
                        <input type="text" className={`form-control mb-5 ${styles.input}`}/>

                        <label className={`form-label text-${props.theme.text} mb-0`}>Your Name</label>
                        <input type="text" className={`form-control mb-5 ${styles.input}`}/>
                        

                        <button className="btn btn-outline-light mt-5">Send</button>
                    </div>
                    
                </div>
            </div>

        </main>

    )
}
