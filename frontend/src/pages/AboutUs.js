import React from 'react';
import "../styles/aboutUs.css";

export default function AboutUs() {
    window.scrollTo({top: 0, behavior: "smooth"})

    return ( 
        <>
        <div className='container_about' style={{backgroundImage:"url(" + process.env.PUBLIC_URL+ "/assets/aboutImages/wall.jpg)"}}>
            <div className='tittle_aboutus'>
            <h1>Lorem ipsum dolor sit amet</h1>
            <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident maxime itaque natus facilis cum minima harum. Dolor sed nostrum ad fuga sapiente saepe cupiditate. Ipsum, reiciendis adipisci, provident fugiat cum molestiae libero ut autem ipsa velit aperiam, necessitatibus veniam.</h3>
            </div>
            <div className='gaming_info'>
            <img src={process.env.PUBLIC_URL+"/assets/aboutImages/searching.png"} alt="img"  className="tittle_about" />    
            <h1>Hand-picking the best in gaming</h1>
            <h2>A selection of great DRM-free games, from modern hits to all-time classics, that you really shouldn't miss.</h2>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/winer.png"} alt="img"  className="icons_about" /> 
                    <h3>A curated selection of games</h3>
                    <p> From exceptional AAAs, unique indies to the best of classic gaming. Every game is here because we chose it for you.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/surprise.png"} alt="img"  className="icons_about" /> 
                    <h3>Feeding your inner collector</h3>
                    <p> Offering games with as many goodies as possible is the GAMEOVER.com way - even if it means exploring our long forgotten basements and attics.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/original.png"} alt="img"  className="icons_about" /> 
                    <h3>Respecting game creators</h3>
                    <p> When you're with us, you can be sure that all games are legitimate, and your purchases support rightful owners and creators.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/update.png"} alt="img"  className="icons_about" /> 
                    <h3>Upgrading classics for present-day</h3>
                    <p> Even if the game is older than you are, we test it thoroughly, fix all the bugs, and apply patches so it runs flawlessly on your next-gen PC and on modern OSs.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/coming.png"} alt="img"  className="icons_about" /> 
                    <h3>Every game deserves to shine</h3>
                    <p> As much attention we're giving to pick great games, the same goes to highlighting them on GAMEOVER.com - treating each release as a celebration.</p>
                </div>
            </div>

            <div className='gaming_info'>
            <img src={process.env.PUBLIC_URL+"/assets/aboutImages/user.png"} alt="img"  className="tittle_about" />
            <h1>Customer-centric approach</h1>
            <h2>A selection of great DRM-free games, from modern hits to all-time classics, that you really shouldn't miss.</h2>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/support.png"} alt="img"  className="icons_about" /> 
                    <h3>Stellar support</h3>
                    <p> We bring you the comfort in knowing that anytime you need help, we're right here for you. Our customer support team works in-house round-the-clock solving all games-related issues.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/cashback.png"} alt="img"  className="icons_about" /> 
                    <h3>No risk, full refunds</h3>
                    <p> Feel safe about your purchase - get your money back if a game doesn't work for you, cancel pre-orders, and get a refund on games in development within 30 days of purchase - no strings attached.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/contact.png"} alt="img_contact"  className="icons_about" /> 
                    <h3>Direct contact with GAMEOVER Team</h3>
                    <p> Have a question, need help or you just want to talk about great PC games? Reach out on GOG forums, tweet at us or drop us a message on Facebook, and we'll get back to you.</p>
                </div>
            </div>

            <div className='gaming_info'>
            <img src={process.env.PUBLIC_URL+"/assets/aboutImages/more.png"} alt="img_more"  className="tittle_about" />
            <h1>More</h1>
            <h2>We don't believe in controlling you and your games. Here, you won't be locked out of titles you paid for, or constantly asked to prove you own them - this is DRM-free gaming.</h2>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/owner.png"} alt="img_owner"  className="icons_about" /> 
                    <h3>An optional gaming client</h3>
                    <p>We don't believe in controlling you and your games. Here, you won't be locked out of titles you paid for, or constantly asked to prove you own them - this is DRM-free gaming.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/settings.png"} alt="img"  className="icons_about" /> 
                    <h3>An optional gaming client</h3>
                    <p>  GAME OVER Galaxy is the tailor-made optional client that adds features like cloud saves, update roll-backs, crossplay, achievements, is a convenient way to install & update games, and stay in touch with friends.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/aboutImages/miles.png"} alt="img"  className="icons_about" /> 
                    <h3>Going the extra mile</h3>
                    <p> We're a company of gamers and we build GOG.com as a platform we, as gamers, want to use - hence our unique approach to DRM, selection of the best in gaming, refunds program and more.</p>
                </div>
            </div>
            <div >
               <h3>Our partners and allies</h3> 
               <img src={process.env.PUBLIC_URL+"/assets/aboutImages/videojuegos.png"} alt="img"  className="partners" /> 
            </div>
        </div>
        </>

    );
}
