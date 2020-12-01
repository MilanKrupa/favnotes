import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Articles extends Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <GridTemplate pageType="articles">
        {articles.map(({ title, content, _id: id }) => (
          <Card title={title} content={content} id={id} key={id} />
        ))}
      </GridTemplate>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};
Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchItems('articles')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
