/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes/routes';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.twitt:
        this.setState({ pageType: 'twitts' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        this.setState({ pageType: 'notes' });
        break;
    }
  }

  render() {
    const { pageType } = this.state;
    return (
      <DetailsTemplate pageType={pageType}>
        <p>details page</p>
      </DetailsTemplate>
    );
  }
}

export default DetailsPage;
