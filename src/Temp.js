import React, { useEffect } from 'react';
import './App.css';
import './assets/css/product_animation.css';
import { AiOutlineSearch } from 'react-icons/ai'
import marker_pen from './assets/marker.png'
import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PrdImageOne from './assets/17.png'
import PrdImageTwo from './assets/19.png'
import PrdImageThree from './assets/21.png'
// import { TweenMax, Power3 } from 'gsap';
import { gsap } from "gsap";
import Image from './assets/homeBanner.jpg'
import worldMap from './assets/map.png'
import Image1 from './assets/Products School.png'
import Image2 from './assets/Products Art.png'
import Image3 from './assets/Products Offc.png'
import Image4 from './assets/World Map.png'
import Image5 from './assets/Luxor Journey.jpg'
import Image6 from './assets/enviro-rrr.png'
import Carasol from './Components/header/Carasol/Carasoul';
import ArtGallery from './assets/images/Art Gallery.jpg'
import ImageContainer from './Components/ImageContainer';
import I1 from './assets/images/Look Book 1.jpg'
import I2 from './assets/images/Look Book 2.jpg'
import I3 from './assets/images/Look Book 3.jpg'
import Client from './assets/client.png'
import Image11 from './assets/ugc image.png'
import Image12 from './assets/ugc heart.png'
import Image13 from './assets/ugc pen.png'
import Image14 from './assets/org11.png'
import Image15 from './assets/org12.png'
import Image16 from './assets/org3.png'
import Image17 from './assets/images/Did you Know.png'
import Image18 from './assets/images/Partner.png'
import Image19 from './assets/certi1.png'
import Image20 from './assets/certi2.png'
import Image21 from './assets/certi3.png'
import Image22 from './assets/certi4.png'
import Image23 from './assets/award1.png'
import Image24 from './assets/award2.png'
import Image25 from './assets/award3.png'
import Image26 from './assets/Lineart.png'
import Image27 from './assets/pennib.png'
import { Link } from 'react-router-dom';

function App() {
    
    
    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {

         document.getElementsByClassName(
            'Art_gallery_button'
        )[0].innerHTML = "Art Gallery"

        let text_div = document.querySelectorAll(".home-text");
        let sections = document.querySelectorAll(".home1-img img");
        let new_launch = document.querySelectorAll("new_launch");
        

        gsap.to(sections,
        {  
            duration:2,
            x:-150,
            repeat:-1,
            yoyo:true,
        scrollTrigger: {
            trigger: sections,
            toggleActions:"restart pause resume reset", 

            onToggle: self => console.log("toggled, isActive:", self.isActive),
            start: "top 70%",
            end: "bottom 50%",
              },    
          });


           gsap.from(text_div, {
            x: -220,
            stagger: 0.2, // 0.1 seconds between when each ".box" element starts animating
            duration: 2,
            opacity: 0,
            scrollTrigger: {
                trigger: text_div,
                toggleActions:"restart pause resume reset", 

                onToggle: self => console.log("toggled, isActive:", self.isActive),
                start: "top 70%",
                end: "bottom 50%",
              },
          });
    
          gsap.to(text_div , {
            x: 70,
            opacity: 1,
            duration:2,
            repeat:-1,
            yoyo:true,
            scrollTrigger: {
                trigger: text_div,
                toggleActions:"restart pause resume reset", 

                onToggle: self => console.log("toggled, isActive:", self.isActive),
                start: "top 70%",
                end: "bottom 50%",
              },
    
           })


 
              productBackGround()
              newLaumch()
      
    } ,[])

   

    function productBackGround() {
        
        let prd_bc = document.querySelectorAll(".product-box");
        let tl  =  gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: prd_bc,
                toggleActions:"restart pause resume reset", 
                onToggle: self => console.log("toggled, isActive:", self.isActive),
                start: "top 70%",
                end: "bottom 50%",
              },
    
        })
            tl.to(prd_bc, {
            duration: 1,
            opacity: 1,
            ease: 'expo.inOut',
            })
            
            tl.from(prd_bc, {
                duration: 1,
                opacity: 0,
                stagger: 0.1,
                ease: 'expo.inOut',
              }, "-=0.5");
              tl.reverse();
             
// tl.from(links, {
//   duration: 1,
//   opacity: 0,
//   y: 20,
//   stagger: 0.1,
//   ease: 'expo.inOut',
// }, "-=0.5");

// tl.reverse();

// ham.addEventListener('click', () => {
//   tl.reversed(!tl.reversed());
// });


        // gsap.to(prd_bc , 
        //      {
        //                 x:-220 ,
        //             duration:2,
        //             width:0,
        //             opacity:5,
        //      } ,
              
        //       {
        //         x:200,

        //      opacity: 1,
        //     duration:2,
        //     scrollTrigger: {
        //         trigger: prd_bc,
        //         toggleActions:"restart pause resume reset", 
        //         onToggle: self => console.log("toggled, isActive:", self.isActive),
        //         start: "top 70%",
        //         end: "top 30%",
        //         markers:true
        //       },
    
        //    })

     }


    function newLaumch(){
         
        let new_launch = document.querySelectorAll(".new_launch");
        let pen_marker_line = document.querySelectorAll(".pen_marker_line");
        
        let marker_marks = document.querySelectorAll(".new_launch_marker img");
        
        gsap.to(marker_marks,
             {  
                duration:2,
                x:400,
            scrollTrigger: {
                trigger: marker_marks,
                toggleActions:"restart pause resume reset", 
                onToggle: self => console.log("toggled, isActive:", self.isActive),
                start: "top 70%",
                end: "bottom 20%",
                  },    
              });

              gsap.fromTo(pen_marker_line,{
                    duration:2,
                    width:0,
                    opacity:5,
              } ,


                {  
                   duration:2,
                   width:400,
                   height: "100%",
                   opacity:0,
                   borderRadius:"  0 0 50% 50% ",
                    height: "fit-content",
                    backgroundColor: "rgba(99, 97, 7, 0.8)",
                    zIndex:-2,
                   scrollTrigger: {
                   trigger: pen_marker_line,
                  toggleActions:"restart pause resume restart", 

                   onToggle: self => console.log("toggled, isActive:", self.isActive),
                   start: "top 70%",
                   end: "bottom 50%",
                     },    
                 });
    
            

    }
    
    function drawPen(pen_div , pen_image_div , pen_draw_div,  pen_colour) {

        let penDiv = document.querySelectorAll(pen_div    );
        let Image = document.querySelectorAll(pen_image_div)
        let marker_line = document.querySelectorAll(pen_draw_div)

         gsap.to( penDiv , {
            //  backgroundColor:"red",
             width:300,
            scale:1 , 
            dirat1ion:2
         } )

           gsap.to( Image , {
            //  backgroundColor:"red",
            x:100,
            width:300,
            height:"86%",
            scale:1 , 
            dirat1ion:2
           })

         gsap.to( marker_line , {
            //  backgroundColor:"red",
           borderTop: `8px solid ${pen_colour}`,
            width:100,
            scale:1 , 
            dirat1ion:2
         } )
 

 
            }


             function removeDrawPen(pen_div , pen_image_div, pen_draw_div,  pen_colour) {
                let penDiv = document.querySelectorAll(pen_div    );
                let Image =  document.querySelectorAll(pen_image_div)
                let marker_line = document.querySelectorAll(pen_draw_div)

                    gsap.to( penDiv , {
                        backgroundColor:"white",
                        scale:1 , 
                        diration:0,
                        width:245,
                    } )

                    gsap.to( Image , {
                        //  backgroundColor:"red",
                        x:0,
                        width:245,
                        height:"86%",
                        scale:1 , 
                        dirat1ion:2,
                        yoyo:true
                     } )
                            
                        gsap.to( marker_line , {
                            //  backgroundColor:"red",
                            borderTop: `8px solid ${pen_colour}`,
                            x:0,
                            width:0,
                            scale:1 , 
                            dirat1ion:2
                        } )
 
}
 

        function visibleProduct(cl_name,prd_image , current_div_class ){
            let prd_img_hover = document.querySelectorAll( cl_name);

            gsap.to( prd_image   , {
                zIndex: 20,
                opacity:1,
                scale:1 , 
                diration:2,
                display: "flex",
                top:"100%" 
            } )

            gsap.to( `${prd_image} img`   , {
                    scale:1 , 
                    scale: 1,
                    height: "90px",
                    width: "100%",
            } )


       }

       function HiddenVisibleProduct(cl_name , prd_image, current_div_class  ){

        let prd_img_hover = document.querySelectorAll( cl_name);
         
        gsap.to( prd_image   , {
            scale:1 , 
            diration:2,
            opacity:0,
            top:"50%" ,
            display: "none",
        } )

   }


 

    return (
        <>
            <header >

               

                <a href='#' className='logo'>
                    <img src='https://luxorpen.com/images/logo/logo.png' />
                </a>
                <div className='search'>
                    <input className='inputData' placeholder='Search' />
                    <AiOutlineSearch className='searchIcon' />
                    <select className='selectData' onChange={(e) => { }}>
                        <option value="">Lang</option>
                        <option value="Enh">English</option>
                        <option value="Hin">Hindi</option>
                    </select>
                </div>

            </header>


            <nav>

                <ul className='navbar'>

                    <li>
                        <a href="#about">
                            <select className='aboutus'>
                                <option value="">About Us</option>
                                <option value="Vision">Vision</option>
                                <option value="Mission">Mission</option>
                                <option value="Milstone">Milstone</option>
                            </select>
                        </a>
                    </li>

                    <li><Link to="/product">Product</Link></li>
                    <li><a href="#services">E- Catalogue</a></li>
                    <li><a href="#contact">Media</a></li>
                    <li><a href="#contact">Art Gallery</a></li>
                    <li><a href="#contact">Career</a></li>

                </ul>

            </nav>

            {/*  <section className='background'>
        <div className='backgroundImage'>
          <img src={Image} alt='' />
        </div>

      </section>
  */}


            -----------------------------------------    <Carasol />



            <section className="home" >

                <div className="home1-img ">

                    <img src={worldMap} alt="" />

                </div>
                <div className="home-text">
                    <h1>Luxor All</h1>
                    <h1>Around The World</h1>
                    {/* <h2>Frontend Developer</h2> */}
                    <p>Luxor is a pioneer and a brand leader in the writing instrument industry
                        with a significant presence in the international market. Luxor is exporting
                        products to more than 106 countries across the globe including USA,
                        Australia, Russia, UK, Europe, UAE and many other markets. Our range of
                        products include - Kids Markers, Highlighters, Eco-friendly Stationeries,
                        O‹ce & Personal Stationeries.</p>
                    <a href="#" className="btn-bg">Explore</a>
                </div>

            </section>

            <section className='launch'>
                <div class="heading">
                    

                        <div style={{
                            display:'flex',
                            width:"100vw",
                       alignItems:"center",
                            justifyContent:"center",
                        }}>
                        

                                <span  className='new_launch_marker' style={{  
                                                position:"relative",
                                                width: "100px",
                                                zIndex:"1"
                                        }} >  
             
                        <div className='pen_marker_line'  >
                        <img src={marker_pen} width={200} 
                            style={{
                                position:"relative",
                            }} className='marker_marks'/>

                            </div>
                            
                                            </span>

                        <h3 className='new_launch '>

                          
                         
                      
                         New Launches
                        </h3>


                             
                        </div>
                      

                </div>
                <div className='carouselItem'>
                    <div className='posterBlock1' 
                           onMouseEnter={(e)=>  drawPen(".posterBlock1" , ".posterBlock1 img" ,  '.marker_line1' , "red")}
                                 onMouseLeave={() =>removeDrawPen(".posterBlock1" , ".posterBlock1 img" , '.marker_line1' , "white" ) }
                    >
                        <img src="https://luxorpen.com/images/bp/xonox-bp/black-m.jpg" />
                        <div className='textBlock'>
                        <div className='marker_line1'> </div>
                            <span className='title'>
                                Ball / Gell Pens

                            </span>
                        </div>

                    </div>

 
                    <div className='posterBlock2'
                                onMouseEnter={(e)=>  drawPen(".posterBlock2" , ".posterBlock2 img" , '.marker_line2' , "green")}
                                 onMouseLeave={() =>removeDrawPen(".posterBlock2" , ".posterBlock2 img" ,'.marker_line2' , "white" ) }
                    >
                        <img src="	https://luxorpen.com/images/hl/textliter-hl/text-li-green-m.jpg" />
                        <div className='textBlock'>
                        <div className='marker_line2'> </div>
                            <span className='title'>
                                Highliter
                            </span></div>
                    </div>
                    <div className='posterBlock3'
                     onMouseEnter={(e)=>  drawPen(".posterBlock3" , ".posterBlock3 img" , '.marker_line3' , "blue")}
                                 onMouseLeave={() =>removeDrawPen(".posterBlock3" , ".posterBlock3 img" ,'.marker_line3' , "white" ) }
                             >
                        <img src="https://luxorpen.com/images/wb/wb-450/wb450-blue.jpg" />
                        <div className='textBlock'>
                        <div className='marker_line3'> </div>
                            <span className='title'>
                                White Board Markers
                            </span></div>
                    </div>
                    <div className='posterBlock4'
            onMouseEnter={(e)=>  drawPen(".posterBlock4" , ".posterBlock4 img" , '.marker_line4' ,  "black")}
                                 onMouseLeave={() =>removeDrawPen(".posterBlock4" , ".posterBlock4 img" ,'.marker_line4' , "white" ) }
                    >
                        <img src="	https://luxorpen.com/images/pm/pm-1222/pm1222-blue.jpg" />
                        <div className='textBlock'>
                        <div className='marker_line4'> </div>
                            <span className='title'>
                                Permanent Markers
                            </span></div>
                    </div>

                </div>
            </section>

            <section>
                <div className='products'>
                    <div className='prodBackground'>
                        <div class="heading1">
                            <h2>Products</h2>
                        </div>
                    </div>
                    <div class="product-container">

                      <div className='prd-1'>

                      <div class="product-box"    onMouseEnter={()=> visibleProduct(".my_image1" ,".prd_img_hover1" , 'prd-1') }
                                 onMouseLeave={()=> HiddenVisibleProduct(".my_image1" ,".prd_img_hover1" ,"prd-1")} >
                            <h3>SCHOOL</h3>
                            <div className='product-img'>
                                 <img src={Image1}  className="my_image1"      />
                                           <div className='prd_img_hover1' > 
                                                <img src={PrdImageOne} className='prd_image_one' />
                                             </div>
                             </div>
                        </div>

                         
                      </div>
                     

                      <div className='prd-2'>

                      <div class="product-box"    onMouseEnter={()=> visibleProduct(".my_image2" ,".prd_img_hover2" , 'prd-2') }
                                 onMouseLeave={()=> HiddenVisibleProduct(".my_image2" ,".prd_img_hover2" ,"prd-2")} >
                            <h3>ART</h3>
                            <div className='product-img'>
                            <img src={Image2} alt='my_image2' />
                                           <div className='prd_img_hover2' > 
                                                <img src={PrdImageTwo} className='prd_image_two' />
                                             </div>
                             </div>
                        </div>

                         
                      </div>


                      
                      <div className='prd-3'>

                            <div class="product-box"    onMouseEnter={()=> visibleProduct(".my_image3" ,".prd_img_hover3" , 'prd-3') }
                                        onMouseLeave={()=> HiddenVisibleProduct(".my_image3" ,".prd_img_hover3" ,"prd-3")} >
                                  <h3>OFFICE</h3>
                                    <div className='product-img'> 
                                     <img src={Image3} alt='my_image3' />
                                                <div className='prd_img_hover3' > 
                                                        <img src={PrdImageThree} className='prd_image_three' />
                                                    </div>
                                    </div>
                                </div>
                      </div>
                     

                    

                    </div>
                    <div className='product-btn'>
                        <a href="#" className="btn-box">All Products</a>
                    </div>

                </div>
            </section>

            <section className='exported'>
                <div class="heading">
                    <h2>Exported To Over 106+ Countries</h2>
                </div>
                <div className='home-container'>
                    <div className="homeImg ">

                        <img src={Image4} alt="" />

                    </div></div>

            </section>

            <section className='luxor-container'>
                <div class="heading">
                    <h2>Luxor’s Journey</h2>
                </div>
                <div className='home-container'>
                    <div className="homeImg-luxor ">

                        <img src={Image5} alt="" />

                    </div>
                </div>
            </section>


            <section className='luxor-container'>
                <div class="heading">
                    <h2 style={{
                        lineHeight: "80%",
                        color: "green",
                        fontSize: "55px"
                    }}>Let's Save The <br /><br />Environment With Luxor</h2>
                </div>
                <div className='home-container'>
                    <div className="homeImg-luxor ">
                        <p style={{
                            padding: "70px",
                            fontSize: "25px",
                            color: "rgba(61, 57, 59, 0.69)"
                        }}>

                            Evolution of humans has done nothing but harm to our planet, the number of non-biodegradable dumps we have
                            made is turning our planet hostile and non-biodegradable & plastic products are the prime reasons behind our
                            planet's vulnerability. Acknowledging the harm we have caused to our planet has made everyone quite aware & active
                            about following ways to endure a life without causing loss to our surroundings and therefore the demand for
                            eco-friendly products is on rise, especially in the international market.
                            <br />  <br />
                            Luxor International takes a step ahead with an e‘ort & aim to help our planet breathe well, by adding stationeries that
                            are made of recycled materials to our range of drawing and writing instruments

                        </p>
                    </div></div>

                <div className='enviro-img'>
                    <img src={Image6} style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }} alt='' />
                </div>
            </section>

            <div className='art-gallery'>
                <div className='Art_gallery_button' style={{ top: "40%" }}>
                </div>

                <img src={ArtGallery} style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                }} alt="" />

            </div>


            <section className='luxor-container'>
                <div class="heading">
                    <h2 style={{
                        lineHeight: "80%",
                        color: "red",
                        fontSize: "70px",
                        margin: "50px 0px"

                    }}>Look Book  </h2>
                </div>


                <div className='home-container'>
                    <div className="homeImg-luxor ">
                        <p style={{
                            padding: "70px",
                            fontSize: "25px",
                            color: "rgba(61, 57, 59, 0.69)"
                        }}>

                            <div style={{
                                display: "flex",
                                gap: "150px",
                            }}>
                                <ImageContainer src={I1} t1="up your presentation " t2="Game" />
                                <ImageContainer src={I2} t1="Spark your creativity with" t2="Luxor pens" />
                                <ImageContainer src={I3} t1="How to choose the  " t2="Best highlighter pen " />

                            </div>





                        </p>
                    </div></div>
            </section>





















            <section>

                <div className='ugc-book-suggest'>
                    <div className='ugc-img-cont'>
                        <img src={Image11} alt='' />
                    </div>

                    <div className='ugc-img-cont2'>
                        <img src={Image12} alt='' />
                    </div>

                    <div className='ugc-img-cont2'>
                        <img src={Image13} alt='' />
                    </div>
                </div>

            </section>

            {/* ---------------------------------------------organisation container---------------------------------------------- */}

            <section className='organisation-container'>

                <div className='org-heading'>
                    <h2>A Woman-Led Organization</h2>
                </div>

                <div className='org-main'>

                    <div className='org-img-cont'>
                        <div className='org-btn-cont'>
                            <div className='org-btn-1'>
                                <button>Photos</button>
                            </div>
                            <div className='org-btn-2'>
                                <button>Videos</button>
                            </div>
                        </div>
                        <div className='org-img-card'>
                            <img src={Image14} alt='' />
                        </div>

                        <div className='org-img-card'>
                            <img src={Image15} alt='' />
                        </div>

                        <div className='org-img-card'>
                            <img src={Image16} alt='' />
                        </div>
                    </div>
                </div>

            </section>

            {/* ----------------------------------------------about luxor-------------------------------------- */}

            <section className='about-luxor-container'>

                <div className='luxor-heading'>
                    <h2>What People Say About Luxor</h2>
                </div>

                <div className='client'>
                    <div className='client-detail'>
                        <div className='client-img'>
                            <div className='round-div'>
                                <img src={Client} alt='' />
                            </div>
                        </div>
                        <h3>John</h3>
                        <p>Director, GH Coms</p>
                    </div>

                    <div className='luxor-review'>
                        <h3>Client's Review</h3>
                        <p>Luxor has always been my ﬁrst choice when it comes to any stationery product.</p>
                        <p>Loved It. </p>
                        <i></i>
                    </div>
                </div>

                <div className='arrow-btn'>
                    <div className='arrow-btn-left'>
                        <button>+</button>
                    </div>

                    <div className='arrow-btn-left'>
                        <button>+</button>
                    </div>
                </div>

            </section>

            {/* ------------------------------------did you know section-------------------------------------- */}

            <section className='dyk-container'>

                <div className='dyk-banner'>
                    <div className='dyk-banner1'>
                        <img src={Image17} alt='' />
                    </div>
                </div>
                {/* -------------------------- */}
                <div className='dyk-scroll'>
                    <h4>Luxor products have a presence across more than 106 countries.</h4>

                    <div className='arrow-btn-left'>
                        <button></button>
                    </div>

                    <div className='arrow-btn-left'>
                        <button></button>
                    </div>
                </div>

            </section>

            {/* ----------------------------------------footer section------------------------------------------- */}

            <section className='footer'>
                <div className='footer-heading1'>
                    <h2>Be Our Partner/Reseller</h2>
                </div>

                <div className='partner-cont'>
                    <img src={Image18} alt='' />
                </div>

                <div className='footer-btn'>
                    <div className='footer-btn1'>
                        <button>Know More</button>
                    </div>
                    <div className='footer-btn2'>
                        <button>Register</button>
                    </div>
                </div>

                {/* --------------------------------- */}

                <div className='certi-heading'>
                    <h2>Certificates</h2>
                </div>

                <div className='background'>
                    <div className='back-img'>
                        <img src={Image26} alt='' />
                    </div>
                    <div className='certi-img-cont'>
                        <div className='certi-img-card'>
                            <img src={Image19} alt='' />
                        </div>

                        <div className='certi-img-card'>
                            <img src={Image20} alt='' />
                        </div>

                        <div className='certi-img-card'>
                            <img src={Image21} alt='' />
                        </div>

                        <div className='certi-img-card'>
                            <img src={Image22} alt='' />
                        </div>
                    </div>

                    {/* ----------------------------------- */}

                    <div className='award-heading'>
                        <h2>Awards &  Recognitions</h2>
                    </div>

                    <div className='award-img-cont'>

                        <div className='pen-pointer'>
                            <img src={Image27} alt='' />
                        </div>

                        <div className='award-img'>
                            <img src={Image23} alt='' />
                        </div>

                        <div className='award-img'>
                            <img src={Image24} alt='' />
                        </div>

                        <div className='award-img'>
                            <img src={Image25} alt='' />
                        </div>
                    </div>

                </div>

                {/* ------------------------------------- */}

                <div className='footer-copyright'>
                    <div className='copyright-para'>
                        <p>© Copyright Luxor 2023 | All rights reserved</p>
                    </div>

                    <div className='footer-icon'>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>

            </section>




        </>
    );
}

export default App;
