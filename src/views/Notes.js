import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Notes extends Component {
  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  render() {
    const { notes, searchValue } = this.props;

    return (
      <GridTemplate>
        {notes
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map(({ title, content, _id: id }) => (
            <Card title={title} content={content} id={id} key={id} />
          ))}
      </GridTemplate>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};
Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = (state) => {
  const { notes, searchValue } = state;
  return { notes, searchValue };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchItems('notes')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
