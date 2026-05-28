import { first_list, second_list } from '../../components/banner/Banner'
import get1 from '../../assets/get1.png'
import get2 from '../../assets/get2.png'
import get3 from '../../assets/get3.png'
import get4 from '../../assets/get4.png'
import get5 from '../../assets/get5.png'
import get6 from '../../assets/get6.png'
import get7 from '../../assets/get7.png'
import get8 from '../../assets/get8.png'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import './Home.css'
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules'
import Meals from '../../components/meals/Meals';
import { Swiper, SwiperSlide } from 'swiper/react';

const Home = () => {
  const [meals, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(res => {
      setMeal(res.data.products);
      setLoading(false);
});
  }, []);
  if (loading) return <h2>Hello</h2>;
  return (
    <div className='home'>
      <header className='home-header'>
        <div className='ho-he-div1'>
          <p>Sign up and get 20% off to your first order. Sign Up Now</p>
          <p>X</p>
        </div>
        <div className='ho-he-div2'>
          <h2>SHOP.CO</h2>
          <nav>
            <ul>
            {first_list.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item}</p>
                </li>
              );
            })};
            </ul>
          </nav>
          <input type="text" placeholder='Search for products...' />
          <img src={get1} alt="" />
        </div>
      </header>
      <div className='home-div1'>
        <div className='ho-div1-div1'>
          <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2><br />
          <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p><br />
          <button>Shop Now</button><br /><br />
          <div className='ho-div1-div2'>
            {second_list.map((item, index) => {
              return (
                <div key={index}>
                  <h3>{item.h3}</h3>
                  <p>{item.p}</p>
                </div>
              );
            })};
          </div>
        </div>
        <img src={get2} alt="" /> 
      </div>
      <div className='home-div2'>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          modules={[Autoplay]}
          autoplay={{delay:2000}}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="left">VERSACE</div>
            <div className="right"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="left">ZARA</div>
            <div className="right"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="left">GUCCI</div>
            <div className="right"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="left">PRADA</div>
            <div className="right"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="left">Calvin Klein</div>
            <div className="right"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="left">UZUM</div>
            <div className="right"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="left">AMAZON</div>
            <div className="right"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="left">Mete</div>
            <div className="right"></div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
      <div className='home-div3'>
        <h2>NEW ARRIVALS</h2>
        <Swiper
          spaceBetween={150}
          slidesPerView={4}
          modules={[Autoplay]}
          autoplay={{delay:2000}}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className='ho-div3-div1'>
              <div>
                {meals.map(item => (
                  <Meals key={item.id} meal={item} />
                ))}
              </div>
              <div className="right">
                <h4>T-SHIRT WITH TAPE DETAILS</h4>
                <p>⭐⭐⭐⭐⭐ 4.5/5</p>
                <h3>$120</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div3-div1'>
              <div>
                {meals.map(item => (
                  <Meals key={item.id} meal={item} />
                ))}
              </div>
              <div className="right">
                <h4>SKINNY FIT JEANS</h4>
                <p>⭐⭐⭐⭐ 3.5/5</p>
                <h3>$240 $260 -20%</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div3-div1'>
              <div>
                {meals.map(item => (
                  <Meals key={item.id} meal={item} />
                ))}
              </div>
              <div className="right">
                <h4>CHECKERED SHIRT</h4>
                <p>⭐⭐⭐⭐⭐ 4.5/5</p>
                <h3>$180</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div3-div1'>
              <div>
                {meals.map(item => (
                  <Meals key={item.id} meal={item} />
                ))}
              </div>
              <div className="right">
                <h4>SLEEVE STRIPED T-SHIRT</h4>
                <p>⭐⭐⭐⭐⭐ 4.5/5</p>
                <h3>$130 $160 -30%</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div3-div1'>
              <div>
                {meals.map(item => (
                  <Meals key={item.id} meal={item} />
                ))}
              </div>
              <div className="right">
                <h4>SKINNY FIT JEANS</h4>
                <p>⭐⭐⭐⭐ 3.5/5</p>
                <h3>$240 $260 -20%</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div3-div1'>
              <div>
                {meals.map(item => (
                  <Meals key={item.id} meal={item} />
                ))}
              </div>
              <div className="right">
                <h4>SLEEVE STRIPED T-SHIRT</h4>
                <p>⭐⭐⭐⭐⭐ 4.5/5</p>
                <h3>$130 $160 -30%</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Link to={'/cate/:id'}>
          <button>View All</button>
        </Link>
      </div>
      <div className='home-div3'>
        <h2>TOP SELLING</h2>
        <Swiper
          spaceBetween={150}
          slidesPerView={4}
          modules={[Autoplay]}
          autoplay={{delay:2000}}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className='ho-div3-div1'>
              <div>
                {meals.map(item => (
                  <Meals key={item.id} meal={item} />
                ))}
              </div>
              <div className="right">
                <h4>VERTICAL STRIPED SHIRT</h4>
                <p>⭐⭐⭐⭐⭐ 5.0/5</p>
                <h3>$212 $232 -20%</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div3-div1'>
              <div>
                {meals.map(item => (
                  <Meals key={item.id} meal={item} />
                ))}
              </div>
              <div className="right">
                <h4>COURAGE GRAPHIC T-SHIRT</h4>
                <p>⭐⭐⭐⭐ 4.0/5</p>
                <h3>$145</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div3-div1'>
              <div>
                {meals.map(item => (
                  <Meals key={item.id} meal={item} />
                ))}
              </div>
              <div className="right">
                <h4>LOOSE FIT BERMUDA SHORTS</h4>
                <p>⭐⭐⭐ 3.0/5</p>
                <h3>$80</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div3-div1'>
              <div>
                {meals.map(item => (
                  <Meals key={item.id} meal={item} />
                ))}
              </div>
              <div className="right">
                <h4>FADED SKINNY JEANS</h4>
                <p>⭐⭐⭐⭐⭐ 4.5/5</p>
                <h3>$210</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div3-div1'>
              <div>
                {meals.map(item => (
                  <Meals key={item.id} meal={item} />
                ))}
              </div>
              <div className="right">
                <h4>SKINNY FIT JEANS</h4>
                <p>⭐⭐⭐⭐ 3.5/5</p>
                <h3>$240 $260 -20%</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div3-div1'>
              <div>
                {meals.map(item => (
                  <Meals key={item.id} meal={item} />
                ))}
              </div>
              <div className="right">
                <h4>SLEEVE STRIPED T-SHIRT</h4>
                <p>⭐⭐⭐⭐⭐ 4.5/5</p>
                <h3>$130 $160 -30%</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Link to={'/cate/:id'}>
          <button>View All</button>
        </Link>
      </div>
      <div className='home-div5'>
        <h2>BROWSE BY DRESS STYLE</h2>
        <div className='ho-div5-div1'>
          <div>
            <img className='ho-div5-img1' src={get5} alt="" />
            <img className='ho-div5-img2' src={get6} alt="" />
          </div>
          <div>
            <img className='ho-div5-img2' src={get7} alt="" />
            <img className='ho-div5-img1' src={get8} alt="" />
          </div>
        </div>
      </div>
      <div className='home-dv6'>
        <div className='ho-div6-div1'>
          <h2>OUR HAPPY CUSTOMERS</h2>
        </div>
        <div className='ho-div6-div2'>
        <Swiper
          spaceBetween={150}
          slidesPerView={3}
          modules={[Autoplay, Navigation]}
          autoplay={{delay:2000}}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className='ho-div6-div2-div'>
              <div className="left">
                <p>⭐⭐⭐⭐⭐</p>
                <h3>Jek.G</h3>
              </div>
              <div className="right">
                <p>"I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div6-div2-div'>
              <div className="left">
                <p>⭐⭐⭐⭐⭐</p>
                <h3>Sarah M.</h3>
              </div>
              <div className="right">
                <p>"I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div6-div2-div'>
              <div className="left">
                <p>⭐⭐⭐⭐⭐</p>
                <h3>Alex K.</h3>
              </div>
              <div className="right">
                <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div6-div2-div'>
              <div className="left">
                <p>⭐⭐⭐⭐⭐</p>
                <h3>James L.</h3>
              </div>
              <div className="right">
                <p>As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='ho-div6-div2-div'>
              <div className="left">
                <p>⭐⭐⭐⭐⭐</p>
                <h3>Mooen</h3>
              </div>
              <div className="right">
                <p>As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
      <div className='home-div7'>
        <div className='ho-div7-div1'>
          <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
          <div>
            <button>Enter your email address</button>
            <button>Subscribe to Newsletter</button>
          </div>
        </div>
        <div className='ho-div7-div2'>
          <div className='ho-div7-div3'>
            <div className='ho-div7-div5'>
              <h2>SHOP.CO</h2><br />
              <p>We have clothes that suits your style and which you're proud to wear. From women to men.</p><br />
              <img src={get3} alt="" />
            </div>
            <div>
              <h3>COMPANY</h3><br />
              <p>About <br /> Features <br /> Works <br /> Career</p>
            </div>
            <div>
              <h3>HELP</h3><br />
              <p>Customer Support <br /> Delivery Details <br /> Terms & Conditions <br /> Privacy Policy</p>
            </div>
            <div>
              <h3>FAQ</h3><br />
              <p>Account <br /> Manage Deliveries <br /> Orders <br /> Payments</p>
            </div>
            <div>
              <h3>RESOURCES</h3><br />
              <p>Free eBooks <br /> Development Tutorial <br /> How to - Blog  <br /> Youtube Playlist</p>
            </div>
          </div>
          <div className='ho-div7-div4'>
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <img src={get4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;