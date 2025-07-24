import "./News.css"
import arrowIcon from "../../assets/category/right-arrow-angle"

export default function News(){
    return (
        <div className="news-container">
            <div className="news-title-pagination">
                <h1 className="news-h1">newss</h1>
                <div className="news-move-buttons">
                    <p className="pagination-counter">1 / 3</p>
                    <button className="left-news-slider">
                        <img src={arrowIcon} alt="" />
                    </button>
                    <button className="right-news-slider">
                        <img src={arrowIcon} alt="" />
                    </button>
                </div>
            </div>
            <div className="news-list">
                <div className="news-card">
                    <div className="news-card-title">
                        <img src="" alt="" className="news-image-card" />
                    </div>
                    <div className="news-card-buttons">
                        <p className="news-time">15.06.2021</p>
                        <h2 className="news-name-card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi </h2>
                        <button className="more-details-news">
                            <img className="right-arrow" src="" alt="" />
                        </button>
                    </div>
                </div>
                <div className="news-card">
                    <div className="news-card-title">
                            <img src="" alt="" className="news-image-card" />
                    </div>
                    <div className="news-card-buttons">
                        <p className="news-time">15.06.2021</p>
                        <h2 className="news-name-card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi </h2>
                        <button className="more-details-news">
                            <img className="right-arrow" src="" alt="" />
                        </button>
                    </div>
                </div>
                <div className="news-card">
                    <div className="news-card-title">
                            <img src="" alt="" className="news-image-card" />
                    </div>
                    <div className="news-card-buttons">
                        <p className="news-time">15.06.2021</p>
                        <h2 className="news-name-card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi </h2>
                        <button className="more-details-news">
                            <img className="right-arrow" src="" alt="" />
                        </button>
                    </div>
                </div>
                <div className="news-card">
                    <div className="news-card-title">
                            <img src="" alt="" className="news-image-card" />
                    </div>
                    <div className="news-card-buttons">
                        <p className="news-time">15.06.2021</p>
                        <h2 className="news-name-card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi </h2>
                        <button className="more-details-news">
                            <img className="right-arrow" src="" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
    )
}