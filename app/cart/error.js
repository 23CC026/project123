
'use client'

import React from 'react';
import Image from 'next/image';

const error = ({error}) => {
  return (
    <div className='h-[80vh] w-full justify-center align-center flex flex-col'>
        <div className='m-auto'>
          <Image
            src='cartFailure.png'
            alt='Error loading cart'
            className='h-[200px] w-[200px]'
            width={200}
            height={200}
          />
          <h1 className='font-bold text-2xl m-5'>Error in loading cart</h1>
        </div>
    </div>
  )
}

export default error