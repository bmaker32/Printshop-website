import RotatingText from './RotatingText'
import React from 'react'

const TrialText = () => {
  return (
    <div className="flex items-center space-x-2 text-2xl font-bold">
      <h1 className="whitespace-nowrap">Hello</h1>
      <RotatingText
        texts={['React', 'Bits', 'Is', 'Cool!']}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black py-0.5 sm:py-1 md:py-2 justify-center rounded-lg inline-flex"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </div>
  )
}

export default TrialText
