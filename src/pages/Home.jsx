import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Home.css';
import infoImage from '../assets/Img_004.jpg';
const Home = () => {
    const [slides, setSlides] = useState({ Details: [] });

    useEffect(() => {
        fetch('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details')
            .then(res => res.json())
            .then(data => {
                if (data.Status === "1" && data.Details) {
                    setSlides(data);
                }
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {slides.Details.map((item, index) => (
                    <SwiperSlide key={index} className="slide">
                        <img src={item.ImageUrl} alt={item.Title} className="slide-image" />
                        <div className="slide-content">
                            <h3>{item.Title}</h3>
                            <p>{item.Subtitle}</p>
                            <button className="sign-in-btn">Contact us</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <section className="info-row">
                <div className="info-text">
                    <h2>Justo petentium te vix, scripta regione urbanitas</h2>
                    <p>
                        Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne.
                        Ferri euismod accusata te nec, summo accumsan at vix. Ad vix legere impetus, nam consequat
                        reformidans ut. No sit consul integre voluptatibus, omnium lucilius ne mel. Et ancillae
                        recteque deterruisset sed, ea nec odio option, ferri assum eum et.
                    </p>
                    <ul>
                        <li>Te pri efficiendi assueverit, id molestie suavitate per</li>
                        <li>Te nam dolorem rationibus repudiandae, ne ius falli aliquip consetetur</li>
                        <li>Ut qui dicant copiosae interpretaris</li>
                        <li>Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant</li>
                    </ul>
                    <button className="learn-more-btn">Learn more</button>
                </div>
                <div className="info-image">
                    <img src={infoImage} alt="Info Section" />
                </div>
            </section>

            <section className="background-row">
                <div className="background-overlay">
                    <h2>Nulla sem urna, dictum sed nisi in, viverra rutrum neque</h2>
                    <p>
                        Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec finibus nulla quis lorem mollis lacinia. Fusce ut arcu ligula. Pellentesque augue ex, pellentesque ut maximus non, eleifend ut lorem. Vestibulum rutrum malesuada turpis,
                        molestie mattis velit maximus ac. Quisque iaculis hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat fringilla in sed diam.
                    </p>
                    <button className="login-btn">Log in</button>
                </div>
            </section>
            <div className='mid-section'>
            <h2>Justo petentium te vix, scripta regione urbanitas</h2>
            <p>Taria duo ut vis semper abhorreant</p>
            </div>
            <section className="three-cols-row">
                
                <div className="col">
                    <p>
                        Pellentesque ac condimentum felis. Suspendisse vel suscipit dolor, nec laoreet nulla.
                        Nam auctor ultricies dapibus. Donec ac interdum dui, quis finibus lectus. Cras in ultrices neque.
                        Curabitur eget turpis iaculis diam congue sagittis a vel ligula. Mauris ut arcu ex.
                        Nullam quis orci ante. Nunc felis massa, posuere non gravida in, commodo in arcu.
                        In feugiat magna non volutpat faucibus. Nam aliquam justo nec aliquam iaculis.
                        Integer laoreet pulvinar elit pulvinar fermentum. Morbi vehicula sodales nunc ac varius.
                        Proin porttitor porttitor libero vel pharetra. Cras sit amet dapibus magna.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                    </p>
                </div>

                <div className="col">
                    <p>
                        Ridiculus mus. Donec finibus nulla quis lorem mollis lacinia. Fusce ut arcu ligula.
                        Pellentesque augue ex, pellentesque ut maximus non, eleifend ut lorem.
                        Vestibulum rutrum malesuada turpis, molestie mattis velit maximus ac.
                        Quisque iaculis hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat fringilla in sed diam.
                        Suspendisse tristique vel dui nec imperdiet. Cras mattis ligula quis fermentum suscipit.
                        Proin et elementum arcu, sit amet porttitor diam. Curabitur euismod, erat vitae tristique volutpat,
                        augue lectus dignissim justo, at faucibus orci est a elit. Sed sed sapien pretium, maximus felis vel,
                        mollis elit. Sed libero justo, lobortis sit amet suscipit non, auctor non
                    </p>
                    <div className='cnt-us'>
                    <button className="contact-btn">Contact Us</button>
                    </div>
                    
                </div>

                <div className="col">
                    <p>
                        Libero. Maecenas quis nisl eget enim porta blandit a nec sapien. Mauris porttitor lorem ut egestas euismod.
                        Donec molestie tempor nibh, nec venenatis arcu ullamcorper sit amet. Nulla facilisi.
                        Proin cursus neque ut tortor scelerisque, at iaculis nunc ornare. Pellentesque non nunc nulla.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean et sodales diam.
                        ullamcorper sit amet. Nulla facilisi. Proin cursus neque ut tortor scelerisque, at iaculis nunc ornare.
                        Pellentesque non nunc nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Aenean et sodales diam
                    </p>
                </div>
            </section>



        </>

    );
};

export default Home;
