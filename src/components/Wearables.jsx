import React from 'react'
import PackagingTemplate from './PackagingTemplate'

const wearablesData = {
    title: 'Wearable Printing Solutions',
    description: 'Discover our premium collection of customizable wearables, perfect for personal use, events, or branding.',
    imageUrl: '/assets/wearables.jpg', // Replace with your image path
    products: [
      {
        name: 'T-Shirts',
        description: 'High-quality cotton T-shirts available in various colors and sizes. Perfect for casual wear or branding.',
        color: 'blue',
      },
      {
        name: 'Hoodies',
        description: 'Soft and comfortable hoodies, ideal for cooler weather. Customizable with your designs or logos.',
        color: 'gray',
      },
      {
        name: 'Sweaters',
        description: 'Warm and stylish sweaters, perfect for winter fashion or corporate giveaways.',
        color: 'red',
      },
      {
        name: 'Jackets',
        description: 'Durable and trendy jackets, great for outdoor activities or promotional events.',
        color: 'green',
      },
      {
        name: 'Caps',
        description: 'Adjustable and breathable caps, perfect for sports, events, or casual outings.',
        color: 'yellow',
      },
      {
        name: 'Sportswear',
        description: 'Performance-driven sportswear designed for comfort and flexibility during workouts.',
        color: 'indigo',
      },
    ],
  };

const Wearables = () => {
  return (
    <PackagingTemplate
        title={wearablesData.title}
        description={wearablesData.description}
        products={wearablesData.products}
        imageUrl={wearablesData.imageUrl}
    />
  )
}

export default Wearables