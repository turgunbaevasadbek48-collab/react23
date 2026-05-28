import { first_list, eight_list, nine_list, ten_list, tvelf_list } from '../../components/banner/Banner'
import get1 from '../../assets/get1.png'
import get3 from '../../assets/get3.png'
import get4 from '../../assets/get4.png'
import get10 from '../../assets/get10.png'
import React from 'react'
import './Category.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules'
import Meals from '../../components/meals/Meals';
import { Swiper, SwiperSlide } from 'swiper/react';

const Category = () => {
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
    <div className='category'>
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
      <div className='cate-banner'>
        <div className='ca-ba-div1'>
          <div className='ca-ba-div2'>
            <h2>Filters</h2><br />
            <nav>
              <ul>
              {eight_list.map((item, index) => {
                return (
                  <li key={index}>
                    <a>{item}</a>
                  </li>
                );
              })};
            </ul>
          </nav><br />
          </div>
          <div className='ca-ba-div3'>
            <h2>Price</h2><br />
            <img src={get10} alt="" />
          </div><br />
          <div className='ca-ba-div4'>
            <h2>Colors</h2><br />
            <nav>
              <ul>
                <li>
                  <div className='ca-ba-div4-div1'></div>
                </li>
                <li>
                  <div className='ca-ba-div4-div2'></div>
                </li>
                <li>
                  <div className='ca-ba-div4-div3'></div>
                </li>
                <li>
                  <div className='ca-ba-div4-div4'></div>
                </li>
                <li>
                  <div className='ca-ba-div4-div5'></div>
                </li>
              </ul>
              <ul>
                <li>
                  <div className='ca-ba-div4-div6'></div>
                </li>
                <li>
                  <div className='ca-ba-div4-div7'></div>
                </li>
                <li>
                  <div className='ca-ba-div4-div8'></div>
                </li>
                <li>
                  <div className='ca-ba-div4-div9'></div>
                </li>
                <li>
                  <div className='ca-ba-div4-div10'></div>
                </li>
              </ul>
            </nav>
          </div><br />
          <div className='ca-ba-div5'>
            <h2>Size</h2><br />
            <nav>
              <ul>
              {nine_list.slice(0,10).map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                );
              })};
            </ul>
          </nav>
          </div><br />
          <div className='ca-ba-div6'>
            <h2>Dress Style</h2><br />
            <nav>
              <ul>
              {ten_list.map((item, index) => {
                return (
                  <li key={index}>
                    <a>{item}</a>
                  </li>
                );
              })};
            </ul>
          </nav>
            <button>Apply Filter</button>
          </div>
        </div>
        <div className='ca-ba-div7'>
          <div className='ca-ba-div8'>
            <h2>Casual</h2>
            <p>Showing 1-10 of 100 Products Sort by: Most Popular V</p>
          </div>
          <div className='ca-ba-div9'>
            {tvelf_list.slice(0,10).map((item, index) => {
              return (
                <div key={index}>
                  <Link to={`/cart/:id`} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMJom5Z3D308Zg7rRR4dUDLuQEVkObnmqmg&s" alt="" />
                  </Link>
                  <h3>{item.h3}</h3>
                  <p>{item.p}</p>
                  <h2>{item.h2}</h2>
                </div>
              );
            })};
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

export default Category;
