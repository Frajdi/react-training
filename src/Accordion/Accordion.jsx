import React from 'react'
import Item from './Item'

const Accordion = () => {

    const accordionData = [
        {
            title: 'Summer',
            body: 'The night sky was juniper-purple. The sound of intoning bees filled the air. The stars were glowing.'
        },
        {
            title: 'Winter',
            body: 'The night sky was juniper-purple. The sound of intoning bees filled the air. Its cold.'            
        },
        {
            title: 'Spring',
            body: 'The night sky was juniper-purple. Fuck yes. Its cold.'
        }
    ]

  return (
    <div style={{width: '50%'}}>
        {accordionData.map(item =>
            <Item item={item} />
        )}
    </div>
  )
}

export default Accordion