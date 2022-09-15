import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
    MDBIcon,
    MDBNavbarNav,
    MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import iconBrand_d from '../asset/pic/logo_pc_b.svg';
import iconBrand_l from '../asset/pic/logo_pc_w.svg';

export default function Navbar() {
    const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light transparent className='shadow-0' sticky>
                <MDBContainer fluid>
                    <MDBNavbarBrand tag='section'>
                        <Link to="/">
                            <img
                                src={iconBrand_l}
                                height='30'
                                alt=''
                                loading='lazy'
                            />
                        </Link>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarTogglerDemo02'
                        aria-controls='navbarTogglerDemo02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavNoTogglerSecond}>
                        <MDBNavbarNav fullWidth className='justify-content-md-end'>
                            <MDBNavbarItem>
                                <Link to='/pray' className='nav-link text-uppercase navLink px-2 text-white fw-bold'>pray</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to='/visit' className='nav-link text-uppercase navLink px-2 text-white fw-bold'>visit</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to='/learn' className='nav-link text-uppercase navLink px-2 text-white fw-bold'>learn</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to='/location' className='nav-link text-uppercase navLink px-2 text-white fw-bold'>location</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to='/faq' className='nav-link text-uppercase navLink px-2 text-white fw-bold'>faq</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to='/news' className='nav-link text-uppercase navLink px-2 text-white fw-bold'>news</Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}