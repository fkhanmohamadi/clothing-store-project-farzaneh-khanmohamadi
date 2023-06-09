import React from 'react'

function ProductCart({product}) {
  return (
    <div key={product.id} className="group relative">
    <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img
        src={`http://localhost:3002/files/${product.image[0]}`}
        alt="product image"
        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
      </div>
      <p className="text-sm font-medium text-gray-900">{product.price}</p>
    </div>
  </div>
  )
}

export default ProductCart
