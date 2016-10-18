import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';
import Header1 from './Header';
import Footer from '../components/Footer';
import Float from './Float';

const App = ({ children }) => (
  <div className="app">
    <Header1 />
    <Float />
    <Grid>{ children }</Grid>
    <Footer />
  </div>
);

App.propTypes = { children: PropTypes.object };

export default App;
