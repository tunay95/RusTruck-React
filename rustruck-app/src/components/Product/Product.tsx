import "./Product.css"
import arrowIcon from "../../assets/category/right-arrow-angle.png"
import cardImage from "../../assets/product/product-image1.png"
import basketIcon from "../../assets/navbar-items/shopping-cart.png"
import wishlistIcon from "../../assets/product/heart.png"

export default function Product() {
    return (
        <div className="product-container">
            <div className="product-title-pagination">
                <h1 className="product-h1">Products</h1>
                <div className="product-move-buttons">
                    <p className="pagination-counter">1 / 3</p>
                    <button className="left-product-slider">
                        <img src={arrowIcon} alt="" />
                    </button>
                    <button className="right-product-slider">
                        <img src={arrowIcon} alt="" />
                    </button>
                </div>
            </div>
            <div className="product-list">
                <div className="product-card">
                    <div className="wishlist-category">
                        <div className="category-name">Caravan</div>
                        <button className="wishlist-icon">
                            <img className="wishlist-icon-img" src={wishlistIcon} alt="" />
                        </button>
                    </div>
                    <div className="product-card-title">
                        <img src={cardImage} alt="" className="product-image-card" />
                        <h2 className="product-name-card">HYUNDAI HD 78 model with commercial van body</h2>
                    </div>
                    <div className="product-card-buttons">
                        <p className="product-price">$100.000</p>
                        <button className="add-basket-button">
                            <img className="basket-icon-img" src={basketIcon} alt="" />
                        </button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="wishlist-category">
                        <div className="category-name">Caravan</div>
                        <button className="wishlist-icon">
                            <img className="wishlist-icon-img" src={wishlistIcon} alt="" />
                        </button>
                    </div>
                    <div className="product-card-title">
                            <img src={cardImage} alt="" className="product-image-card" />
                        <h2 className="product-name-card">HYUNDAI HD 78 model with commercial van body</h2>
                    </div>
                    <div className="product-card-buttons">
                        <p className="product-price">$100.000</p>
                        <button className="add-basket-button">
                            <img className="basket-icon-img" src={basketIcon} alt="" />
                        </button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="wishlist-category">
                        <div className="category-name">Caravan</div>
                        <button className="wishlist-icon">
                            <img className="wishlist-icon-img" src={wishlistIcon} alt="" />
                        </button>
                    </div>
                    <div className="product-card-title">
                            <img src={cardImage} alt="" className="product-image-card" />
                        <h2 className="product-name-card">HYUNDAI HD 78 model with commercial van body</h2>
                    </div>
                    <div className="product-card-buttons">
                        <p className="product-price">$100 000</p>
                        <button className="add-basket-button">
                            <img className="basket-icon-img" src={basketIcon} alt="" />
                        </button>
                    </div>
                </div>
                <div className="product-card">
                    <div className="wishlist-category">
                        <div className="category-name">Caravan</div>
                        <button className="wishlist-icon">
                            <img className="wishlist-icon-img" src={wishlistIcon} alt="" />
                        </button>
                    </div>
                    <div className="product-card-title">
                            <img src={cardImage} alt="" className="product-image-card" />
                        <h2 className="product-name-card">HYUNDAI HD 78 model with commercial van body</h2>
                    </div>
                    <div className="product-card-buttons">
                        <p className="product-price">$100 000</p>
                        <button className="add-basket-button">
                            <img className="basket-icon-img" src={basketIcon} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}