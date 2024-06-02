/* eslint-disable react/prop-types */
import {Footer} from './Footer/Footer'
import { Navbar } from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div>
        <Outlet />
        </div>
        <Footer/>
    </div>
  )
}
