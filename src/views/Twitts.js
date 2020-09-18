import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitts = ({ twitts }) => (
  <GridTemplate pageType="twitts">
    {twitts.map(({ title, content, twittName, created, id }) => (
      <Card
        cardType="twitts"
        title={title}
        content={content}
        twittName={twittName}
        created={created}
        id={id}
        key={id}
      />
    ))}
  </GridTemplate>
);

Twitts.propTypes = {
  twitts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twittName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};
Twitts.defaultProps = {
  twitts: [],
};

const mapStateToProps = ({ twitts }) => ({ twitts });

export default connect(mapStateToProps)(Twitts);
