import '../sass/components/footer.scss'

import React from 'react'

const Footer = () => {

    const date = new Date()

    return (
        <footer className="footer">
            <div className="row">

                <div className="footer__links">
                    <a href="https://dev.to/devsyedmohsin" target='_blank' rel='noopener' className="footer__link"><img src="/devto_logo.svg" alt="dev to" /></a>
                    <a href="https://github.com/devsyedmohsin" target='_blank' rel='noopener' className="footer__link"><img src="/github_logo.svg" alt="github" /></a>
                    <a href="mailto:devsyedmohsin@gmail.com" className="footer__link"><img src="/gmail_logo.svg" alt="mail" /></a>
                </div>

                <p className="footer__text">&copy; {date.getFullYear()}. Crafted within Lahore by Syed Mohsin.</p>

            </div>
        </footer>
    )


}

export default Footer

