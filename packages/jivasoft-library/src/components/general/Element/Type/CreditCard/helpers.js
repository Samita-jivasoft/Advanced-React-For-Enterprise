

import { FaCcAmex, FaCcMastercard, FaCcVisa, FaCreditCard } from "react-icons/fa"
import React, { useEffect, useState } from "react"


export function getCreditCardDecorators (value){

    switch (value) {
      case '3':
        return <div style={{
          zIndex:30,
          position:'absolute',
          color:'#002663',marginLeft:5,
          display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2rem'}}><FaCcAmex/></div>
      case '4':
        return <div style={{
          zIndex:30,

          position:'absolute',
         marginLeft:5,
         display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2rem'}}><FaCcVisa/></div>
      case '5':
        return <div style={{
          zIndex:30,

          position:'absolute',
          marginLeft:5,
       display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2rem'}}><FaCcMastercard/></div>
      default:
        return <div style={{
          zIndex:30,

          position:'absolute',
          marginLeft:5,
          color:'grey',
     display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2rem'}}><FaCreditCard/></div>
    }
}