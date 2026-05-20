import React, { useEffect, useState } from 'react'
import { getAllProperties } from '../services/properties';
import PropertyCard from '../components/PropertyCard';

function Properties() {
  const [properties,setProperties]=useState("");
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");

  useEffect(()=>{
    getAllProperties()
    .then((data)=>{
      setProperties(data);
      setLoading(false);
    }).catch((error)=>{
      setError(error || "failed to load properties")
    })
  },[])
  return (
    <main className='px-8 py-10'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold'>All properties</h1>
      <p>We have {properties.length} properties</p>

      {loading &&
      <div>Loading...</div>
      }
      {error &&
      <p className='rounded-sm bg-red-500'>
        {error}
      </p>
      }
      {!loading && !error && properties.length === 0 &&
      <p>No properties</p>
      }
      {!loading && !error && properties.length > 0 &&
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          properties.map((property)=>(
            <PropertyCard property={property} key={property.id}/>
          ))
        }
      </div>
      }
      </div>
      
    </main>
  )
}

export default Properties