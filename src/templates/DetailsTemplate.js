import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hoc/withContext';

const DetailsTemplate = ({ children, pageContext }) => (
  <UserPageTemplate pageContext={pageContext}>{children}</UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitts', 'articles']),
};

DetailsTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(DetailsTemplate);
