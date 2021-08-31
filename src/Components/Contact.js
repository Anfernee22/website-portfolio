import '../Styles/Contact.css'


const Contact = () => {    
    return (
        <div className="contact-wrapper">
            <div className="contact-container">
                <div className="contact-header">
                    <h3>Contact</h3>
                    <div className="contact-collaborate">
                        <p>Let's collaborate and bring your ideas into reality. All you have to do is message me below and I'll get back to you as soon as possible.</p>
                    </div>
                </div>
                    <form>
                        <input type="text" className="full-name" placeholder="Enter Full Name" required/>
                        <input type="email" className="email" placeholder="Enter Email" required/>
                        <textarea name="message" id="message" cols="100" rows="20" placeholder="Enter message"></textarea>
                        
                        <div className="contact-button">
                            <button className="send-btn">Send</button>
                        </div>
                    </form>
              
            </div>
           
        </div>
    )
}
export default Contact;