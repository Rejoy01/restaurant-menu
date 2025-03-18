import React from 'react'
import "./HomePage.css"
import { useState } from 'react';
import { menuData } from '../Data/MenuData';
import Menuitem from '../components/Menuitem/Menuitem';

const Homepage = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredMenu =
      selectedCategory === "All"
        ? menuData.flatMap(category => category.items)
        : menuData.find(category => category.category === selectedCategory)?.items || [];
  
    return (
        <div className="container py-5"
         style={{ backgroundImage: "url('/images/banana_leaf.jpg')", backgroundSize: "cover", borderRadius: "10px" }}>
    
        <h1 className="text-center mb-4 text-light fw-bold text-shadow">Kerala Style Restaurant Menu</h1>
        
        <div className="d-flex flex-wrap justify-content-center mb-4">
          <div className="w-100 d-flex justify-content-center mb-2">
            { ["All", "Breakfast", "Lunch"].map(category => (
              <button
                key={category}
                className={`btn btn-outline-light mx-2 menu-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            )) }
          </div>
          <div className="w-100 d-flex justify-content-center">
            { ["Dinner", "Juices and Shakes", "Tea and Snacks"].map(category => (
              <button
                key={category}
                className={`btn btn-outline-light mx-2 menu-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            )) }
          </div>
        </div>
        
        <div className="row">
          {filteredMenu.map((item, idx) => (
            <Menuitem key={idx} item = {item} index ={idx} />
          ))}
        </div>
      </div>
    );
}

export default Homepage
