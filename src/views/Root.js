import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import Notes from 'views/Notes';
import Twitts from 'views/Twitts';
import Articles from 'views/Articles';
import DetailsPage from 'views/Details';
import { routes } from 'routes/routes';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
            <Route exact path={routes.notes} component={Notes} />
            <Route path={routes.note} component={DetailsPage} />
            <Route exact path={routes.twitts} component={Twitts} />
            <Route path={routes.twitt} component={DetailsPage} />
            <Route exact path={routes.articles} component={Articles} />
            <Route path={routes.article} component={DetailsPage} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
