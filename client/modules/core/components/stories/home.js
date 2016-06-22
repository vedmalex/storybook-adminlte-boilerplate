
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Home from '../home.jsx';

storiesOf('Home', module)
  .add('just home', () => (
    <Home/>
  ));
