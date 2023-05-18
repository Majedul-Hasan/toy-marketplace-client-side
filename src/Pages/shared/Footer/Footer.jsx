import PageWrapper from '../../../Layout/PageWrapper';
import logo from '../../../assets/logo-01.png';
import BackdropFilter from 'react-backdrop-filter';
const Footer = () => {
  return (
    <div
      className='bg-base-200 text-base-content'
      style={{
        backgroundImage:
          'url(https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-full-blue-sky-white-clouds-small-tree-hillside-holiday-travel-background-image_60535.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <BackdropFilter
        className='bluredForm'
        filter={'blur(5px) sepia(40%)'}
        canvasFallback={true}
        html2canvasOpts={{
          allowTaint: true,
        }}
        onDraw={() => {
          console.log('Rendered !');
        }}>
        <PageWrapper>
          <footer className='footer grid-cols-1 md:grid-cols-4 '>
            <div className=' text-center col-span-2'>
              <div className='w-1/3 mx-auto'>
                <img
                  src={logo}
                  alt=''
                />
              </div>

              <p className='w-4/5 mx-auto'>
                <span className='text-xl font-bold'> Toys zone</span>
                <br />
                Providing reliable kids toy since 1987
              </p>
            </div>
            <div>
              <span className='footer-title'>Services</span>
              <a className='link link-hover'>Branding</a>
              <a className='link link-hover'>Design</a>
              <a className='link link-hover'>Marketing</a>
              <a className='link link-hover'>Advertisement</a>
            </div>
            <div>
              <span className='footer-title'>Company</span>
              <a className='link link-hover'>About us</a>
              <a className='link link-hover'>Contact</a>
              <a className='link link-hover'>Jobs</a>
              <a className='link link-hover'>Press kit</a>
            </div>
            <div>
              <span className='footer-title'>Legal</span>
              <a className='link link-hover'>Terms of use</a>
              <a className='link link-hover'>Privacy policy</a>
              <a className='link link-hover'>Cookie policy</a>
            </div>
          </footer>
        </PageWrapper>
      </BackdropFilter>
    </div>
  );
};

export default Footer;

{
  /* <>
 <div>
      <footer>
        <div id='footer'>
          <div className='inner'>
            <div
              id='babystreet_footer_menu_container'
              className='menu-footer-menu-container'>
              <ul
                id='babystreet_footer_menu'
                className>
                <li
                  id='menu-item-2178'
                  className='menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2178'>
                  <a href='https://babystreet.althemist.com/'>Home</a>
                </li>
                <li
                  id='menu-item-2180'
                  className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2180'>
                  <a href='https://babystreet.althemist.com/shop/'>
                    BabyStreet Shop
                  </a>
                </li>
                <li
                  id='menu-item-2177'
                  className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2177'>
                  <a href='https://babystreet.althemist.com/blog/'>Blog</a>
                </li>
                <li
                  id='menu-item-2179'
                  className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2179'>
                  <a href='https://babystreet.althemist.com/my-account/'>
                    My account
                  </a>
                </li>
                <li
                  id='menu-item-2206'
                  className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2206'>
                  <a href='https://babystreet.althemist.com/wishlist/'>
                    Wishlist
                  </a>
                </li>
                <li
                  id='menu-item-2205'
                  className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2205'>
                  <a href='https://babystreet.althemist.com/faq/'>FAQ</a>
                </li>
              </ul>
            </div>
            <div id='babystreet_footer_logo'>
              <a
                href='https://babystreet.althemist.com/'
                title='BabyStreet'
                rel='home'>
                <img
                  width={137}
                  height={143}
                  src='https://babystreet.althemist.com/wp-content/uploads/2019/02/footer-logo.png'
                  className='attachment-full size-full'
                  alt
                  decoding='async'
                  loading='lazy'
                  srcSet='https://babystreet.althemist.com/wp-content/uploads/2019/02/footer-logo.png 137w, https://babystreet.althemist.com/wp-content/uploads/2019/02/footer-logo-100x104.png 100w'
                  sizes='(max-width: 137px) 100vw, 137px'
                />
              </a>
            </div>
          </div>
          <div className='inner'>
            <div
              id='nav_menu-2'
              className='one_fourth widget widget_nav_menu'>
              <h3>Information</h3>
              <div className='menu-information-container'>
                <ul
                  id='menu-information'
                  className='menu'>
                  <li
                    id='menu-item-2191'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2191'>
                    <a href='https://babystreet.althemist.com/about-us/'>
                      About Us
                    </a>
                  </li>
                  <li
                    id='menu-item-2190'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2190'>
                    <a href='https://babystreet.althemist.com/contacts/'>
                      Contacts
                    </a>
                  </li>
                  <li
                    id='menu-item-2189'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2189'>
                    <a href='https://babystreet.althemist.com/faq/'>FAQ</a>
                  </li>
                  <li
                    id='menu-item-2199'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2199'>
                    <a href='https://babystreet.althemist.com/shop/'>
                      BabyStreet Shop
                    </a>
                  </li>
                  <li
                    id='menu-item-2192'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2192'>
                    <a href='https://babystreet.althemist.com/blog/'>Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              id='nav_menu-3'
              className='one_fourth widget widget_nav_menu'>
              <h3>Extras</h3>
              <div className='menu-extras-container'>
                <ul
                  id='menu-extras'
                  className='menu'>
                  <li
                    id='menu-item-2198'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2198'>
                    <a href='https://babystreet.althemist.com/my-account/'>
                      My account
                    </a>
                  </li>
                  <li
                    id='menu-item-2195'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2195'>
                    <a href='https://babystreet.althemist.com/wishlist/'>
                      Wishlist
                    </a>
                  </li>
                  <li
                    id='menu-item-2194'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2194'>
                    <a href='https://babystreet.althemist.com/order-tracking/'>
                      Order Tracking
                    </a>
                  </li>
                  <li
                    id='menu-item-2196'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-2196'>
                    <a href='https://babystreet.althemist.com/terms-conditions/'>
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li
                    id='menu-item-2197'
                    className='menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-2197'>
                    <a
                      rel='privacy-policy'
                      href='https://babystreet.althemist.com/privacy-policy/'>
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              id='babystreet_contacts_widget-2'
              className='one_fourth widget widget_babystreet_contacts_widget'>
              <h3>Have a Question?</h3>
              <span className='footer_time'>
                Mon. - Fri.: 09:00 - 18:30
              </span>{' '}
              <span className='footer_address'>
                164 7th Avenue, Seattle, WA 9801
              </span>{' '}
              <span className='footer_phone'>+1.888.292.7171</span>{' '}
              <span className='footer_fax'>+1.888.292.7272</span>
              <span className='footer_mail'>
                <a href='mailto:shop@baby.street'>shop@baby.street</a>
              </span>
            </div>
            <div
              id='babystreet_payment_options_widget-2'
              className='one_fourth widget widget_babystreet_payment_options_widget last'>
              <h3>Payment Options</h3>
              <div className='american-express_icon cards_icon' />
              <div className='maestro_icon cards_icon' />
              <div className='mastercard_icon cards_icon' />
              <div className='visa_icon cards_icon' />
              <div className='cash-on-delivery_icon cards_icon' />
              <div className='paypal_icon cards_icon' />
              <div className='ideal_icon cards_icon' />
            </div>
            <div className='clear' />
            <div className='clear' />
          </div>
          <div id='powered'>
            <div className='inner'>
              // {/*	Social profiles in footer 
              <div className='babystreet-social'>
                <ul>
                  <li>
                    <a
                      title='Follow on Facebook'
                      className='facebook'
                      target='_blank'
                      href='#'>
                      <i className='fa fa-facebook' />
                    </a>
                  </li>
                  <li>
                    <a
                      title='Follow on Twitter'
                      className='twitter'
                      target='_blank'
                      href='#'>
                      <i className='fa fa-twitter' />
                    </a>
                  </li>
                  <li>
                    <a
                      title='Follow on YouTube'
                      className='youtube'
                      target='_blank'
                      href='#'>
                      <i className='fa fa-youtube-play' />
                    </a>
                  </li>
                  <li>
                    <a
                      title='Follow on Instagram'
                      className='instegram'
                      target='_blank'
                      href='#'>
                      <i className='fa fa-instagram' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className='author_credits'>
                Babystreet theme by{' '}
                <a
                  target='_blank'
                  title="theAlThemist's portfolio"
                  href='http://themeforest.net/user/theAlThemist/portfolio?ref=theAlThemist'>
                  theAlThemist
                </a>{' '}
                | © 2019 All rights reserved!
              </div>
            </div>
          </div>
        </div>
      </footer>
      ;
    </div>
</> */
}
