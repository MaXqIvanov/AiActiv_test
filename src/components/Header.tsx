
import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navHome = useNavigate()
  return (
    <div className='header'>
        <Navbar className='Navbar' collapseOnSelect  variant="dark"   expand={false}>
        <Container fluid>
        <Navbar.Toggle   className='main_nav_button' aria-controls="offcanvasNavbar" />
          <Navbar.Brand title='Вернуться на главную' className='main_logo_div'  onClick={()=>navHome("/")}><div className='main_logo_div_smallV2'>Тестовое задание</div></Navbar.Brand>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            collapseOnSelect
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{color: "black"}} id="offcanvasNavbarLabel">Тестовое задание</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
              
             
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}
