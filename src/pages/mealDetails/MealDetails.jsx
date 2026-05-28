import { first_list, six_list } from '../../components/banner/Banner'
import get1 from '../../assets/get1.png'
import get3 from '../../assets/get3.png'
import get4 from '../../assets/get4.png'
import get9 from '../../assets/get9.png'
import 'swiper/css';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation } from 'swiper/modules'
import Meals from '../../components/meals/Meals';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import './MealDetails.css'

const MealDetails = () => {
  const { id } = useParams();
  const [count, setCount] = useState(0)
  const [meal, setMeal] = useState(null);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(res => setMeal(res.data));
  }, [id]);
  if (!meal) return <h2>Hello</h2>;
  return (
    <div className='product'>
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
      <div className='product-div1'>
        <div className='pro-div1-div1'>
          <div className='pro-div1-div2'>
            <img src={meal.images} alt="" />
            <img src={meal.images} alt="" />
            <img src={meal.images} alt="" />
          </div>
          <div className='pro-div1-div3'>
            <img src={meal.thumbnail} alt="" />
          </div>
        </div>
        <div className='pro-div1-div4'>
          <h2>ONE LIFE GRAPHIC T-SHIRT</h2>
          <h4>⭐⭐⭐⭐⭐ <span>4.5/5</span></h4>
          <h3>$260 $300 -40%</h3>
          <br />
          <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p><br /><br />
          <div className='pro-div1-div5'>
            <p>Select Colors</p>
            <img src={get9} alt="" />
          </div><br />
          <div className='pro-div1-div6'>
            <p>Choose Size</p>
            <div>
              <p>Small</p>
              <p>Medium</p>
              <p>Large</p>
              <p>X-Large</p>
            </div>
          </div><br />
          <div className='pro-div1-div7'>
            <button className='pro-div1-div7-btn1'><p onClick={() => setCount((count) => count - 1)}>-</p><p>{count}</p> <p onClick={() => setCount((count) => count + 1)}>+</p></button>
            <button className='pro-div1-div7-btn2'>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className='product-div2'>
        <div className='pro-div2-div1'>
          <p>Product Details</p>
          <p>Rating & Reviews</p>
          <p>FAQs</p>
        </div><br /><br />
        <div className='pro-div2-div2'>
          <h2>All Reviews <span>(450)</span> </h2>
          <div>
            <button className='pro-div2-div2-btn1'>#</button>
            <button className='pro-div2-div2-btn1'>Latest v</button>
            <button className='pro-div2-div2-btn2'>Write a Review</button>
          </div>
        </div>
        <div className='pro-div2-div3'>
          {six_list.slice(0,10).map((item, index) => {
            return (
              <div>
                <p>{item.p1}</p>
                <h3>{item.h3}</h3>
                <p>{item.p2}</p>
                <br />
                <p>{item.p3}</p>
              </div>
            );
          })};
        </div>
        <Link to={'/cate/:id'}>
          <button className='pro-div2-div2-btn3'>Load More Reviews</button>
        </Link>
      </div>
      <div className='home-div3'>
        <h2>YOU MIGHT ALSO LIKE</h2>
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
              <div className="left">
                <img src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp" alt="" />
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
              <div className="left">
                <img src="https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp" alt="" />
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
              <div className="left">
                <img src="    https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp" alt="" />
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
              <div className="left">
                <img src="" alt="" />
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
              <div className="left">
                <img src="https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp" alt="" />
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
              <div className="left">
                <img src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp" alt="" />
              </div>
              <div className="right">
                <h4>SLEEVE STRIPED T-SHIRT</h4>
                <p>⭐⭐⭐⭐⭐ 4.5/5</p>
                <h3>$130 $160 -30%</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
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

export default MealDetails;