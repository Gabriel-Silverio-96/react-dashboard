import React from 'react';
import ReactDOM from 'react-dom';

import Aside from './components/aside/index';
import Header from './components/header';

//Pages
import Index from './pages/index/index';
import User from './pages/user/user';
import Edit from './pages/edit/edit';
import Post from './pages/post/post';
import DetailPost from './pages/detailPost/detailPost';
import Contact from './pages/contact/contact';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Aside />
    <Switch>
      <Route path="/" exact={true} component={Index} />
      <Route path="/usuarios" component={User} />
      <Route path="/editar/:id"  component={Edit} />
      <Route path="/post"  component={Post} />
      <Route path="/detalhe-post/:id"  component={DetailPost} />
      <Route path="/contato"  component={Contact} />
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);