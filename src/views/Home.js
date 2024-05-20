import React from 'react'

import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import './Home.css'

export default ({ fields }) => {
  const { title, subtitle, featuredImage, body } = fields
  return (
    <main className='Home'>
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
      <div className='section'>
      <script src="https://embedsocial.com/js/iframe.js"></script>
        <iframe 
          src="https://embedsocial.com/api/pro_hashtag/be3f9795e621c7690977a937eaf52c594cb46f70" 
          width="900px"
          height="1200px" 
          frameborder="0" 
          marginheight="0" 
          marginwidth="0"
          title="Review Feed"
          >
          </iframe>
      </div>
      <div className='section'>
        <script src="https://embedsocial.com/js/iframe.js"></script>
          <iframe style=
            {{
              border: 0, 
              width: '100%', 
              height: '100%'
            }} 
            scrolling="no" src="https://embedsocial.com/api/pro_hashtag/1dd5e27fe7b860079e795ac58fe52b8d9aa2b7a3" title="Instagram Feed"
            >
          </iframe>
        <script>iFrameResize()</script>
      </div>
      
    </main>
  )
}
