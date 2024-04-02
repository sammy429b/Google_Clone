import React from 'react'

const Card = ({ link, title, description, index, displayed_link, favicon, source }) => {
  return (
    <>
      <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 mt-5">
        <div key={index} className="max-w-xl mb-8">
          <div className="group">
            <div className='flex items-center gap-x-2'>
              <div className='h-8 w-8 rounded-2xl flex justify-center items-center'>
                <img
                  src={favicon}
                  alt="favicon"
                  className="h-6 w-6"
                />
              </div>
              <div>
                <h2 className='font-medium'>{source}</h2>
                <a
              href={link}
              className="text-sm"
              target="_blank"
              rel="noreferrer"
            >

              {displayed_link}
            </a>
              </div>
            </div>
            
            <a href={link} target="_blank" rel="noreferrer">
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                {title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{description}</p>
        </div>
      </div>
    </>
  )
}

export default Card