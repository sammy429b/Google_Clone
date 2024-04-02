import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from "react-redux";
const Main = () => {

  const {textData, imageData} = useSelector((state) => state.customerReducer);
  console.log(textData)
  return (
    <>
        <Header/>
        {
          textData.map((data, index) => {
            return <Card key={index} link={data.link} title={data.title} description={data.snippet}/>
          })
        }
        {
          imageData.map((data, index) => {
            return <Card key={index} link={data.link} title={data.title} description={data.snippet}/>
          })
        }
        <Card/>
    </>
  )
}

export default Main