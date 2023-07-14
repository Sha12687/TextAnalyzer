import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Menu from './MenuApi.js'
import MenuCard from './MenuCard';
import Navbar from './Navbar';
const Resturant = () => {
    const[menuData,setMenuData]=useState(Menu);
     const uniqueList=[...new Set(Menu.map((curEle)=>{
      return curEle.category;
     })),"All"];
     const[menuList,SetMenuList]=useState(uniqueList);
    const filterItem=(category)=>{
      if(category==="All"){
        console.log("ALL")
      setMenuData(Menu);}
      else{
      const updateList=Menu.filter((currentItem)=>{
        console.log(currentItem);
      return  currentItem.category===category;
      });

      setMenuData(updateList);
    }
    }
  return (
  <>
 <Navbar filterItem={filterItem} uniqueList={uniqueList}/>
  <MenuCard menuData={menuData} />
  </>
  )
}

export default Resturant