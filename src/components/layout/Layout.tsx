import React from 'react'
import EventListener from '../EventListener'
import MainNavigation from './MainNavigation'

// Define a type for your component's props
interface LayoutProps {
  children: React.ReactNode; // Explicitly type the children prop
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <MainNavigation/>
      <main>{children}</main>
      <EventListener/>
    </>
  )
}

export default Layout