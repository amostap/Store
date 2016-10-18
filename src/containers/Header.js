import React, { Component, PropTypes } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getTotal } from '../reducers';

export class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="">Shop</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <li role="presentation">
              <Link to="/">
                <span className="glyphicon glyphicon-home" aria-hidden="true" />
              </Link>
            </li>
          </Nav>
          <Nav pullRight>
            <li role="presentation">
              <Link to="/cart">
                <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" />
                <span>{` ${this.props.total}$`}</span>
              </Link>
            </li>
            <li role="presentation">
              <Link to="/user">
                <span className="glyphicon glyphicon-user" aria-hidden="true" />
                {/* <span>User Profile</span> */}
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  total: PropTypes.string,
};

const mapStateToProps = state => ({
  total: getTotal(state),
});

export default connect(mapStateToProps)(Header);
