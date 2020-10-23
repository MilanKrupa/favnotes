import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Twitts extends Component {
  componentDidMount() {
    const { fetchTwitts } = this.props;
    fetchTwitts();
  }

  render() {
    const { twitts } = this.props;
    return (
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
  }
}

Twitts.propTypes = {
  fetchTwitts: PropTypes.func.isRequired,
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

const mapDispatchToProps = (dispatch) => ({
  fetchTwitts: () => dispatch(fetchItems('twitts')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitts);
