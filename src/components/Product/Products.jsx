import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const coleslaw = {
  id: 1,
  img: "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title: "Parfait",
  price: 400,
  isAvailable: true,
};
const pasta = {
  id: 2,
  img: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title: "Burger & Fries",
  price: 80,
  isAvailable: true,
};
const pancakes = {
  id: 3,
  img: "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title: "Vegetable Salad",
  price: 150,
  isAvailable: false,
};
const amala = {
  id: 4,
  img: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title: "Steak",
  price: 500,
  isAvailable: true,
};

const semo = {
  id: 5,
  img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title: "French Fries",
  price: 50,
  isAvailable: true,
};

const yam = {
  id: 6,
  img: "https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title: "Kebab",
  price: 600,
  isAvailable: true,
};

const rice = {
  id: 7,
  img: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title: "Pizza",
  price: 250,
  isAvailable: true,
};

const beans = {
  id: 8,
  img: "https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title: "Cupcakes",
  price: 100,
  isAvailable: true,
};

const specials = [coleslaw, pasta, pancakes, amala, semo, yam, rice, beans];

export const Products = () => {
  return (
    <div className="products-container">
     
      <div className="product-meal-container">
        {specials.map((s) => (
          <div style={{marginBottom: "40px", marginRight: "20px"}} key={s.id}>
            <img src={s.img} alt="" />
            <div className="product-meal-text">
              <div className = "cart-container">
              <div className="cart-info">
                <p>{s.title}</p>
                <span
                  style={{
                    color: "#222",
                  }}
                >
                  Price: ${s.price}
                </span>
              </div >
              <a href="/product"><span style={{marginRight:"10px"}}>Add to Cart</span><FontAwesomeIcon icon={faShoppingCart} />
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
