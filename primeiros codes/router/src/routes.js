import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { TopicList } from './views/TopicList';
import { NoMatch } from './views/NoMatch';
import { TopicDetail } from './components/TopicDetail';
import { NavBar } from './components/NavBar';
import { MakeRouteWithSubRoutes } from './make-route';

import './routes.css';

import { Route, Switch, Redirect } from 'react-router-dom';


const route = [
   {
      path: '/home',
      component: Home
   },

   {
      path: '/about',
      component: About
   },

   {
      path: '/topics',
      component: TopicList,
      routes: [
         {
            path: '/topics/:topicID',
            component: TopicList
         }
      ]
   },

   {
      path: "/:WhereTheHeckIsThat",
      component: NoMatch
   }
];

const Routes = () => (
   <div>

      <NavBar/>

      <section className="container">
         <Switch>
         {
            route.map( (route, index) => (
               <MakeRouteWithSubRoutes key={ index } { ...route } />
            ))
         }
         </Switch>
      </section>

   </div>
);

export default Routes;