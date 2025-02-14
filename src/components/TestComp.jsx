import React from 'react'
import PackagingTemplate from './PackagingTemplate'
const packagingData = {
    title: 'Packaging Solutions',
    description: 'Explore our wide range of eco-friendly and durable packaging solutions.',
    imageUrl: '/printshop-website/assets/paperbag.jpg',
    products: [
      {
        name: 'Polypropylene Bags',
        description: 'Ideal for shipping, retail packaging, or high-end product presentation.',
        color: 'blue',
      },
      {
        name: 'Non-woven Bags',
        description: 'Popular for shopping, promotional giveaways, or eco-friendly packaging solutions.',
        color: 'red',
      },
      {
        name: 'Tote Bags',
        description: 'Perfect for retail and grocery stores looking to promote sustainable practices.',
        color: 'orange',
      },
      {
        name: 'Paper Bags',
        description: 'Perfect for carrying groceries, fashion items, takeout food, and promotional materials.',
        color: 'blue',
      },
      {
        name: 'Packaging Boxes',
        description: 'Ideal for shipping, retail packaging, or high-end product presentation.',
        color: 'blue',
      },
    ],
  };

const TestComp = () => {
    
  return (
        <PackagingTemplate
            title={packagingData.title}
            description={packagingData.description}
            products={packagingData.products}
            imageUrl={packagingData.imageUrl}
        />
    
  )
}

export default TestComp