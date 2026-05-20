import React from 'react'
import { Link } from 'react-router-dom'

function PropertyCard({property}) {
  return (
    <Link to={`/properties/${property?.id}`}
    className='block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
        <img src={property.image} alt={property.title} 
        className='w-full h-48 object-cover'/>
        <div className='p-5'>
            <div className='flex flex-start justify-between gap-2 mb-2'>
                <h3>{property.title}</h3>
            </div>
        </div>
    </Link>
  )
}

export default PropertyCard