import About from "../../components/About/About";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import Slider from "../../components/Slider/Slider";

export default function Home() {
    return (
        <>
            <Slider />
            <Category/>
            <About/>
            <Product/>
        </>
    )
}