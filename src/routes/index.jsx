import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import PropTypes from 'prop-types';
import mainState from '../stores/index';
import './global';
import App from '../pages/App';
import Home from '../pages/home/Home';
import Mine from '../pages/mine/Home';
import Msg from '../pages/message/Home';
import Fr from '../pages/fr/Home';
import NoMatch from '../pages/common/NoMatch';

const configRoutes = [{
    path: '/',
    exact: true,
    main: App,
  },{
    path: '/home',
    exact: true,
    main: Home,
  },{
    path: '/fr',
    exact: true,
    main: Fr,
  },{
    path: '/message',
    exact: true,
    main: Msg,
  },{
  },{
    path: '/mine',
    exact: true,
    main: Mine,
  },{
    path: '*',
    exact: false,
    main: NoMatch,
  }];

const Routes = () => (
  <Provider store={mainState}>
    <BrowserRouter>
      <Switch>
        {
          configRoutes.map((route, index) => {
            return <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
          })
        }
      </Switch>
    </BrowserRouter>
  </Provider>
)

Routes.propTypes = {
  text: PropTypes.any
};

export default Routes;