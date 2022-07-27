import '../sass/components/contact.scss'

import React from "react";

const Contact = () => (
        <div className="row">
            <section className="contact" id='contact'>
                <h2 className="h2">Contact</h2>
                <p className="contact__text">I really enjoy navigating through problems and coming up with solutions that are efficient and accessible for everyone. Have a question or just want to say "Hi" in any case feel free to reach out.</p>
                <a href="mailto:devsyedmohsin@gmail.com" className="btn contact__btn">Send email &rarr;</a>
            </section>
        </div>
)

export default Contact