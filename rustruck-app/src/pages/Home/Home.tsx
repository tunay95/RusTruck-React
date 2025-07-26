import About from "../../components/About/About";
import AskQuestion from "../../components/AskQuestion/AskQuestion";
import Category from "../../components/Category/Category";
import News from "../../components/News/News";
import Product from "../../components/Product/Product";
import Slider from "../../components/Slider/Slider";

export default function Home() {
    return (
        <>
            <Slider />
            <Category/>
            <About/>
            <Product/>
            <News/>
            <AskQuestion/>
        </>
    )
}