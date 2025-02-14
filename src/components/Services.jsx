import React from 'react'
import PackagingSolution from './PackagingSolution'
import PaperPrinting from './PaperPrinting'
import TestComp from './TestComp'
import Wearables from './Wearables'

const Services = () => {
  return (
    <div className='bg-pink-50'>
        {/* <PackagingSolution/> */}
        <Wearables/>
        <PaperPrinting/>
        <TestComp/>
    </div>
  )
}

export default Services