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

      <a target="blank" href="https://www.google.com/maps/place/Westside+Muay+Thai/@45.3968784,-75.7217738,15z/data=!4m8!3m7!1s0x4cce0417876e60b3:0xffc921a98bb99ce5!8m2!3d45.3985562!4d-75.736223!9m1!1b1!16s%2Fg%2F11bbtfmjpr?entry=ttu">
      <iframe src="https://embedsocial.com/api/pro_hashtag/be3f9795e621c7690977a937eaf52c594cb46f70" 
      style={{ position:'absolute', left: '40%', top: '2.5%', width:'200px', height:'220px', border: '0'}}
      frameborder="0" marginheight="0" marginwidth="0"
      title="Reviews"> 
      </iframe>
      </a>

      <div className='section'>
        <div className='container'>
          <Content source={body} />
         
        </div>
      </div>
        <script src="https://embedsocial.com/js/iframe.js"></script>
          <iframe style=
            {{
              border: 0, 
              width: '100%', 
              height: '550px'
            }} 
            scrolling="no" src="https://embedsocial.com/api/pro_hashtag/1dd5e27fe7b860079e795ac58fe52b8d9aa2b7a3" title="Instagram Feed"
            >
          </iframe>
        <script>iFrameResize()</script>
    </main>
  )
}
