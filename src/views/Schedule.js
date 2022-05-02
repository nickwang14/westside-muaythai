import React from 'react'

import Content from '../components/Content'
import './Schedule.css'

export default ({ fields }) => {
  const { body } = fields
  return (
    <main className='Schedule'>
      <div className='section'>
        <div className='container'>
          <Content source={body} />
        </div>
      </div>
    </main>
  )
}