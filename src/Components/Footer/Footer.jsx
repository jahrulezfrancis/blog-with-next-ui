import React from 'react';
import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footer-items">
                <ul>
                    <li><h2 className='footer-heading'>Quick links</h2></li>
                    <li><a href="https://google.com">Terms</a></li>
                    <li><a href="/">Privacy</a></li>
                    <li><a href="/">Sell Something</a></li>
                e</ul>

                <ul>
                    <li><h2 className='footer-heading'>Portal</h2></li>
                    <li><a href="../Pages/services">Become A pro member</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Dashboard</a></li>
                </ul>

                <ul>
                    <li><h2 className='footer-heading'>Services</h2></li>
                    <li><a href="/">Song Promotion</a></li>
                    <li><a href="/">Video Promotion</a></li>
                    <li><a href="/">Advert placement</a></li>
                </ul>
            </div >
        </footer>
    );
}