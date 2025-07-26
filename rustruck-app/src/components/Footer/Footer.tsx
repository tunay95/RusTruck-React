import "./Footer.css"
import { FaFacebookF,  FaTwitter,FaYoutube,FaGooglePlusG,FaInstagram } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="sub-container" id="sub1">
                <div className="contact-infos">
                    <p id="phone-number">Phoner: +994 50 282 03 76</p>
                    <p id="email">Email: twonaiih95@gmail.com</p>
                    <p id="location">Location: Babek Avenue 95</p>
                    <button id="request-a-call-button">Request A Call</button>
                </div>
                <div className="copyright-section">
                    <p className="copyright-p">2009 - 2021 © Rus - Trucks</p>
                    <p className="copyright-p">The information on the site is not a public offer and <br />is for informational purposes only.</p>
                    <p className="copyright-p" id="developed-by">Developed by Tunay Huseynli.</p>
                </div>
            </div>
            <div className="sub-container" id="sub2">
                <div className="sub-sub-container">
                    <div className="blok-div">
                        <h4 className="blok-name">Company Info</h4>
                        <ul>
                            <li>
                                <a>About us</a>
                            </li>
                            <li>
                                <a>Careers</a>
                            </li>
                            <li>
                                <a>Our Mission</a>
                            </li>
                            <li>
                                <a>Investor Relations</a>
                            </li>
                            <li>
                                <a>Partners / Affiliates</a>
                            </li>
                        </ul>
                    </div>
                    <div className="blok-div">
                        <h4 className="blok-name">Support & Legal</h4>
                        <ul>
                            <li>
                                <a>Customer Support</a>
                            </li>
                            <li>
                                <a>FAQs</a>
                            </li>
                            <li>
                                <a>Terms & Conditions</a>
                            </li>
                            <li>
                                <a>Privacy Policy</a>
                            </li>
                            <li>
                                <a>Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    <div className="blok-div">
                        <h4 className="blok-name">Stay Connected</h4>
                        <ul>
                            <li>
                                <a>About us</a>
                            </li>
                            <li>
                                <a>Careers</a>
                            </li>
                            <li>
                                <a>Our Mission</a>
                            </li>
                            <li>
                                <a>Investor Relations</a>
                            </li>
                            <li>
                                <a>Partners / Affiliates</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="icons-div">
                    <div className="icon-logo">
                        <a href="#" >
                            <FaFacebookF className="icon-logo-svg" id="facebook-icon"/>
                        </a>
                    </div>
                    <div className="icon-logo">
                        <a href="#" >
                            <FaTwitter className="icon-logo-svg" id="twitter-icon"/>
                        </a>
                    </div>
                    <div className="icon-logo">
                        <a href="#" >
                            <FaGooglePlusG className="icon-logo-svg" id="google-plus-icon"/>
                        </a>
                    </div>
                    <div className="icon-logo">
                        <a href="#" >
                            <FaInstagram className="icon-logo-svg" id="instagram-icon"/>
                        </a>
                    </div>
                    <div className="icon-logo">
                        <a href="#" >
                            <FaYoutube className="icon-logo-svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}