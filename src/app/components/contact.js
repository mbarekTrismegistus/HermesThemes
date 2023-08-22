export default function Contact(){
    return (
        <main className="contact">
            <div className="container">
                <div className="row con-form">
                
                    <div className="col-md-6 align-items-center d-flex flex-column justify-content-center">
                        <h1 className="mb-3">Contact Form</h1>
                        <h3 className="text-center">You have a project ? I can help you making a website for it</h3>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        
                        
                        <label className="form-label text-white mb-0">Your Name</label>
                        <input type="text" className="form-control mb-5"/>
                        <label className="form-label text-white mb-0">Your Name</label>
                        <input type="text" className="form-control mb-5"/>
                        <label className="form-label text-white mb-0">Your Name</label>
                        <input type="text" className="form-control"/>

                        <button className="btn btn-outline-light mt-5">Send</button>
                    </div>
                    
                </div>
            </div>

        </main>

    )
}
