import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Notes from 'views/Notes';
import Twitts from 'views/Twitts';
import Articles from 'views/Articles';
import DetailsPage from 'views/Details';

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/notes" />} />
          <Route exact path="/notes" component={Notes} />
          <Route path="/notes/:id" component={DetailsPage} />
          <Route exact path="/twitts" component={Twitts} />
          <Route path="/twitts/:id" component={DetailsPage} />
          <Route exact path="/articles" component={Articles} />
          <Route path="/articles/:id" component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
