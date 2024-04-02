import React from 'react'

const Card = ({link, title, description, index}) => {
  return (
    <>
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 mt-5">
              <div key={index} className="max-w-xl mb-8">
                <div className="group">
                  <a
                    href={link}
                    className="text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    
                    {link}
                  </a>
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