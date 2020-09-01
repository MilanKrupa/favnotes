import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitts', 'articles']),
};

UserPageTemplate.defaultProps = {
  pageType: 'notes',
};

export default UserPageTemplate;
