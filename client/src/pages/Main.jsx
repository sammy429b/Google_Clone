import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from "react-redux";
import Loader from '../components/Loader'
const Main = () => {

  const {textData, loading} = useSelector((state) => state.customerReducer);
  console.log(textData)
  return (
    <>
        <Header/>
        {loading ? (<Loader/>):
          (textData.map((data, index) => {
            return <Card key={index} source ={data.source} link={data.link} displayed_link={data.displayed_link} title={data.title} description={data.snippet} favicon={data.favicon}/>
          }))
        }
    </>
  )
}

export default Main