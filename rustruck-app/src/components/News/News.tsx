import "./News.css"
import arrowIcon from "../../assets/News/arrow-big-right.svg"
import arrowIcon2 from "../../assets/Category/right-arrow-angle.png"
import newsImage from "../../assets/News/news-image.jpg"

import foton from "../../assets/News/foton.png"
import uaz from "../../assets/News/uaz.png"
import zil from "../../assets/News/zil.png"
import isuzu from "../../assets/News/isuzu.png"
import gaz from "../../assets/News/gaz.png"
import hino from "../../assets/News/hino.png"

export default function News() {
    return (
        <div className="news-container">
            <div className="news-card-section">
                <div className="news-title-pagination">
                    <h1 className="news-h1">News</h1>
                    <div className="news-move-buttons">
                        <p className="pagination-counter">1 / 3</p>
                        <button className="left-news-slider">
                            <img src={arrowIcon2} alt="" />
                        </button>
                        <button className="right-news-slider">
                            <img src={arrowIcon2} alt="" />
                        </button>
                    </div>
                </div>
                <div className="news-list">
                    <div className="news-card">
                        <div className="news-image-section">
                            <img src={newsImage} alt="" className="news-image-card" />
                        </div>
                        <div className="news-card-time-title">
                            <p className="news-time">15.06.2021</p>
                            <h4 className="news-name-card">KAMAZ is preparing a competitor for GAZelle and Valdai (first PHOTOS)</h4>
                        </div>
                        <button className="more-details-news-button">
                            More Details
                            <img className="right-arrow" src={arrowIcon} alt="" />
                        </button>
                    </div>
                    <div className="news-card">
                        <div className="news-card-title">
                            <img src={newsImage} alt="" className="news-image-card" />
                        </div>
                        <div className="news-card-time-title">
                            <p className="news-time">15.06.2021</p>
                            <h4 className="news-name-card">KAMAZ is preparing a competitor for GAZelle and Valdai (first PHOTOS)</h4>
                        </div>
                        <button className="more-details-news-button">
                            More Details
                            <img className="right-arrow" src={arrowIcon} alt="" />
                        </button>
                    </div>
                    <div className="news-card">
                        <div className="news-card-title">
                            <img src={newsImage} alt="" className="news-image-card" />
                        </div>
                        <div className="news-card-time-title">
                            <p className="news-time">15.06.2021</p>
                            <h4 className="news-name-card">KAMAZ is preparing a competitor for GAZelle and Valdai (first PHOTOS)</h4>
                        </div>
                        <button className="more-details-news-button">
                            More Details
                            <img className="right-arrow" src={arrowIcon} alt="" />
                        </button>
                    </div>
                    <div className="news-card">
                        <div className="news-card-title">
                            <img src={newsImage} alt="" className="news-image-card" />
                        </div>
                        <div className="news-card-time-title">
                            <p className="news-time">15.06.2021</p>
                            <h4 className="news-name-card">KAMAZ is preparing a competitor for GAZelle and Valdai (first PHOTOS)</h4>
                        </div>
                        <button className="more-details-news-button">
                            More Details
                            <img className="right-arrow" src={arrowIcon} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="brands-logo-container">
                <div className="brands-div">
                    <img src={foton} alt="" className="brand-logo" />
                </div>
                <div className="brands-div">
                    <img src={uaz} alt="" className="brand-logo" />
                </div>
                <div className="brands-div">
                    <img src={zil} alt="" className="brand-logo" />
                </div>
                <div className="brands-div">
                    <img src={gaz} alt="" className="brand-logo" />
                </div>
                <div className="brands-div">
                    <img src={isuzu} alt="" className="brand-logo" />
                </div>
                <div className="brands-div">
                    <img src={hino} alt="" className="brand-logo" />
                </div>
                <div className="brands-div">
                    <img src={zil} alt="" className="brand-logo" />
                </div>
                <div className="brands-div">
                    <img src={uaz} alt="" className="brand-logo" />
                </div>
                <div className="brands-div">
                    <img src={foton} alt="" className="brand-logo" />
                </div>
            </div>
        </div>
    )
}
