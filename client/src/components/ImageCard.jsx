import React from 'react';

const ImageCard = ({ imageLink, link, width, height, title, source, logo }) => {
  // Trim the title to a maximum length of 20 characters
  const trimmedTitle = title.length > 20 ? title.slice(0, 20) + '...' : title;

  return (
    <div className='w-[40dvh] h-[40dvh] m-1 border'>
      <div className='h-[30dvh] w-[40dvh]'>
        <img src={imageLink} className='w-full object-fill' alt="Image" />
      </div>
      <div>
        <div className='flex items-center gap-x-2'>
          <img src={logo} className='w-6' alt="" />
          <a href={link} target='_blank' className='hover:underline'>{source}</a>
        </div>
        <div>
          <a  href={link} target='_blank' className='font-semibold overflow-hidden'>{trimmedTitle}</a>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
