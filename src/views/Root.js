import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notes from 'views/Notes';
import Twitts from 'views/Twitts';
import Articles from 'views/Articles';

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route path="/twitts" component={Twitts} />
          <Route path="/articles" component={Articles} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;