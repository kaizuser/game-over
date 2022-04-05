import React from 'react';
import '../../styles/footer.css';
import { MDBFooter } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

export default function Footer() {
  return (
    <MDBFooter  className=' p-1  text-lg-start bg-dark  text-light'>
     

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-2'>
              {/* <h6 className='text-uppercase fw-bold mb-4'>GameOver</h6> */}
              <img src={process.env.PUBLIC_URL+"/assets/footerImages/logofinal.png"} alt="img"  className="logofooter" />
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
              <p>
                <a href='#!' className='text-reset'>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/home.png"} alt="img"  className="iconsfooter" />  
                Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'> <img src={process.env.PUBLIC_URL+"/assets/footerImages/console.png"} alt="img"  className="iconsfooter" />
                  Games
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>   <img src={process.env.PUBLIC_URL+"/assets/footerImages/signup.png"} alt="img"  className="iconsfooter" />
                 SignUp
                </a>
              </p>
             
              <p>
                <a href='#!' className='text-reset'><img src={process.env.PUBLIC_URL+"/assets/footerImages/about.png"} alt="img"  className="iconsfooter" />
                 About Us
                </a>
              </p>
            </div>


            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
               New York, NY 10012, US
              </p>
              <p>
               info@gameover.com
              </p>
              <p>
                + 01 234 567 88
              </p>
              <p>
                 + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex-lg-row  d-flex justify-content-cent p-2'>
        <div className='me-5 d-lg-block'>
            <div className='iconsocial'>
              <a href="https://www.facebook.com/" target='blank'><img src={process.env.PUBLIC_URL+"/assets/footerImages/facebook.png"} alt="img"  className="iconsocials" /></a>
               <a href="https://www.instagram.com/accounts/login/?hl=es&sour..." target='blank'> <img  src={process.env.PUBLIC_URL+"/assets/footerImages/instagram.png"} alt="img"  className="iconsocials" /></a>
                <a href= "https://www.youtube.com/" target='blank'> <img src={process.env.PUBLIC_URL+"/assets/footerImages/youtube.png"} alt="img"  className="iconsocials" /></a>
                <a href="https://mobile.twitter.com/i/flow/login" target='blank'><img src={process.env.PUBLIC_URL+"/assets/footerImages/twitter.png"} alt="img"  className="iconsocials" /></a>
                <a href="https://discord.com/login" target='blank'><img src={process.env.PUBLIC_URL+"/assets/footerImages/discord.png"} alt="img"  className="iconsocials" /></a>
                </div>
                </div>
      </section>
      {/* <section className='flex-lg-row  d-flex justify-content-cent justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
            <div className='divcards'>
                <a  href='#!' target='blank'><img src={process.env.PUBLIC_URL+"/assets/footerImages/cards.png"} alt="img"  className="iconcards" /></a>
                </div>
                </div>
      </section> */}

      <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#000000' }}>
        <p className='p-2 text-light'> © 2022Copyright  Game Over   All rights reserved.</p> 
      </div>
    </MDBFooter>
  );
}
