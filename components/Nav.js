import React from 'react';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';
import Head from './Head';

const Nav = () => (
    <Navbar style={{ background: '#fff', margin: '0' }}>
      <Head  title={'Post It'} />
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <img className="logo-item" src="/static/wyp-icon.png"/>
            Post It
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <style jsx>{`
          nav.navbar.navbar-default{
            margin: 0;
            border-radius: 0;
          }

          .navbar-brand {
              display: flex;
              align-items: center;
              color: lightgray;
          }
          .navbar-brand:hover {
              color: lightgray;
          }
          .navbar-brand>img {
              margin-right: 5px;
          }

          .navbar-link{
              text-decoration: none;
          }

          .logo-item{
              width: 30px;
              height: 30px;
          }
          `}
      </style>
    </Navbar>
);

export default Nav
