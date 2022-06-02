import React from 'react';
import { useContext } from "react";
import { CategoriesContext } from "../../App";

const Sidebar = (props) => {
  const categoriesData  = useContext(CategoriesContext);

  return (
    <div className='sidebar'>
      <ul className='sidebar__list'>
        {
          categoriesData.map(category => {
            return <li className='sidebar__listItem' key= {category.id} data-id={category.id}><span onClick={props.filterBy} data-id={category.id}>{category.name}</span></li>
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar
