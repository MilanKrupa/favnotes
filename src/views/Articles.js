import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = () => (
  <GridTemplate pageType="articles">
    <Card cardType="articles" />
    <Card cardType="articles" />
    <Card cardType="articles" />
    <Card cardType="articles" />
    <Card cardType="articles" />
    <Card cardType="articles" />
  </GridTemplate>
);

export default Notes;
