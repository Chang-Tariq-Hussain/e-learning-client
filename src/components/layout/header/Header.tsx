
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./header.scss"
import logoImage from '../../../assets/images/e-learning.avif'
import { useNavigate } from 'react-router'
import TextInput from '../../common/input-field/TextInput'
import { CiSearch } from 'react-icons/ci'
import { Avatar, Space } from 'antd'
import { useSelector } from 'react-redux'
import ThemeDropdown from '../../common/dropown/ThemeDropdown'
import ThemeAvatar from '../../common/theme-avatar/ThemeAvatar'
import ThemeButton from '../../common/theme-button/ThemeButton'
import { handleLogout } from '../../../services/api.service.wrapper'

const Header:React.FC = () => {
  const navigate = useNavigate();

  const {isLogin, user} = useSelector((state:any) => state?.auth);

  const dropdownItems = [{
    label: (
      <>
      <ThemeAvatar avatarSize='large' name={user?.name} title={user?.name} subheading={user?.role}/>
      <Space>
        <ThemeButton className='btn-light-lg' text='Edit'></ThemeButton>
        <ThemeButton className='btn-logout' text='Logout' onClick={handleLogout}></ThemeButton>
      </Space>
      </>
    ),
    key: 0
  }]
  return (
    <div className='header-container'>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="header-main">
                    <img src={logoImage} alt='E learning logo' className='logo-img' onClick={() => navigate('/')}/>
                    {
                      isLogin && (
                        <>
                          <TextInput type="search" suffix={<CiSearch />} placeholder="Search here..."/>
                          <ThemeDropdown items={dropdownItems}>
                            <Avatar style={{background:"#549e2f"}}>{user?.name[0].toUpperCase()}</Avatar>
                          </ThemeDropdown>
                        </>
                      )
                    }
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header