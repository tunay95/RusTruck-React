import "./Category.css"
import arrowIcon from "../../assets/Category/right-arrow-angle.png"
import truckImage from "../../assets/Category/truck.png"

export default function Category() {
    return (
        <div className="category-container">
            <div className="category-title-pagination">
                <h1 className="category-h1">Categories</h1>
                <div className="category-move-buttons">
                    <p className="pagination-counter">1 / 3</p>
                    <button className="left-category-slider">
                        <img src={arrowIcon} alt="" />
                    </button>
                    <button className="right-category-slider">
                        <img src={arrowIcon} alt="" />
                    </button>
                </div>
            </div>
            <div className="category-list">
                <div className="category-card">
                    <div className="category-card-title">
                        <h2 className="category-name-card">Caravans</h2>
                        <p className="model-count">27 models</p>
                    </div>
                    <img src={truckImage} alt="" className="category-image-card" />
                </div>
                <div className="category-card">
                    <div className="category-card-title">
                        <h2 className="category-name-card">Caravans</h2>
                        <p className="model-count">27 models</p>
                    </div>
                    <img src={truckImage} alt="" className="category-image-card" />
                </div>
                <div className="category-card">
                    <div className="category-card-title">
                        <h2 className="category-name-card">Caravans</h2>
                        <p className="model-count">27 models</p>
                    </div>
                    <img src={truckImage} alt="" className="category-image-card" />
                </div>
                <div className="category-card">
                    <div className="category-card-title">
                        <h2 className="category-name-card">Caravans</h2>
                        <p className="model-count">27 models</p>
                    </div>
                    <img src={truckImage} alt="" className="category-image-card" />
                </div>
            </div>
        </div>
    )
}