import { Avatar, AvatarProps } from 'antd'
import React from 'react'
import "./theme-avatar.scss"

export interface ThemeAvatar extends AvatarProps {
    name: string,
    title?: string,
    subheading: number,
    avatarSize: AvatarProps['size']
}
const ThemeAvatar: React.FC<ThemeAvatar> = ({
    name,
    title,
    subheading,
    avatarSize='default'
}) => {
    return (
        <div className='avatar-container'>
            <Avatar className='avatar' size={avatarSize}>{name[0]?.toUpperCase()}</Avatar>
            <div className='avatar-content'>
                <p>{title}</p>
                <small>{subheading === 10 ? 'Student' : subheading === 20 ? 'Instructor' : 'Admin'}</small>
            </div>
        </div>
    )
}

export default ThemeAvatar
