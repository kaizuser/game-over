import React from 'react';
import '../../styles/footer.css';
import { MDBFooter } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

export default function App() {
  return (
    <MDBFooter  className=' p-2 text-center text-lg-start bg-dark  text-light'>
     

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>GameOver
              </h6>
              <p>
              logo Game Over
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Games
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  SignUp
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  SignIp
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> New York, NY 10012, US
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@gameover.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex-lg-row  d-flex justify-content-cent justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
            <div className='iconsocial'>
              <a href="https://www.facebook.com/" target='blank'><img src="https://cdn-icons.flaticon.com/png/512/3955/premium/3955011.png?token=exp=1649121920~hmac=7263428e6358326107d2511a08400ad8" alt="img"  className="iconsocials" /> Facebook</a>
               <a href="https://www.instagram.com/accounts/login/?hl=es&sour..." target='blank'> <img src="https://cdn-icons.flaticon.com/png/512/4138/premium/4138124.png?token=exp=1649121832~hmac=fb0ea4af6ac1e230a6de5f722f487c0e" alt="img"  className="iconsocials" /> Instagram </a>
                <a href= "https://www.youtube.com/" target='blank'> <img src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670163.png?token=exp=1649121920~hmac=eb05569cfda4ddf29ec74f8f4c7d0c78" alt="img"  className="iconsocials" /> Youtube</a>
                <a href="https://mobile.twitter.com/i/flow/login" target='blank'><img src="https://cdn-icons.flaticon.com/png/512/3955/premium/3955031.png?token=exp=1649121920~hmac=9873ac9ce62f63cfc3f85d6478ae2c05" alt="img"  className="iconsocials" /> Twitter </a>
                <a href="https://discord.com/login" target='blank'><img src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670157.png?token=exp=1649122515~hmac=f69b9b56b539a8dcab9addf6d049da58" alt="img"  className="iconsocials" /> Discord </a>
                </div>
                </div>
      </section>

      <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#000000' }}>
        <p className='p-3 text-light'> © 2022Copyright  Game Over   All rights reserved.</p> 
      </div>
    </MDBFooter>
  );
}
