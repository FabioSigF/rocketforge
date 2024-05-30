import React from 'react'

type Props = {
  children: React.ReactNode;
}

const Section = ({children}: Props) => {
  return (
    <div className='py-16'>
      {children}
    </div>
  )
}

export default Section