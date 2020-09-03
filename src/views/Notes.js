import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = () => (
  <GridTemplate pageType="notes">
    <Card
      cardType="notes"
      title="My note"
      created="2.09.2020"
      content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ut aspernatur ducimus architecto aperiam? Exercitationem excepturi error neque omnis adipisci quasi iure ipsam mollitia ullam nulla maxime, quisquam minus odio.Corrupti repudiandae nobis unde voluptatem quae non fugiat perferendis, dolorum omnis labore culpa? Nemo, dolores sunt, non sequi veritatis rerum, earum odit ea quos mollitia accusantium minima ipsa eligendi. Dicta."
    />
    <Card cardType="notes" />
    <Card cardType="notes" />
    <Card cardType="notes" />
    <Card cardType="notes" />
    <Card cardType="notes" />
  </GridTemplate>
);

export default Notes;
