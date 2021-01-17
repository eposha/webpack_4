import * as $ from 'jquery';

import Post from '@models/Post';
import json from './assets/json';
import WebpackLogo from '@/assets/webpack-logo';
import xml from './assets/data.xml';
import csv from './assets/data.csv';
import './styles/styles.css';
import './styles/scss.scss';

import React from 'react';
import { render } from 'react-dom';
const post = new Post('Webpack post title', WebpackLogo);

$('pre').addClass('code').html(post.toSting());

const App = () => {
  const test = 42;
  console.log(test);
  return (
    <div className='container'>
      <h1>Webpack Course</h1>
      <hr />
      <div className='logo' />

      <hr />

      <pre />

      <div className='box'>
        <h2>Less</h2>
      </div>

      <div className='card'>
        <h2>Scss</h2>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('app'));

// console.log('JSON', json);
// console.log('xml', xml);
// console.log('csv', csv);
