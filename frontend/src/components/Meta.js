import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Agricultural-products(Harvest Solutions)',
  description: 'We sell the best products at cheap price',
  keywords: 'crop seeds, manure, fertilizers',
}

export default Meta
