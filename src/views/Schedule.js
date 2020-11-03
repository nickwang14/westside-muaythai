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
          <iframe src="https://app.acuityscheduling.com/schedule.php?owner=20144425" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
        </div>
      </div>
    </main>
  )
}