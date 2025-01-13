import { Dropdown, DropdownProps, MenuProps } from 'antd'
import React from 'react'
import "./theme-dropdown.scss"

export interface ThemeDropdownProps extends DropdownProps{
    items?:MenuProps['items'],
}
const ThemeDropdown:React.FC<ThemeDropdownProps> = ({
    children,
    items,
    trigger = ['click']
}) => {
  return (
    <div className='theme-dropdown-container'>
      <Dropdown menu={{items}} trigger={trigger}>
        {children}
      </Dropdown>
    </div>
  )
}

export default ThemeDropdown
