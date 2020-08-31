import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = () => (
  <UserPageTemplate>
    <h1>note</h1>
    <p>
      Loremm ipsum dolor sit amet consectetur adipisicing elit. Nobis iste assumenda quos error
      nesciunt, quo eligendi recusandae eaque iure dolorum, officiis porro incidunt culpa illo animi
      repellendus non doloremque deleniti!
    </p>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
