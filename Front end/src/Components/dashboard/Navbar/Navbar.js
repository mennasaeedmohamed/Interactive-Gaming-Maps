// Navbar3.js
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './navbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from "../../../assets/logo/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../../store/slices/user';
import { useNavigate } from 'react-router-dom';

export default function Navbar3() {
  const currentUser = useSelector(state => state.currentUser.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <img
          alt=""
          src={icon}
          width="35"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Mappy
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="middle">
          <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
          <Nav.Link as={Link} to="/leaderboard" className="nav-link">Leaderboard</Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link">About us</Nav.Link>
          <NavDropdown title="Languages" id="basic-nav-dropdown" className="nav-dropdown">
            <NavDropdown.Item onClick={() => changeLanguage('ar')}>Arabic</NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage('fr')}>French</NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage('sp')}>Spanish</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav className="user">
          <Nav.Link as={Link} to="/login" className="nav-link">{currentUser.username}</Nav.Link>
          <NavDropdown
            title={
              <span>
                <img
                  alt="User"
                  src={currentUser.profileImage || '/public/assets/logo/logo.jpg'} // Use profile image from state
                  width="30"
                  height="30"
                  className="rounded-circle user-icon"
                />
              </span>
            }
            id="user-nav-dropdown"
            className="nav-dropdown"
          >
            <NavDropdown.Item as={Link} to="/user">Profile</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/logout" onClick={handleLogout}>Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
