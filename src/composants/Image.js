import React from 'react'

export default function Image({imageUrl }) {
  return (
    <div>
        <img src={imageUrl} alt="Product" style={{ width: '100%' }} />;
    </div>
  )
}
