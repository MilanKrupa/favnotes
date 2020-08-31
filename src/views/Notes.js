import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = () => (
  <GridTemplate pageType="note">
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
    <Card cardType="note" />
  </GridTemplate>
);

export default Notes;
