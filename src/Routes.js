import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Menu from "./menu";

export default (props) => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <>
          {Menu.map((menuItem, index) =>(
              <Route exact path={menuItem.path} key={menuItem.path} component={lazy(() => import('./pages/tickets/Tickets'))}>
              </Route>
            ))}
        </>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
