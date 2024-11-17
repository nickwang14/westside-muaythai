import React from 'react'

import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import './FAQ.css'

export default ({ fields }) => {
  const { title, subtitle, featuredImage, body } = fields
  return (
    <main className='FAQ'>
      <PageHeader
        large
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      <div className='section'>
        <div className='container'>
          <Content source={body} />
        </div>
      </div>
    </main>
  )
}