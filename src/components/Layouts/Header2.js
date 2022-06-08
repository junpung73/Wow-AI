import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardMedia, styled } from '@mui/material'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const LinkStyled = styled(Link)({
    color: "var(--primary-text)",
    textDecoration: "none",
    fontSize: "var(--normal-text)",
    fontWeight: "lighter",
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
    fontSize: "var(--normal-text)",
    fontWeight: "lighter",
    whiteSpace: "nowrap",
    "&:hover": {
        color: "var(--secondary-text)",
        fontWeight: "500",
    },
})

const NavDropdownStyled = styled(NavDropdown)({
    color: "white",
    textDecoration: "none",
    fontSize: "var(--normal-text)",
    fontWeight: "lighter",
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
    fontSize: "var(--normal-text)",
    margin: "0 0 0 4vh",
    color: "var(--primary-text)",
    textDecoration: "none",
    "&:hover": {
        color: "var(--primary-text)",
    }
}
const DivStyled = styled('div')(({ theme }) => ({
    marginBottom: '0',
    [theme.breakpoints.down('md')]: {
        marginBottom: '0.5rem',
    },
}))

const Header2 = () => {

    return (
        <React.Fragment>
            <Container className='header-info container' style={{ maxWidth: "90%", display: "flex", justifyContent: "space-between" }}>
                <NavDropdown title="English" style={{ zIndex: '1110' }}>
                    <ul style={{ marginBottom: "0" }}>
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
                        <FontAwesomeIcon icon={faLocationDot} style={{ marginTop: "0.2rem" }} />
                        &nbsp;
                        <Typography display={{ xs: 'none', md: 'block' }} style={{ fontFamily: 'Quicksand' }}>
                            34th ST STE 1018, NY, USA
                        </Typography>
                    </Link>
                    <Link to="#" style={LinkInfo}>
                        <FontAwesomeIcon icon={faEnvelope} style={{ marginTop: "0.2rem" }} />
                        &nbsp;
                        <Typography display={{ xs: 'none', md: 'block' }} style={{ fontFamily: 'Quicksand' }}>
                            contact@wow-ai.com
                        </Typography>
                    </Link>
                </div>
            </Container>
            <hr style={{ color: "var(--primary-text)", height: "2px", marginTop: "0" }} />

            <AppBar position="sticky" style={{ backgroundColor: 'var(--primary-bg)' }}>
                <Toolbar disableGutters>
                    <Navbar expand="lg" variant="dark" style={{ width: '100%' }}>
                        <Container style={{ maxWidth: "90%", display: 'flex', padding: '1rem 0', justifyContent: 'space-between' }}>
                            <Link to="/">
                                <CardMediaStyled
                                    component="img"
                                    image='/Frame.png'
                                    style={{ width: "60%" }}
                                />
                            </Link>

                            <Navbar.Collapse id="basic-navbar-nav" className='navbar-contai'>
                                <Nav className="me-auto">

                                </Nav>
                                <NavDropdownStyled title="Services" id="basic-nav-dropdown">
                                    <ul style={{ marginBottom: "0" }}>
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
                                <DivStyled>
                                    <LinkStyled to="/off-the-shelf">
                                        Off The Shelf data
                                    </LinkStyled>
                                </DivStyled>
                                <div>
                                    <LinkStyled to="/resources">
                                        Resources
                                    </LinkStyled>
                                </div>

                                <LinkStyled to="/join-our-talent-pool">
                                    Join Our Talent Pool
                                </LinkStyled>
                                <NavDropdownStyled title="Company" id="basic-nav-dropdown">
                                    <ul style={{ marginBottom: "0" }}>
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
                            </Navbar.Collapse>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </Container>
                    </Navbar>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};
export default Header2;
