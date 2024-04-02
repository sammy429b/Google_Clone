import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from "react-redux";
import Loader from '../components/Loader'
const Main = () => {

  const {textData, imageData, loading} = useSelector((state) => state.customerReducer);
  console.log(textData)
  return (
    <>
        <Header/>
        {loading ? (<Loader/>):
          (textData.map((data, index) => {
            return <Card key={index} source ={data.source} link={data.link} displayed_link={data.displayed_link} title={data.title} description={data.snippet} favicon={data.favicon}/>
          }))
        }
        {/* { loading ? (<Loader/>):
          (imageData.map((data, index) => {
            return <Card key={index} link={data.link} title={data.title} description={data.snippet}/>
          }))
        } */}
        <Card/>
    </>
  )
}

export default Main