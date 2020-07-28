import React from 'react'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import './Schedule.css'

export default ({ fields }) => {
  const { title, subtitle, body } = fields
  return (
    <main className='Schedule'>
      <PageHeader
        small
        title={title}
        subtitle={subtitle}
      />

      <div className='section'>
        <div className='container'>
          <Content source={body} />
        </div>
      </div>
    </main>
  )
}