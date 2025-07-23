import "./Slider.css"
import MoveButton from "../../assets/Sliders/right-chevron.png"

export default function Slider() {
    return (
        <div className="slider-container">
            <div className="slider-image2"></div>
            {/* <img className="slider-image" src={sliderImage1} alt="" /> */}
            <div className="slider-move-buttons">
                <button className="left-slider">
                    <img src={MoveButton} alt="" />
                     </button>
                <button className="right-slider">
                    <img src={MoveButton} alt="" />
                     </button>
            </div>
            <div className="slider-general-div">
                <h1 className="slider-title">Plant-manufacturer of  special-purpose vehicles</h1>
                <p className="slider-description">RusTrak LLC is a company engaged in the production and supply of specialized equipment and special vehicles, offering high-quality, reliable solutions tailored to various industrial needs. With a commitment to innovation and customer satisfaction, the company serves a wide range of sectors including construction, logistics, and emergency services.</p>
                <div className="buttons-div">
                    <button className="open-catalog-button">
                        <a href="">Open Catalog</a>
                    </button>
                    <button className="call-offer-button">
                        <a href="">Calling & Offer</a>
                    </button>
                </div>
            </div>
            <div className="slider-ordering">
                <button className="ordering1-slider"></button>
                <button className="ordering2-slider"></button>
                <button className="ordering3-slider"></button>
                <button className="ordering4-slider"></button>
                <button className="ordering5-slider"></button>
            </div>
        </div>
    )
}