import React from 'react'
import EventListener from '../EventListener'
import MainNavigation from './MainNavigation'

const Layout: React.FC = (props: any) => {
  return (
    <>
      <MainNavigation/>
      <main>{props}</main>
      <EventListener/>
    </>
  )
}

export default Layout