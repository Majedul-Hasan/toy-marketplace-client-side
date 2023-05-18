import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.svg';
import ComponentWrapper from '../../../Layout/ComponentWrapper';
import { useState } from 'react';
import HeaderFooterWrapper from '../../../Layout/HeaderFooterWrapper';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const handleLogOut = () => {
    console.log('log me out');
  };
  const NavItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About </Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to='/bookings'>My Bookings</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Log out</button>
          </li>
        </>
      ) : (
        <li>
          {' '}
          <Link to='/login'>Login</Link>{' '}
        </li>
      )}
    </>
  );

  return (
    <HeaderFooterWrapper bgPosition='top'>
      <ComponentWrapper classes=' '>
        <header className='py-2 w-full'>
          <div className='flex justify-center items-center my-4 '>
            <Link className=' text-xl w-2/12 '>
              <img
                className='w-full'
                src={logo}
                alt=''
              />
            </Link>
          </div>
          <div className='navbar bg-base-100'>
            <div className='navbar-start'>
              <div className='dropdown'>
                <label
                  tabIndex={0}
                  className='btn btn-ghost lg:hidden'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h8m-8 6h16'
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                  {NavItems}
                </ul>
              </div>
              <Link className=' text-xl w-16 '>
                <img
                  src={logo}
                  alt=''
                />
              </Link>
            </div>
            <div className='navbar-center hidden lg:flex'>
              <ul className='menu menu-horizontal px-1'>{NavItems}</ul>
            </div>
            <div className='navbar-end'>
              <a className='btn'>Get started</a>
            </div>
          </div>
        </header>
      </ComponentWrapper>
    </HeaderFooterWrapper>
  );
};

export default Header;

{
  /* <>
<div id="header_top" class="fixed">
    <div class="inner has-top-menu">
        <!--	Social profiles in header-->
        <div class="babystreet-top-bar-message">
            Customer Care: <span class="babystreet-top-bar-mail"> <a href="mailto:shop@baby.street"> shop@baby.street </a> </span> <span class="babystreet-top-bar-phone"> <a href="tel:+1555179472"> +1 555 179 472 </a> </span>
        </div>
        <div id="menu" class="menu-top-menu-container">
            <ul id="topnav2" class="">
                <li id="menu-item-2172" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2172"><a href="https://babystreet.althemist.com/product-category/girls-clothing/">Girls Clothing</a></li>
                <li id="menu-item-2173" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2173"><a href="https://babystreet.althemist.com/product-category/boys-clothing/">Boys Clothing</a></li>
                <li id="menu-item-2174" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2174"><a href="https://babystreet.althemist.com/product-category/toys-games/">Toys &amp; Accessories</a></li>
            </ul>
        </div>
    </div>
</div>

</> */
}

{
  /* <>
<div class="inner main_menu_holder fixed has-main-menu">
    <div id="logo">
        <a href="https://babystreet.althemist.com/" title="BabyStreet" rel="home">
            <img
                width="359"
                height="105"
                src="https://babystreet.althemist.com/wp-content/uploads/2021/11/babystreet-logo-round-big222.png"
                class=""
                alt=""
                decoding="async"
                loading="lazy"
                srcset="
                    https://babystreet.althemist.com/wp-content/uploads/2021/11/babystreet-logo-round-big222.png        359w,
                    https://babystreet.althemist.com/wp-content/uploads/2021/11/babystreet-logo-round-big222-300x88.png 300w,
                    https://babystreet.althemist.com/wp-content/uploads/2021/11/babystreet-logo-round-big222-100x29.png 100w
                "
                sizes="(max-width: 359px) 100vw, 359px"
            />
            <img
                width="359"
                height="105"
                src="https://babystreet.althemist.com/wp-content/uploads/2021/11/babystreet-logo-round-big222.png"
                class="transparent_logo"
                alt=""
                decoding="async"
                loading="lazy"
                srcset="
                    https://babystreet.althemist.com/wp-content/uploads/2021/11/babystreet-logo-round-big222.png        359w,
                    https://babystreet.althemist.com/wp-content/uploads/2021/11/babystreet-logo-round-big222-300x88.png 300w,
                    https://babystreet.althemist.com/wp-content/uploads/2021/11/babystreet-logo-round-big222-100x29.png 100w
                "
                sizes="(max-width: 359px) 100vw, 359px"
            />
            <img
                width="111"
                height="105"
                src="https://babystreet.althemist.com/wp-content/uploads/2021/11/babystreet-logo-heart-mobile-big222.png"
                class="babystreet_mobile_logo"
                alt=""
                decoding="async"
                loading="lazy"
                srcset="
                    https://babystreet.althemist.com/wp-content/uploads/2021/11/babystreet-logo-heart-mobile-big222.png        111w,
                    https://babystreet.althemist.com/wp-content/uploads/2021/11/babystreet-logo-heart-mobile-big222-100x95.png 100w
                "
                sizes="(max-width: 111px) 100vw, 111px"
            />
        </a>
    </div>
    <a class="mob-menu-toggle" href="#"><i class="fa fa-bars"></i></a>
    <div class="babystreet-search-cart-holder">
        <div class="babystreet-search-trigger">
            <a href="#" title="Search"><i class="fa fa-search"></i></a>
        </div>
        <!-- SHOPPING CART -->
        <ul id="cart-module" class="site-header-cart">
            <li class=""></li>
            <li class="">
                <a id="babystreet_quick_cart_link" class="cart-contents" href="https://babystreet.althemist.com/cart/" title="View your shopping cart">
                    <span class="count">0</span>
                </a>
            </li>
            <li></li>
        </ul>
        <!-- END OF SHOPPING CART -->
        <div class="babystreet-wishlist-counter">
            <a href="https://babystreet.althemist.com/wishlist/" title="Wishlist"> <i class="fa fa-heart"></i> <span class="babystreet-wish-number">0</span> </a>
        </div>
        <div id="babystreet-account-holder" class="babystreet-user-not-logged">
            <a href="https://babystreet.althemist.com/my-account/" title="My Account"> <i class="fa fa-user"></i> </a>
            <div class="babystreet-header-account-link-holder">
                <div class="woocommerce">
                    <div class="woocommerce-notices-wrapper"></div>
                    <div class="u-columns col2-set owl-carousel owl-loaded" id="customer_login">
                        <div class="owl-stage-outer">
                            <div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 800px;">
                                <div class="owl-item active" style="width: 400px;">
                                    <div class="u-column1 col-1">
                                        <h2>Login</h2>
                                        <form class="woocommerce-form woocommerce-form-login login" method="post">
                                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label for="username">Username or email address&nbsp;<span class="required">*</span></label>
                                                <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" value="" />
                                            </p>
                                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label for="password">Password&nbsp;<span class="required">*</span></label>
                                                <span class="password-input">
                                                    <input class="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autocomplete="current-password" />
                                                    <span class="show-password-input"></span>
                                                </span>
                                            </p>
                                            <p class="form-row">
                                                <label class="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                                    <input class="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" /> <span>Remember me</span>
                                                </label>
                                                <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="4dceb086cd" />
                                                <input type="hidden" name="_wp_http_referer" value="/product-category/shoes-accessories/" />
                                                <button type="submit" class="woocommerce-button button woocommerce-form-login__submit wp-element-button" name="login" value="Log in">Log in</button>
                                            </p>
                                            <p class="woocommerce-LostPassword lost_password"><a href="https://babystreet.althemist.com/my-account/lost-password/">Lost your password?</a></p>
                                        </form>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 400px;">
                                    <div class="u-column2 col-2">
                                        <h2>Register</h2>
                                        <form method="post" class="woocommerce-form woocommerce-form-register register">
                                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label for="reg_email">Email address&nbsp;<span class="required">*</span></label>
                                                <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autocomplete="email" value="" />
                                            </p>
                                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label for="reg_password">Password&nbsp;<span class="required">*</span></label>
                                                <span class="password-input">
                                                    <input type="password" class="woocommerce-Input woocommerce-Input--text input-text" name="password" id="reg_password" autocomplete="new-password" />
                                                    <span class="show-password-input"></span>
                                                </span>
                                            </p>
                                            <div class="woocommerce-privacy-policy-text">
                                                <p>
                                                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                                                    <a href="https://babystreet.althemist.com/privacy-policy/" class="woocommerce-privacy-policy-link" target="_blank">privacy policy</a>.
                                                </p>
                                            </div>
                                            <p class="woocommerce-form-row form-row">
                                                <input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" value="fa83b69c8c" />
                                                <input type="hidden" name="_wp_http_referer" value="/product-category/shoes-accessories/" />
                                                <button type="submit" class="woocommerce-Button woocommerce-button button wp-element-button woocommerce-form-register__submit" name="register" value="Register">Register</button>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="owl-nav"><button type="button" role="presentation" class="owl-prev disabled">Login</button><button type="button" role="presentation" class="owl-next">Register</button></div>
                        <div class="owl-dots disabled"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="main-menu" class="menu-main-menu-container">
        <ul id="main_nav" class="menu">
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-26 dropdown has-mega">
                <a href="https://babystreet.althemist.com/">Home</a>
                <div class="babystreet-mega-menu menu-columns4" style="">
                    <ul class="sub-menu">
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2550 babystreet_colum_title dropdown">
                            <a href="#">Home Page Variants</a>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3502"><a href="https://babystreet.althemist.com/">Main Home</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3501"><a href="https://babystreet.althemist.com/home-2/">Home Boxed</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3500"><a href="https://babystreet.althemist.com/home-3/">Home Categories</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3499"><a href="https://babystreet.althemist.com/home-4/">Home Small Slider</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3498"><a href="https://babystreet.althemist.com/home-5/">Home LookBooks</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3497"><a href="https://babystreet.althemist.com/home-6/">Home Sections</a></li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3274 babystreet_colum_title babystreet_mega_text_block_parent dropdown">
                            <ul class="sub-menu">
                                <li id="menu-item-2943" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2943 babystreet_mega_text_block">
                                    <a href="https://babystreet.althemist.com" title="Main Home" style="margin-bottom: 15px; border: 3px solid #f1f1f1; border-radius: 8px; overflow: hidden;">
                                        <img src="https://babystreet.althemist.com/wp-content/uploads/2019/03/menu-homes-ban1.jpg" alt="Main Home" width="400" height="260" />
                                    </a>
                                </li>
                                <li id="menu-item-2941" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2941 babystreet_mega_text_block">
                                    <a href="https://babystreet.althemist.com/home-3/" title="Home 3" style="margin-bottom: 15px; border: 3px solid #f1f1f1; border-radius: 8px; overflow: hidden;">
                                        <img src="https://babystreet.althemist.com/wp-content/uploads/2019/03/menu-homes-ban3.jpg" alt="Home 3" width="400" height="260" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3275 babystreet_colum_title babystreet_mega_text_block_parent dropdown">
                            <ul class="sub-menu">
                                <li id="menu-item-2875" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2875 babystreet_mega_text_block">
                                    <a href="https://babystreet.althemist.com/home-2/" title="Home 2" style="margin-bottom: 15px; border: 3px solid #f1f1f1; border-radius: 8px; overflow: hidden;">
                                        <img src="https://babystreet.althemist.com/wp-content/uploads/2019/03/menu-homes-ban2.jpg" alt="Home 2" width="400" height="260" />
                                    </a>
                                </li>
                                <li id="menu-item-2939" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2939 babystreet_mega_text_block">
                                    <a href="https://babystreet.althemist.com/home-5/" title="Home 5" style="margin-bottom: 15px; border: 3px solid #f1f1f1; border-radius: 8px; overflow: hidden;">
                                        <img src="https://babystreet.althemist.com/wp-content/uploads/2019/03/menu-homes-ban5.jpg" alt="Home 5" width="400" height="260" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2874 babystreet_colum_title babystreet_mega_text_block_parent dropdown">
                            <ul class="sub-menu">
                                <li id="menu-item-2940" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2940 babystreet_mega_text_block">
                                    <a href="https://babystreet.althemist.com/home-4/" title="Home 4" style="margin-bottom: 15px; border: 3px solid #f1f1f1; border-radius: 8px; overflow: hidden;">
                                        <img src="https://babystreet.althemist.com/wp-content/uploads/2019/03/menu-homes-ban4.jpg" alt="Home 4" width="400" height="260" />
                                    </a>
                                </li>
                                <li id="menu-item-2938" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2938 babystreet_mega_text_block">
                                    <a href="https://babystreet.althemist.com/home-6/" title="Home 6" style="margin-bottom: 15px; border: 3px solid #f1f1f1; border-radius: 8px; overflow: hidden;">
                                        <img src="https://babystreet.althemist.com/wp-content/uploads/2019/03/menu-homes-ban6.jpg" alt="Home 6" width="400" height="260" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-27 dropdown has-mega">
                <a href="https://babystreet.althemist.com/shop/">Shop<span class="babystreet-custom-menu-label" style="background-color: #bccd65;">COOL</span></a>
                <div class="babystreet-mega-menu menu-columns5" style="">
                    <ul class="sub-menu">
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2303 babystreet_colum_title babystreet-link-has-icon dropdown">
                            <a href="#"><i class="flaticon-user-information-doodle"></i> Shop Layouts</a>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2304 dropdown">
                                    <a href="https://babystreet.althemist.com/shop/">Standard Shop</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2305">
                                            <a href="/shop/?shop_default_product_columns=columns-2&amp;shop_pages_width=standard&amp;category_columns_num=3&amp;enable_shop_cat_carousel=checked&amp;show_sidebar_shop=0">
                                                2 Columns<span class="babystreet-custom-menu-label">NARROW</span>
                                            </a>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2306">
                                            <a href="/shop/?shop_default_product_columns=columns-3&amp;shop_pages_width=standard&amp;category_columns_num=3&amp;enable_shop_cat_carousel=checked&amp;show_sidebar_shop=0">
                                                3 Columns<span class="babystreet-custom-menu-label">NARROW</span>
                                            </a>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2307">
                                            <a href="/shop/?shop_default_product_columns=columns-4&amp;category_columns_num=4&amp;enable_shop_cat_carousel=checked&amp;show_sidebar_shop=0">4 Columns</a>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2308">
                                            <a href="/shop/?shop_default_product_columns=columns-5&amp;category_columns_num=4&amp;enable_shop_cat_carousel=checked&amp;show_sidebar_shop=0">5 Columns</a>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2309">
                                            <a href="/shop/?shop_default_product_columns=columns-6&amp;category_columns_num=4&amp;enable_shop_cat_carousel=checked&amp;show_sidebar_shop=0">6 Columns</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2310">
                                    <a
                                        href="/shop/?shop_default_product_columns=columns-3&amp;shop_pages_width=standard&amp;category_columns_num=3&amp;enable_shop_cat_carousel=checked&amp;show_sidebar_shop=checked&amp;sidebar_position=babystreet-right-sidebar"
                                    >
                                        Standard + Sidebar
                                    </a>
                                </li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2311">
                                    <a href="/shop/?shop_default_product_columns=columns-5&amp;category_columns_num=4&amp;enable_shop_cat_carousel=checked&amp;show_sidebar_shop=checked">Wide – Left Sidebar</a>
                                </li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2312"><a href="/shop/?enable_shop_infinite=0">Classic Pagination</a></li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2313"><a href="/shop/?use_load_more_on_shop=true">Load More Button</a></li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2302 babystreet_colum_title babystreet-link-has-icon dropdown">
                            <a href="#"><i class="flaticon-open-box-doodle"></i> Single Products</a>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-type-post_type menu-item-object-product menu-item-2293"><a href="https://babystreet.althemist.com/product/stuffed-blue-shark/">Standard Gallery</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-product menu-item-2294"><a href="https://babystreet.althemist.com/product/denim-jumpsuit/">Large Images</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-product menu-item-2295"><a href="https://babystreet.althemist.com/product/super-star-knit-hat/">Mosaic Images</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-product menu-item-2296"><a href="https://babystreet.althemist.com/product/denim-shorts/">Simple Product</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-product menu-item-2297"><a href="https://babystreet.althemist.com/product/giraffe-night-lamp/">Variable Product</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-product menu-item-2298"><a href="https://babystreet.althemist.com/product/funny-bunny-jumpsuit/">Deal / Sale</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-product menu-item-2299"><a href="https://babystreet.althemist.com/product/just-hanging-blouse/">Grouped Product</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-product menu-item-2300"><a href="https://babystreet.althemist.com/product/pooh-bear/">Affiliate / External</a></li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-product menu-item-2301"><a href="https://babystreet.althemist.com/product/blue-denim-top/">Product Video</a></li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2626">
                                    <a href="/product/three-piglets/?show_sidebar_product=checked&amp;sidebar_position=grosso-right-sidebar">With Sidebar</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2533 babystreet_colum_title babystreet_mega_text_block_parent dropdown">
                            <ul class="sub-menu">
                                <li id="menu-item-2534" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2534 babystreet_mega_text_block">
                                    <a href="https://babystreet.althemist.com/shop/" title="Shop the Sale">
                                        <img src="https://babystreet.althemist.com/wp-content/uploads/2019/02/menu_banner_shop.jpg" alt="Sale - 30% off" width="317" height="400" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2546 babystreet_colum_title babystreet-link-has-icon dropdown">
                            <a href="#"><i class="flaticon-draw-t-shirt"></i> Categories</a>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-2161 dropdown">
                                    <a href="https://babystreet.althemist.com/product-category/girls-clothing/">Girls</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2162"><a href="https://babystreet.althemist.com/product-category/girls-clothing/blouses/">Blouses</a></li>
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2165"><a href="https://babystreet.althemist.com/product-category/girls-clothing/t-shirts/">T-shirts</a></li>
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2163">
                                            <a href="https://babystreet.althemist.com/product-category/girls-clothing/dresses-skirts/">Dresses &amp; Skirts</a>
                                        </li>
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2164"><a href="https://babystreet.althemist.com/product-category/girls-clothing/leggings/">Leggings</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-2166 dropdown">
                                    <a href="https://babystreet.althemist.com/product-category/boys-clothing/">Boys</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2168">
                                            <a href="https://babystreet.althemist.com/product-category/boys-clothing/tops-shirts/">Tops &amp; Shirts</a>
                                        </li>
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2169">
                                            <a href="https://babystreet.althemist.com/product-category/boys-clothing/jumpsuits/">Rompers &amp; Jumpsuits</a>
                                        </li>
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2170"><a href="https://babystreet.althemist.com/product-category/boys-clothing/jeans/">Jeans</a></li>
                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2669"><a href="https://babystreet.althemist.com/product-category/boys-clothing/sweaters/">Sweaters</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2277 babystreet_colum_title babystreet-link-has-icon dropdown">
                            <a href="#"><i class="flaticon-painting-palette"></i> Shop By:</a>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2278 dropdown">
                                    <a href="#">Color</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2279">
                                            <a href="/color/red/">Red<span class="babystreet-custom-menu-label" style="background-color: #dd3333;"> </span></a>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2280">
                                            <a href="/color/blue/">Blue<span class="babystreet-custom-menu-label" style="background-color: #76c1d3;"> </span></a>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2282">
                                            <a href="/color/color-orange/">Orange<span class="babystreet-custom-menu-label" style="background-color: #f79e38;"> </span></a>
                                        </li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2547">
                                            <a href="/color/green/">Green<span class="babystreet-custom-menu-label" style="background-color: #b6d140;"> </span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2283 dropdown">
                                    <a href="#">Age &amp; Size</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2284"><a href="/age/0-12-months/">0 – 12 months</a></li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2285"><a href="/age/1-4-years/">1 – 4 y.o.</a></li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2286"><a href="/age/4-8-years/">4 – 8 y.o.</a></li>
                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2549"><a href="/age/8-14-years/">8 – 14 y.o.</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-25 dropdown">
                <a href="https://babystreet.althemist.com/blog/">Blog</a>
                <ul class="sub-menu">
                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2668"><a href="/blog?sidebar_position=babystreet-right-sidebar">Blog Right Sidebar</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-2662"><a href="https://babystreet.althemist.com/blog/2018/06/06/why-february-babies-are-extra-special/">Standard Post</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-2663"><a href="https://babystreet.althemist.com/blog/2018/06/06/the-surprising-way-motherhood-changed-me/">Hidden Featured Image</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-2664"><a href="https://babystreet.althemist.com/blog/2018/06/06/how-aromatherapy-can-impact-nicu-babies/">Image in Header</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-2665"><a href="https://babystreet.althemist.com/blog/2018/06/06/top-10-back-to-school-looks/">Post Left Sidebar</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-2666"><a href="https://babystreet.althemist.com/blog/2018/06/06/dude-dont-touch-my-kid/">Post Right Sidebar</a></li>
                </ul>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2446 dropdown">
                <a href="https://babystreet.althemist.com/looks/">LookBook</a>
                <ul class="sub-menu">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3305"><a href="https://babystreet.althemist.com/lookbook-2-columns/">2 Columns Looks</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3306"><a href="https://babystreet.althemist.com/looks/">3 Columns Looks</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3304"><a href="https://babystreet.althemist.com/lookbook-4-columns/">4 Columns Looks</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3303"><a href="https://babystreet.althemist.com/lookbook-carousels/">Carousel Looks</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-babystreet-portfolio menu-item-3289"><a href="https://babystreet.althemist.com/blog/portfolios/pink-ballerina/">Big Images</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-babystreet-portfolio menu-item-3288"><a href="https://babystreet.althemist.com/blog/portfolios/strypes-dots/">Simple Slideshow</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-babystreet-portfolio menu-item-3290"><a href="https://babystreet.althemist.com/blog/portfolios/jawsome-sweater/">QloudZoom Gallery</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-babystreet-portfolio menu-item-3287"><a href="https://babystreet.althemist.com/blog/portfolios/gator-shirt/">With Sidebar</a></li>
                </ul>
            </li>
            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-85 dropdown">
                <a href="#">Pages</a>
                <ul class="sub-menu">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2275"><a href="https://babystreet.althemist.com/about-us/">About Us</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2274"><a href="https://babystreet.althemist.com/contacts/">Contacts</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2273"><a href="https://babystreet.althemist.com/faq/">FAQ</a></li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2316"><a href="https://babystreet.althemist.com/coming-soon/">Coming Soon</a></li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2317"><a href="/sasho">404</a></li>
                </ul>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3324"><a href="https://babystreet.althemist.com/babystreet-theme-landing-page/">Features</a></li>
        </ul>
    </div>
</div>


</> */
}
