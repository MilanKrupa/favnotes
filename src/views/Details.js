/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styled from 'styled-components';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes/routes';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

const StyledAvatar = styled.img`
  height: 112px;
  width: 112px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: -20px;
`;
const StyledHeading = styled(Heading)`
  position: relative;
  margin: 100px 0 0 0;
`;

const StyledButton = styled(Button)`
  background-color: ${({ pageType, theme }) => (pageType ? theme[pageType] : theme.notes)};
  margin: 50px 0 20px 0;
`;

const StyledLink = styled.a`
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.black};
`;

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
    const { title, created, twitterUrl, articleUrl, content } = this.props;
    return (
      <DetailsTemplate pageType={pageType}>
        <StyledWrapper>
          <StyledHeading big>
            {title}My best note
            {pageType === 'twitts' && (
              // <StyledAvatar src={`https://twitter-avatar.now.sh/${twitterName}`} />
              <StyledAvatar src="https://twitter-avatar.now.sh/erveoll" />
            )}
          </StyledHeading>

          <Paragraph>CREATED 03/09/2020{created}</Paragraph>
          <Paragraph>
            {content} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam corporis,
            ipsam quam odio vel incidunt, laborum cumque, distinctio iure eum magni. Neque
            obcaecati, exercitationem temporibus distinctio officiis eligendi quasi quaerat.Corrupti
            quod blanditiis, adipisci at eveniet consequatur, esse perferendis harum minima qui hic.
            Earum, quia! Libero, ipsum! Totam numquam nostrum nisi quis amet fugiat itaque
            asperiores error veritatis exercitationem! Obcaecati? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ad illum libero deleniti harum nisi, corrupti qui possimus
            magni eveniet? Eius et quos, quidem tenetur dolore facilis expedita natus impedit
            amet!Molestiae quidem enim temporibus officiis odio, iste voluptatem eligendi sed
            doloribus quisquam ullam alias ex repudiandae, voluptate dolorum provident ipsa soluta
            inventore iure earum doloremque a nam! Quibusdam, beatae eaque.
          </Paragraph>
          {pageType === 'twitts' && <StyledLink href={twitterUrl}>View this twitt</StyledLink>}
          {pageType === 'articles' && <StyledLink href={articleUrl}>View this article</StyledLink>}
          <StyledButton pageType={pageType} bold>
            CLOSE/SAVE
          </StyledButton>
          <StyledLink href="/">go back</StyledLink>
        </StyledWrapper>
      </DetailsTemplate>
    );
  }
}

export default DetailsPage;
