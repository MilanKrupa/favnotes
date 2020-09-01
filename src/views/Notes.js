import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = () => (
  <GridTemplate pageType="notes">
    <Card cardType="notes" />
    <Card cardType="notes" />
    <Card cardType="notes" />
    <Card cardType="notes" />
    <Card cardType="notes" />
    <Card cardType="notes" />
  </GridTemplate>
);

export default Notes;
