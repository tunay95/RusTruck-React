import "./About.css"
import circleArrow from "../../assets/About-Us/angle-circle-right.png"
import trucksImage from "../../assets/About-Us/about-us-truck.png"
import circleTruck from "../../assets/About-Us/circle-truck.png"
import settingsIcon from "../../assets/About-Us/settings.png"

export default function About() {
    return (
    <>
        <div className="about-container">
            <div className="about-title-desc">
                <div className="about-title">
                    <h1 className="about-h1">
                        About
                    </h1>
                    <div className="square-logo-about"></div>
                    <h1 className="rustruck-h1">
                        RUS<span className="truck-span">TRUCK</span> 
                    </h1>
                </div>
                <p className="about-description">
                    It is no coincidence that our company occupies a leading position in the special equipment market: every day we contribute to the development of the domestic auto industry and the strengthening of the Russian economy. <br /><br />
                    Our company has gained recognition among the largest domestic corporations and government agencies, becoming a supplier of special equipment for such giants as Gazprom, Rosatom, Rosseti, RSK MIG and others.
                </p>
                <button className="more-details-button">
                    More details
                    <img src={circleArrow} alt="" />
                </button>
            </div>
            <div className="about-image">
                <img src={trucksImage} alt="" />
            </div>
        </div>
        <div className="yellow-about-container">
            <div className="info-card">
                <div className="info-card-title">
                    <h1 className="info-card-counter">5</h1>
                    <h3 className="info-card-entity">Age</h3>
                </div>
                    <p className="info-card-description">Over the 5 years of its activity, RusTrak LLC has become a large enterprise for the production and sale of special equipment.</p>
            </div>
            <div className="info-card">
                <div className="info-card-title">
                    <h1 className="info-card-counter">95</h1>
                    <h3 className="info-card-entity">Subjects</h3>
                </div>
                    <p className="info-card-description">We have provided 95 subjects of the Russian Federation with reliable equipment for commercial and specialized purposes</p>
            </div>
            <div className="info-card">
                <div className="info-card-title">
                    <h1 className="info-card-counter">10</h1>
                    <h3 className="info-card-entity">Concerns</h3>
                </div>
                    <p className="info-card-description">We have provided 95 subjects of the Russian Federation with reliable equipment for commercial and specialized purposes</p>
            </div>
        </div>
        <div className="about-circle-container">
            <div className="circle-truck">
                <img className="circle-truck-img" src={circleTruck} alt="" />
                <div className="yellow-circle">
                    <div className="gray-circle"></div>
                </div>
                <div className="circle-datas-container">
                    <div className="circle-data">
                        <div className="circle-yellow-tiny" id="data3"></div>
                        <p className="circle-data-p" id="opened-p">Own full-cycle production</p>
                    </div>
                    <div className="circle-data">
                        <div className="circle-yellow-tiny" id="data2"></div>
                        <p className="circle-data-p">Design bureau</p>
                    </div>
                    <div className="circle-data">
                        <div className="circle-yellow-tiny" id="data"></div>
                        <p className="circle-data-p">Direct partnership with distributors</p>
                    </div>
                    <div className="circle-data">
                        <div className="circle-yellow-tiny" id="data2"></div>
                        <p className="circle-data-p">Continuous improvement of technology</p>
                    </div>
                    <div className="circle-data" id="data4">
                        <div className="circle-yellow-tiny"></div>
                        <p className="circle-data-p">ISO 9001 Certification</p>
                    </div>
                </div>
            </div>
            <div className="vertical-line"></div>
            <div className="general-info-about2">
                <div className="icon-setting-container">
                    <img src={settingsIcon} alt="" className="settings-icon" />
                    <div className="settings-floor">
                        <div className="black-circles-tiny"></div>
                        <div className="black-circles-tiny"></div>
                        <div className="black-circles-tiny"></div>
                        <div className="black-circles-tiny"></div>
                    </div>
                </div>
                <p className="settings-data-desc">The production is located in workshops with an area of over 700 square meters. The production is equipped with modern equipment: plasma cutting, painting chamber, shot blasting chamber, welding semiautomatic machines, sheet bending machines, band saw machine, etc.</p>
            </div>
        </div>
    </>
    )
}