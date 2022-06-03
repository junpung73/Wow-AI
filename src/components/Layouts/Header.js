import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardMedia, styled, Typography } from '@mui/material'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LinkStyled = styled(Link)({
  color: "var(--primary-text)",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "400",
  transition: "all .3s ease",
  margin: "0 2vh 0 2vh",
  "&:hover": {
    color: "var(--primary-text)",
    transform: "scale(1.05)",
  }
})

const ItemLink = styled(Link)({
  color: "var(--secondary-text)",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "400",
  whiteSpace: "nowrap",
  "&:hover": {
    color: "var(--secondary-text)",
    fontWeight: "500",
  },
})

const NavDropdownStyled = styled(NavDropdown)({
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "400",
  zIndex: "100",
  "&:hover": {
    color: "white",
  }
})

const liStyled = {
  paddingRight: "10px",
}

const CardMediaStyled = styled(CardMedia)({
  transition: "all .3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)",
  }
})
const LinkInfo = {
  display: "flex",
  fontSize: "16px",
  margin: "0 0 0 4vh",
  color: "var(--primary-text)",
  textDecoration: "none",
  fontFamily: "Quicksand",
  "&:hover": {
    color: "var(--primary-text)",
  }
}

const Header = () => {
  return (
    <div style={{ backgroundColor: "var(--primary-bg)", paddingBottom: "2vh" }}>
      <Container className='header-info container' style={{ display: "flex", justifyContent: "space-between" }}>
        <NavDropdown title="English">
          <ul style={{marginBottom: "0"}}>
            <li style={{ textDecoration: "none" }}>
              <ItemLink to="/">English</ItemLink>
            </li>
            <li style={{ textDecoration: "none" }}>
              <ItemLink to="/">Viet Nam</ItemLink>
            </li>
          </ul>
        </NavDropdown>
        <div style={{ padding: "0.5rem 1rem", display: "flex", justifyContent: "space-between" }}>
          <Link to="#" style={LinkInfo}>
            <FontAwesomeIcon icon={faLocationDot} style={{marginTop: "0.2rem"}}/>
            &nbsp;
            <Typography display={{xs:'none', md:'block'}}>
              34th ST STE 1018, NY, USA
            </Typography>
          </Link>
          <Link to="#" style={LinkInfo}>
            <FontAwesomeIcon icon={faEnvelope} style={{marginTop: "0.2rem"}}/>
            &nbsp;
            <Typography display={{xs:'none', md:'block'}}>
              contact@wow-ai.com
            </Typography>
          </Link>
        </div>
      </Container>
      <hr style={{ color: "var(--primary-text)", height: "2px", marginTop: "0" }} />
      <Navbar expand="lg" variant="dark">

        <Container style={{width: "90%"}}>
          <Link to="/">
            <CardMediaStyled
              component="img"
              image='/Frame.png'
              style={{ width: "60%" }}
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='navbar-contai'>
            <Nav className="me-auto">

            </Nav>
            <NavDropdownStyled title="Services" id="basic-nav-dropdown">
              <ul style={{marginBottom: "0"}}>
                <li style={liStyled}>
                  <ItemLink to="/data-transcription">
                    Data Transcription
                  </ItemLink>
                </li>
                <li style={liStyled}>
                  <ItemLink to="/data-collection">
                    Data Collection
                  </ItemLink>
                </li>
                <li style={liStyled}>
                  <ItemLink to="/data-annotation">
                    Data Annotation
                  </ItemLink>
                </li>
              </ul>
            </NavDropdownStyled>
            <LinkStyled to="/off-the-shelf">
              Off The Shelf data
            </LinkStyled>
            <LinkStyled to="/resources">
              Resources
            </LinkStyled>
            <NavDropdownStyled title="Company" id="basic-nav-dropdown">
              <ul style={{marginBottom: "0"}}>
                <li>
                  <ItemLink to="/about-us">
                    About Us
                  </ItemLink>
                </li>
                <li>
                  <ItemLink to="/contact">
                    Contact
                  </ItemLink>
                </li>
              </ul>
            </NavDropdownStyled>
            <LinkStyled to="/join-our-talent-pool">
              Join Our Talent Pool
            </LinkStyled>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header