import Carousel from './Carousel'
import OnSale from "../components/home/OnSale"
import ComingSoon from "../components/home/ComingSoon"
import Top from '../components/home/Top'
import Comments from '../components/home/Comments'
import '../styles/gamesCards.css'

const Home = () => {

    window.scrollTo({top: 0, behavior: "smooth"})
    
    return ( 
        <>
	    <div className='home-container'>
            <Carousel/>
            <Top/>
            <OnSale />
	    <ComingSoon />
            <Comments/>
        </div>
        </>
    );
}

export default Home;
