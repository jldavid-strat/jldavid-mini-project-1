import React from 'react'
import { Separator } from '@/lib/components/ui/separator'

const PageTitle = ({title}) => {
  return (
    <>
    <h2 className="text-3xl font-bold text-primary text-center">{title}</h2>
    <Separator className="my-4" orientation="horizontal"/>
    </>
  )
}

export default PageTitle
