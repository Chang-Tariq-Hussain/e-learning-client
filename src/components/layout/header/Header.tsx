import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./header.scss"
import logoImage from '../../../assets/images/e-learning.avif'
import { Link, useNavigate } from 'react-router'
import { Avatar } from 'antd'
import { useSelector } from 'react-redux'
import ThemeDropdown from '../../common/dropown/ThemeDropdown'
import ThemeAvatar from '../../common/theme-avatar/ThemeAvatar'
import ThemeButton from '../../common/theme-button/ThemeButton'
import { handleLogout } from '../../../services/api.service.wrapper'
import { Menu, X } from 'lucide-react'  // Importing Hamburger and Close icons

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isLogin, user } = useSelector((state: any) => state?.auth);
  
  const [menuOpen, setMenuOpen] = useState(false);  // State to track menu visibility

  const dropdownItems = [{
    label: (
      <>
        <ThemeAvatar avatarSize='large' name={user?.name} title={user?.name} subheading={user?.role}/>
        <div className="button-group">
          <ThemeButton className='btn-light-lg' text='Edit'></ThemeButton>
          <ThemeButton className='btn-logout' text='Logout' onClick={handleLogout}></ThemeButton>
        </div>
      </>
    ),
    key: 0
  }];

  return (
    <div className="header-container">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="header-main">
              {/* Logo */}
              <img
                src={logoImage}
                alt="E learning logo"
                className="logo-img"
                onClick={() => navigate("/dashboard")}
              />

              {/* Hamburger Menu (visible on small screens) */}
              <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <Menu size={30} />
              </div>

              {/* Navigation Menu */}
              <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
                <div className="nav-header">
                  <div
                    className="menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {menuOpen && <X size={30} />}
                  </div>
                  {isLogin && (
                    <div className="dropdown-2">
                      <ThemeDropdown items={dropdownItems}>
                        <Avatar style={{ background: "#549e2f" }}>
                          {user?.name[0].toUpperCase()}
                        </Avatar>
                      </ThemeDropdown>
                    </div>
                  )}
                </div>
                <ul className="nav-menu-items">
                  <li className="nav-menu-item">
                    <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-menu-item">
                    <Link to="/courses" onClick={() => setMenuOpen(false)}>
                      Courses
                    </Link>
                  </li>
                  <li className="nav-menu-item">
                    <Link to="/articles" onClick={() => setMenuOpen(false)}>
                      Articles
                    </Link>
                  </li>
                  <li className="nav-menu-item">
                    <Link to="/about" onClick={() => setMenuOpen(false)}>
                      About
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* User Profile Dropdown (Only if logged in) */}
              {isLogin && (
                <div className="dropdown">
                  <ThemeDropdown items={dropdownItems}>
                    <Avatar style={{ background: "mediumseagreen" }}>
                      {user?.name[0].toUpperCase()}
                    </Avatar>
                  </ThemeDropdown>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
