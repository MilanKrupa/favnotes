import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Twitters extends Component {
  componentDidMount() {
    const { fetchTwitters } = this.props;
    fetchTwitters();
  }

  render() {
    const { twitters, searchValue } = this.props;

    return (
      <GridTemplate>
        {twitters
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map(({ title, content, twitterName, _id: id }) => (
            <Card
              id={id}
              title={title}
              content={content}
              twitterName={twitterName}
              key={id}
              searchValue={searchValue}
            />
          ))}
      </GridTemplate>
    );
  }
}

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = (state) => {
  const { twitters, searchValue } = state;
  return { twitters, searchValue };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTwitters: () => dispatch(fetchItems('twitters')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
