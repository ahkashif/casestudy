import React from 'react'

const Banner = (props) => {
  const { alignment, category } = props;
  return (
    <div key={category.id} className={`banner ${alignment === 'reverse' ? 'reverse' : ''}`}>
      <div className="banner__imgWrapper">
        <img src={`http://localhost:3000${category.imageUrl}`} alt="" />
      </div>
      <div className="banner__descriptionWrapper">
        <h3 className="banner__heading">{category.name}</h3>
        <p className="banner__description">{category.description}</p>
        <button className="banner__exploreButton">{`Explore ${category.name}`}</button>
      </div>
    </div>
  )
}

export default Banner;