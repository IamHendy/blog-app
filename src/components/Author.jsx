import React from 'react';
import Image from 'next/image';

const Author = ({author}) => {
  return (
    <div className='text-center mt-20 p-12 mb-8  relative rounded-lg bg-white bg-opacity-10'>
      <div className='absolute left-0 right-0 -top-14'>
      <img 
        src={author.photo.url}
        alt={author.name}
        unoptimized
        height="100px"
        width="100px"
        className='aligh-middle rounded-full' />
      </div> 
      <h3 className='text-white mt-4 mb-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-ls'>{author.bio}</p>
       
    </div>
  )
}

export default Author
