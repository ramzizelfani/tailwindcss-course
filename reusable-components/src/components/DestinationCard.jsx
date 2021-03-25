import React from 'react';

export default function DestinationCard({ destination }) {
  const { city, averagePrice, propertyCount, imageUrl, imageAlt } = destination;
  return (
    <div className='flex items-center rounded-lg bg-white shadow-lg overflow-hidden'>
      <img src={imageUrl} alt={imageAlt} className='h-32 w-32 flex-shrink-0' />
      <div className='px-6 py-4'>
        <h3 className='text-lg font-semibold text-gray-800'>{city}</h3>
        <p className='text-gray-600'>${averagePrice} / night average</p>
        <div className='mt-4'>
          <a
            href='#'
            className='text-indigo-500 hover:text-indigo-400 font-semibold text-sm'
          >
            Explore {propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  );
}
