import React, { memo } from 'react'
import { NavLink,Outlet } from "react-router-dom";

import {DiscoverStyle} from './style'
import { dicoverMenu } from "@/services/local-data";

const Discover = memo(() => {
  return (
    <DiscoverStyle>
      <div className='header-content'>
        <div className='header wrap-v1'>
          {
            dicoverMenu.map(dm => {
              return (
                <NavLink key={dm.link} className='discover-muen' to={dm.link}>
                  <span>{dm.title}</span>
                </NavLink>
              )
            })
          }
        </div>
      </div>
      <Outlet />
    </DiscoverStyle>
  )
})

export default Discover