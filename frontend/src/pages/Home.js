import Carousel from './Carousel'
import OnSale from "../components/home/OnSale"
import ComingSoon from "../components/home/ComingSoon"
import Top from '../components/home/Top'
const Home = () => {

    window.scrollTo({top: 0, behavior: "smooth"})
    
    return ( 
        <>
            <h1>Hola soy la home uwu</h1>
            <Top/>
            <Carousel/>
            <OnSale />
            <ComingSoon />
        </>
    );
}

export default Home;
