import React from 'react'
import DashboardCol3Part1 from './DashboardCol3Part1'
import DashboardCol3Part2 from './DashboardCol3Part2'

const DashboardCol3 = () => {
  return (
    <div className='w-full flex gap-4'>
        <DashboardCol3Part1/>
        <DashboardCol3Part2/>
    </div>
  )
}

export default DashboardCol3