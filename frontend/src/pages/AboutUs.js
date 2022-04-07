import React from 'react';
import "../styles/aboutUs.css";

export default function AboutUs() {
    window.scrollTo({top: 0, behavior: "smooth"})

    return ( 
        <>
        <div className='container_about'>
            <div>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident maxime itaque natus facilis cum minima harum. Dolor sed nostrum ad fuga sapiente saepe cupiditate. Ipsum, reiciendis adipisci, provident fugiat cum molestiae libero ut autem ipsa velit aperiam, necessitatibus veniam.</p>
            </div>
            <div className='gaming_info'>
            <h1>Hand-picking the best in gaming</h1>
            <h2>A selection of great DRM-free games, from modern hits to all-time classics, that you really shouldn't miss.</h2>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/home.png"} alt="img"  className="icons_about" /> 
                    <h3>A curated selection of games</h3>
                    <p> From exceptional AAAs, unique indies to the best of classic gaming. Every game is here because we chose it for you.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/home.png"} alt="img"  className="icons_about" />
                    <h3>Feeding your inner collector</h3>
                    <p> Offering games with as many goodies as possible is the GAMEOVER.com way - even if it means exploring our long forgotten basements and attics.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/home.png"} alt="img"  className="icons_about" />
                    <h3>Respecting game creators</h3>
                    <p> When you're with us, you can be sure that all games are legitimate, and your purchases support rightful owners and creators.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/home.png"} alt="img"  className="icons_about" />
                    <h3>Upgrading classics for present-day</h3>
                    <p> Even if the game is older than you are, we test it thoroughly, fix all the bugs, and apply patches so it runs flawlessly on your next-gen PC and on modern OSs.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/home.png"} alt="img"  className="icons_about" />
                    <h3>Every game deserves to shine</h3>
                    <p> As much attention we're giving to pick great games, the same goes to highlighting them on GAMEOVER.com - treating each release as a celebration.</p>
                </div>
            </div>
            <div className='gaming_info'>
            <h1>Lorem ipsum dolor sit amet</h1>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/home.png"} alt="img"  className="icons_about" /> 
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident maxime itaque natus facilis cum minima harum. Dolor sed nostrum ad fuga sapiente saepe cupiditate. Ipsum, reiciendis adipisci, provident fugiat cum molestiae libero ut autem ipsa velit aperiam, necessitatibus veniam.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/home.png"} alt="img"  className="icons_about" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident maxime itaque natus facilis cum minima harum. Dolor sed nostrum ad fuga sapiente saepe cupiditate. Ipsum, reiciendis adipisci, provident fugiat cum molestiae libero ut autem ipsa velit aperiam, necessitatibus veniam.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/home.png"} alt="img"  className="icons_about" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident maxime itaque natus facilis cum minima harum. Dolor sed nostrum ad fuga sapiente saepe cupiditate. Ipsum, reiciendis adipisci, provident fugiat cum molestiae libero ut autem ipsa velit aperiam, necessitatibus veniam.</p>
                </div>
            </div>
            <div className='gaming_info'>
            <h1>Lorem ipsum dolor sit amet</h1>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/home.png"} alt="img"  className="icons_about" /> 
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident maxime itaque natus facilis cum minima harum. Dolor sed nostrum ad fuga sapiente saepe cupiditate. Ipsum, reiciendis adipisci, provident fugiat cum molestiae libero ut autem ipsa velit aperiam, necessitatibus veniam.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/home.png"} alt="img"  className="icons_about" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident maxime itaque natus facilis cum minima harum. Dolor sed nostrum ad fuga sapiente saepe cupiditate. Ipsum, reiciendis adipisci, provident fugiat cum molestiae libero ut autem ipsa velit aperiam, necessitatibus veniam.</p>
                </div>
                <div className='gaming_box'>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/home.png"} alt="img"  className="icons_about" />
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident maxime itaque natus facilis cum minima harum. Dolor sed nostrum ad fuga sapiente saepe cupiditate. Ipsum, reiciendis adipisci, provident fugiat cum molestiae libero ut autem ipsa velit aperiam, necessitatibus veniam.</p>
                </div>
            </div>
        </div>
        </>

    );
}
