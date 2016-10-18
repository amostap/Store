import React from 'react';
import { Grid } from 'react-bootstrap';

const footerStyles = {
  color: 'red',
  textAlign: 'center',
  marginTop: '15px',
  marginBottom: '20px',
  paddingTop: '20px',
  borderTop: '1px solid lightGray',
};

const link = {
  color: 'gray',
};

const Footer = () => (
  <Grid style={footerStyles}>
    <a style={link} href="#" target="_blank" rel="noopener noreferrer">
      Made by Apecer
    </a>
  </Grid>
);

export default Footer;
