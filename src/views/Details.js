import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import Heading from 'components/atoms/Heading/Heading';
// import Paragraph from 'components/atoms/Paragraph/Paragraph';
// import Button from 'components/atoms/Button/Button';

// const StyledWrapper = styled.div`
//   padding-left: 100px;
//   display: flex;
//   flex-direction: column;
//   max-width: 600px;
// `;

// const StyledAvatar = styled.img`
//   height: 112px;
//   width: 112px;
//   border-radius: 50%;
//   position: absolute;
//   right: 0;
//   top: -20px;
// `;
// const StyledHeading = styled(Heading)`
//   position: relative;
//   margin: 100px 0 0 0;
// `;

// const StyledButton = styled(Button)`
//   background-color: ${({ pageType, theme }) => (pageType ? theme[pageType] : theme.notes)};
//   margin: 50px 0 20px 0;
// `;

// const StyledLink = styled.a`
//   text-decoration: underline;
//   font-weight: ${({ theme }) => theme.fontWeight.bold};
//   color: ${({ theme }) => theme.black};
// `;

class DetailsPage extends Component {
  state = {
    activeItem: {
      title: '',
      conent: '',
      articleUrl: '',
      twittName: '',
    },
  };

  componentDidMount() {
    if (this.props.activeItem) {
      const [activeItem] = this.props.activeItem;
      this.setState({
        activeItem,
      });
    } else {
      const { _id } = this.props.match.params;
      axios
        .get(`http://localhost:9000/api/note/${_id}`)
        .then(({ data }) => this.setState({ activeItem: data }))
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <DetailsTemplate
        title={activeItem.title}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twittName={activeItem.twittName}
      >
        <p>{activeItem.title}</p>
        <p>{activeItem.content}</p>
      </DetailsTemplate>
    );
  }
}

DetailsPage.propTypes = {
  activeItem: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(
        (item) => item._id === ownProps.match.params.id,
      ),
    };
  }

  return {
    activeItem: state[ownProps.pageContext].filter(
      (item) => item._id === ownProps.match.params._id,
    ),
  };
};

export default withContext(connect(mapStateToProps)(DetailsPage));
