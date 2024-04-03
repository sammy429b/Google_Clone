import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from "react-redux";
import Loader from '../components/Loader'
import ImageCard from '../components/ImageCard';
const Images = () => {

  const {imageData, loading} = useSelector((state) => state.customerReducer);
  console.log(imageData)
  return (
    <>
        <Header/>
        <div className='w-full flex flex-wrap gap-x-4'>

        {loading ? (<Loader/>):
          (imageData ? 
            imageData.map((data, index) => {
              return <ImageCard imageLink={data.original} link={data.link} width={data.original_width} height={data.original_height} title={data.title} source={data.source} logo={data.source_logo}/>
            })
            : <h1>No data found</h1>
          )
        }
        </div>
    </>
  )
}

export default Images