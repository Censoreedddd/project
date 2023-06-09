import React from 'react'
import Nikeshoes from "../produit"
const Nike = () => {
    console.log(Nikeshoes)
  return (
    <div><main className="container">
    <section className="card">
      <div className="product-image">
        <img src={Nikeshoes.img} alt="OFF-white Red Edition" draggable="false" />
      </div>
      <div className="product-info">
        <h2>{Nikeshoes.Name}</h2>
        <p>{Nikeshoes.describe}</p>
        <div className="price">{Nikeshoes.Price}</div>
      </div>
      <div className="btn">
        <button className="buy-btn">Buy Now</button>
        <button className="fav">
          <svg className="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
          </svg>
        </button>
      </div>
    </section>
  
  </main></div>
  )
}

export default Nike