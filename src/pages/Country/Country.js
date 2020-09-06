import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Country() {
  const { countryName } = useParams()

  return (
    <h1>{countryName}</h1>
  )
}
