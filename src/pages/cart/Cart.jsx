import axios from 'axios';
import { first_list } from '../../components/banner/Banner'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules'
import Meals from '../../components/meals/Meals';
import { Swiper, SwiperSlide } from 'swiper/react';
import get1 from '../../assets/get1.png'
import get3 from '../../assets/get3.png'
import get4 from '../../assets/get4.png'
import get11 from '../../assets/get11.png'
import React from 'react'
import './Cart.css'

const Cart = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
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
    <div className='cart'>
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
      <div className='cart-div1'>
        <h2>YOUR CART</h2>
        <div className='cart-div2'>
          <div className='cart-div3'>
            <div className='cart-div3-div'>
              <img className='cart-div3-img' src='https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp' alt="" />
              <div className='cart-div3-div1'>
                <h4>Gradient Graphic T-shirt</h4>
                <p>Size: Large</p>
                <p>Color: White</p>
                <h3>$145</h3>
              </div>
              <div className='cart-div3-div2'>
                <img src={get11} alt="" />
                <button className='pro-div1-div7-btn1'><p onClick={() => setCount1((count1) => count1 - 1)}>-</p><p>{count1}</p> <p onClick={() => setCount1((count1) => count1 + 1)}>+</p></button>
              </div>
            </div>
            <div className='cart-div3-div'>
              <img className='cart-div3-img' src='https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp' alt="" />
              <div className='cart-div3-div1'>
                <h4>CHECKERED SHIRT</h4>
                <p>Size: Medium</p>
                <p>Color: Red</p>
                <h3>$180</h3>
              </div>
              <div className='cart-div3-div3'>
                <img src={get11} alt="" />
                <button className='pro-div1-div7-btn1'><p onClick={() => setCount2((count2) => count2 - 1)}>-</p><p>{count2}</p> <p onClick={() => setCount2((count2) => count2 + 1)}>+</p></button>
              </div>
            </div>
            <div className='cart-div3-div'>
              <img className='cart-div3-img' src='https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp' alt="" />
              <div className='cart-div3-div1'>
                <h4>SKINNY FIT JEANS</h4>
                <p>Size: Large</p>
                <p>Color: Blue</p>
                <h3>$240</h3>
              </div>
              <div className='cart-div3-div4'>
                <img src={get11} alt="" />
                <button className='pro-div1-div7-btn1'><p onClick={() => setCount3((count3) => count3 - 1)}>-</p><p>{count3}</p> <p onClick={() => setCount3((count3) => count3 + 1)}>+</p></button>
              </div>
            </div>
          </div>
          <div className='cart-div4'>
            <h2>Order Summary</h2>
            <div>
              <p>Subtotal</p>
              <h3>$565</h3>
            </div>
            <div>
              <p>Discount (-20%)</p>
              <h3>-$113</h3>
            </div>
            <div>
              <p>Delivery Fee</p>
              <h3>$15</h3>
            </div>
            <div>
              <p>Total</p>
              <h3>$467</h3>
            </div>
            <div>
              <input type="text" placeholder='Add promo code' />
              <button>Apply</button>
            </div>
            <button>Go to Checkout</button>
          </div>
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

export default Cart
