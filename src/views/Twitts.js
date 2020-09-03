import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = () => (
  <GridTemplate pageType="twitts">
    <Card cardType="twitts" twitterName="erveoll" />
    <Card cardType="twitts" />
    <Card cardType="twitts" />
    <Card cardType="twitts" />
    <Card cardType="twitts" />
    <Card cardType="twitts" />
  </GridTemplate>
);

export default Notes;
