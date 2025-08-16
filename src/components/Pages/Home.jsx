import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
    const scriptElements = [];
    
    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
        // Skip if already loaded
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        
        // Add error handling
        script.onerror = () => {
            console.error(`Failed to load script: ${src}`);
            reject(new Error(`Script load error for ${src}`));
        };
        
        script.onload = resolve;
        document.body.appendChild(script);
        scriptElements.push(script);
        });
    };

    const scripts = [
        // Load jQuery first
        '/js/jquery.min.js',
        '/js/jquery-migrate-3.0.1.min.js',
        // Then other dependencies
        '/js/popper.min.js',
        '/js/bootstrap.min.js',
        // Then plugins
        '/js/jquery.easing.1.3.js',
        '/js/jquery.waypoints.min.js',
        '/js/jquery.stellar.min.js',
        '/js/owl.carousel.min.js',
        '/js/jquery.magnific-popup.min.js',
        '/js/aos.js',
        '/js/jquery.animateNumber.min.js',
        '/js/bootstrap-datepicker.js',
        // '/js/jquery.timepicker.min.js',  // Make sure this file exists
        '/js/scrollax.min.js',
        // Load Google Maps only if needed
        // '/js/google-map.js',  // Consider loading this only when needed
        '/js/main.js'
    ];

    const loadScripts = async () => {
        try {
        // Load scripts sequentially
        for (const src of scripts) {
            await loadScript(src).catch(err => {
            console.warn(`Skipping ${src} due to load error`);
            });
        }
        } catch (error) {
        console.error('Script loading error:', error);
        }
    };

    loadScripts();

    return () => {
        // Cleanup
        scriptElements.forEach(script => {
        if (script.parentNode) {
            script.parentNode.removeChild(script);
        }
        });
    };
    }, []);

  return (
    <div id="colorlib-page">
      <Helmet>
        <title>Elen - Free Bootstrap 4 Template by Colorlib</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet" />

        <link rel="stylesheet" href="/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />

        <link rel="stylesheet" href="/css/aos.css" />

        <link rel="stylesheet" href="/css/ionicons.min.css" />

        <link rel="stylesheet" href="/css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="/css/jquery.timepicker.css" />

        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/icomoon.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </Helmet>

      <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
      <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
        <h1 id="colorlib-logo"><Link to="/">elen<span>.</span></Link></h1>
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "colorlib-active" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/photography" 
                className={({ isActive }) => isActive ? "colorlib-active" : ""}
              >
                Photography
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/travel" 
                className={({ isActive }) => isActive ? "colorlib-active" : ""}
              >
                Travel
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/fashion" 
                className={({ isActive }) => isActive ? "colorlib-active" : ""}
              >
                Fashion
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "colorlib-active" : ""}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "colorlib-active" : ""}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="colorlib-footer">
          <p>
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://manojrajgopal.github.io/portfolio/" target="_blank">Manoj Rajgopal</a>
          </p>
          <ul>
            <li><a href="#"><i className="icon-facebook"></i></a></li>
            <li><a href="#"><i className="icon-twitter"></i></a></li>
            <li><a href="#"><i className="icon-instagram"></i></a></li>
            <li><a href="#"><i className="icon-linkedin"></i></a></li>
          </ul>
        </div>
      </aside>

      <div id="colorlib-main">
        <div className="hero-wrap js-fullheight" style={{backgroundImage: "url(/images/bg_1.jpg)"}} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="js-fullheight d-flex justify-content-center align-items-center">
            <div className="col-md-8 text text-center">
              <div className="img mb-4" style={{backgroundImage: "url(/images/author.jpg)"}}></div>
              <div className="desc">
                <h2 className="subheading">Hello I'm</h2>
                <h1 className="mb-4">Elen Henderson</h1>
                <p className="mb-4">I am A Blogger Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p><a href="#" className="btn-custom">More About Me <span className="ion-ios-arrow-forward"></span></a></p>
              </div>
            </div>
          </div>
        </div>

        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-2">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <h2 className="mb-4">Articles</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="blog-entry ftco-animate">
                  <a href="#" className="img img-2" style={{backgroundImage: "url(/images/image_1.jpg)"}}></a>
                  <div className="text text-2 pt-2 mt-3">
                    <span className="category mb-3 d-block"><a href="#">Technology</a></span>
                    <h3 className="mb-4"><a href="#">The Newest Technology On This Year 2019</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <div className="author mb-4 d-flex align-items-center">
                      <a href="#" className="img" style={{backgroundImage: "url(/images/person_2.jpg)"}}></a>
                      <div className="ml-3 info">
                        <span>Written by</span>
                        <h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
                      </div>
                    </div>
                    <div className="meta-wrap align-items-center">
                      <div className="half order-md-last">
                        <p className="meta">
                          <span><i className="icon-heart"></i>3</span>
                          <span><i className="icon-eye"></i>100</span>
                          <span><i className="icon-comment"></i>5</span>
                        </p>
                      </div>
                      <div className="half">
                        <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat for other articles - shortened for brevity */}
              <div className="col-md-4">
                <div className="blog-entry ftco-animate">
                  <a href="#" className="img img-2" style={{backgroundImage: "url(/images/image_2.jpg)"}}></a>
                  <div className="text text-2 pt-2 mt-3">
                    <span className="category mb-3 d-block"><a href="#">Travel</a></span>
                    <h3 className="mb-4"><a href="#">What to pack when visiting Sea</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <div className="author mb-4 d-flex align-items-center">
                      <a href="#" className="img" style={{backgroundImage: "url(/images/person_1.jpg)"}}></a>
                      <div className="ml-3 info">
                        <span>Written by</span>
                        <h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
                      </div>
                    </div>
                    <div className="meta-wrap align-items-center">
                      <div className="half order-md-last">
                        <p className="meta">
                          <span><i className="icon-heart"></i>3</span>
                          <span><i className="icon-eye"></i>100</span>
                          <span><i className="icon-comment"></i>5</span>
                        </p>
                      </div>
                      <div className="half">
                        <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue with all other articles similarly */}
              {/* Article 3 */}
              <div className="col-md-4">
                <div className="blog-entry ftco-animate">
                  <a href="#" className="img img-2" style={{backgroundImage: "url(/images/image_3.jpg)"}}></a>
                  <div className="text text-2 pt-2 mt-3">
                    <span className="category mb-3 d-block"><a href="#">Fashion</a></span>
                    <h3 className="mb-4"><a href="#">Awesome Fashion Trend in For Summer</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <div className="author mb-4 d-flex align-items-center">
                      <a href="#" className="img" style={{backgroundImage: "url(/images/person_3.jpg)"}}></a>
                      <div className="ml-3 info">
                        <span>Written by</span>
                        <h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
                      </div>
                    </div>
                    <div className="meta-wrap align-items-center">
                      <div className="half order-md-last">
                        <p className="meta">
                          <span><i className="icon-heart"></i>3</span>
                          <span><i className="icon-eye"></i>100</span>
                          <span><i className="icon-comment"></i>5</span>
                        </p>
                      </div>
                      <div className="half">
                        <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 4 */}
              <div className="col-md-4">
                <div className="blog-entry ftco-animate">
                  <a href="#" className="img img-2" style={{backgroundImage: "url(/images/image_4.jpg)"}}></a>
                  <div className="text text-2 pt-2 mt-3">
                    <span className="category mb-3 d-block"><a href="#">Travel</a></span>
                    <h3 className="mb-4"><a href="#">10 Most Awesome Place</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <div className="author mb-4 d-flex align-items-center">
                      <a href="#" className="img" style={{backgroundImage: "url(/images/person_1.jpg)"}}></a>
                      <div className="ml-3 info">
                        <span>Written by</span>
                        <h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
                      </div>
                    </div>
                    <div className="meta-wrap align-items-center">
                      <div className="half order-md-last">
                        <p className="meta">
                          <span><i className="icon-heart"></i>3</span>
                          <span><i className="icon-eye"></i>100</span>
                          <span><i className="icon-comment"></i>5</span>
                        </p>
                      </div>
                      <div className="half">
                        <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 5 */}
              <div className="col-md-4">
                <div className="blog-entry ftco-animate">
                  <a href="#" className="img img-2" style={{backgroundImage: "url(/images/image_5.jpg)"}}></a>
                  <div className="text text-2 pt-2 mt-3">
                    <span className="category mb-3 d-block"><a href="#">Travel</a></span>
                    <h3 className="mb-4"><a href="#">10 Most Awesome Beach in Asia</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <div className="author mb-4 d-flex align-items-center">
                      <a href="#" className="img" style={{backgroundImage: "url(/images/person_2.jpg)"}}></a>
                      <div className="ml-3 info">
                        <span>Written by</span>
                        <h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
                      </div>
                    </div>
                    <div className="meta-wrap align-items-center">
                      <div className="half order-md-last">
                        <p className="meta">
                          <span><i className="icon-heart"></i>3</span>
                          <span><i className="icon-eye"></i>100</span>
                          <span><i className="icon-comment"></i>5</span>
                        </p>
                      </div>
                      <div className="half">
                        <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 6 */}
              <div className="col-md-4">
                <div className="blog-entry ftco-animate">
                  <a href="#" className="img img-2" style={{backgroundImage: "url(/images/image_6.jpg)"}}></a>
                  <div className="text text-2 pt-2 mt-3">
                    <span className="category mb-3 d-block"><a href="#">Travel</a></span>
                    <h3 className="mb-4"><a href="#">Top Amazing Places to Go in Summer</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <div className="author mb-4 d-flex align-items-center">
                      <a href="#" className="img" style={{backgroundImage: "url(/images/person_3.jpg)"}}></a>
                      <div className="ml-3 info">
                        <span>Written by</span>
                        <h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
                      </div>
                    </div>
                    <div className="meta-wrap align-items-center">
                      <div className="half order-md-last">
                        <p className="meta">
                          <span><i className="icon-heart"></i>3</span>
                          <span><i className="icon-eye"></i>100</span>
                          <span><i className="icon-comment"></i>5</span>
                        </p>
                      </div>
                      <div className="half">
                        <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 7 */}
              <div className="col-md-4">
                <div className="blog-entry ftco-animate">
                  <a href="#" className="img img-2" style={{backgroundImage: "url(/images/image_7.jpg)"}}></a>
                  <div className="text text-2 pt-2 mt-3">
                    <span className="category mb-3 d-block"><a href="#">Fashion</a></span>
                    <h3 className="mb-4"><a href="#">7 Beginner Photographer's Mistakes</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <div className="author mb-4 d-flex align-items-center">
                      <a href="#" className="img" style={{backgroundImage: "url(/images/person_1.jpg)"}}></a>
                      <div className="ml-3 info">
                        <span>Written by</span>
                        <h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
                      </div>
                    </div>
                    <div className="meta-wrap align-items-center">
                      <div className="half order-md-last">
                        <p className="meta">
                          <span><i className="icon-heart"></i>3</span>
                          <span><i className="icon-eye"></i>100</span>
                          <span><i className="icon-comment"></i>5</span>
                        </p>
                      </div>
                      <div className="half">
                        <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 8 */}
              <div className="col-md-4">
                <div className="blog-entry ftco-animate">
                  <a href="#" className="img img-2" style={{backgroundImage: "url(/images/image_8.jpg)"}}></a>
                  <div className="text text-2 pt-2 mt-3">
                    <span className="category mb-3 d-block"><a href="#">Photography</a>, <a href="#">Travel</a></span>
                    <h3 className="mb-4"><a href="#">Excited to Visit in Palawan Philippines</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <div className="author mb-4 d-flex align-items-center">
                      <a href="#" className="img" style={{backgroundImage: "url(/images/person_2.jpg)"}}></a>
                      <div className="ml-3 info">
                        <span>Written by</span>
                        <h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
                      </div>
                    </div>
                    <div className="meta-wrap align-items-center">
                      <div className="half order-md-last">
                        <p className="meta">
                          <span><i className="icon-heart"></i>3</span>
                          <span><i className="icon-eye"></i>100</span>
                          <span><i className="icon-comment"></i>5</span>
                        </p>
                      </div>
                      <div className="half">
                        <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 9 */}
              <div className="col-md-4">
                <div className="blog-entry ftco-animate">
                  <a href="#" className="img img-2" style={{backgroundImage: "url(/images/image_9.jpg)"}}></a>
                  <div className="text text-2 pt-2 mt-3">
                    <span className="category mb-3 d-block"><a href="#">Technology</a></span>
                    <h3 className="mb-4"><a href="#">How to Make a Paper Boat in Scratch</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <div className="author mb-4 d-flex align-items-center">
                      <a href="#" className="img" style={{backgroundImage: "url(/images/person_3.jpg)"}}></a>
                      <div className="ml-3 info">
                        <span>Written by</span>
                        <h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
                      </div>
                    </div>
                    <div className="meta-wrap align-items-center">
                      <div className="half order-md-last">
                        <p className="meta">
                          <span><i className="icon-heart"></i>3</span>
                          <span><i className="icon-eye"></i>100</span>
                          <span><i className="icon-comment"></i>5</span>
                        </p>
                      </div>
                      <div className="half">
                        <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 10 */}
              <div className="col-md-4">
                <div className="blog-entry ftco-animate">
                  <a href="#" className="img img-2" style={{backgroundImage: "url(/images/image_10.jpg)"}}></a>
                  <div className="text text-2 pt-2 mt-3">
                    <span className="category mb-3 d-block"><a href="#">Fashion</a></span>
                    <h3 className="mb-4"><a href="#">10 Best Way to Styling Your Lifestyle</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <div className="author mb-4 d-flex align-items-center">
                      <a href="#" className="img" style={{backgroundImage: "url(/images/person_1.jpg)"}}></a>
                      <div className="ml-3 info">
                        <span>Written by</span>
                        <h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
                      </div>
                    </div>
                    <div className="meta-wrap align-items-center">
                      <div className="half order-md-last">
                        <p className="meta">
                          <span><i className="icon-heart"></i>3</span>
                          <span><i className="icon-eye"></i>100</span>
                          <span><i className="icon-comment"></i>5</span>
                        </p>
                      </div>
                      <div className="half">
                        <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 11 */}
              <div className="col-md-4">
                <div className="blog-entry ftco-animate">
                  <a href="#" className="img img-2" style={{backgroundImage: "url(/images/image_11.jpg)"}}></a>
                  <div className="text text-2 pt-2 mt-3">
                    <span className="category mb-3 d-block"><a href="#">Fashion</a></span>
                    <h3 className="mb-4"><a href="#">10 Tips to Become a Fashion Pro</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <div className="author mb-4 d-flex align-items-center">
                      <a href="#" className="img" style={{backgroundImage: "url(/images/person_2.jpg)"}}></a>
                      <div className="ml-3 info">
                        <span>Written by</span>
                        <h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
                      </div>
                    </div>
                    <div className="meta-wrap align-items-center">
                      <div className="half order-md-last">
                        <p className="meta">
                          <span><i className="icon-heart"></i>3</span>
                          <span><i className="icon-eye"></i>100</span>
                          <span><i className="icon-comment"></i>5</span>
                        </p>
                      </div>
                      <div className="half">
                        <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 12 */}
              <div className="col-md-4">
                <div className="blog-entry ftco-animate">
                  <a href="#" className="img img-2" style={{backgroundImage: "url(/images/image_12.jpg)"}}></a>
                  <div className="text text-2 pt-2 mt-3">
                    <span className="category mb-3 d-block"><a href="#">Photography</a></span>
                    <h3 className="mb-4"><a href="#">Visit the Most Amazing Place in North America</a></h3>
                    <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                    <div className="author mb-4 d-flex align-items-center">
                      <a href="#" className="img" style={{backgroundImage: "url(/images/person_3.jpg)"}}></a>
                      <div className="ml-3 info">
                        <span>Written by</span>
                        <h3><a href="#">Dave Lewis</a>, <span>Nov. 28, 2018</span></h3>
                      </div>
                    </div>
                    <div className="meta-wrap align-items-center">
                      <div className="half order-md-last">
                        <p className="meta">
                          <span><i className="icon-heart"></i>3</span>
                          <span><i className="icon-eye"></i>100</span>
                          <span><i className="icon-comment"></i>5</span>
                        </p>
                      </div>
                      <div className="half">
                        <p><a href="#" className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="ftco-footer ftco-bg-dark ftco-section">
          <div className="container px-md-5">
            <div className="row mb-5">
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-4">
                  <h2 className="ftco-heading-2">Category</h2>
                  <ul className="list-unstyled categories">
                    <li><a href="#">Photography <span>(6)</span></a></li>
                    <li><a href="#">Fashion <span>(8)</span></a></li>
                    <li><a href="#">Technology <span>(2)</span></a></li>
                    <li><a href="#">Travel <span>(2)</span></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Archives</h2>
                  <ul className="list-unstyled categories">
                    <li><a href="#">October 2018 <span>(6)</span></a></li>
                    <li><a href="#">September 2018 <span>(6)</span></a></li>
                    <li><a href="#">August 2018 <span>(8)</span></a></li>
                    <li><a href="#">July 2018 <span>(2)</span></a></li>
                    <li><a href="#">June 2018 <span>(7)</span></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                      <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                      <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* loader */}
      <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00"/></svg></div>
    </div>
  );
};

export default Home;