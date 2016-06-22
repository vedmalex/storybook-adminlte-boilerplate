import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Control from '../control.jsx';
import '/public/css/skins/skin-blue.min.css';

storiesOf('Sidebar Control', module)
  .add('default Control', () => (
  <div className='hold-transition skin-blue sidebar-mini'>
    <div className='wrapper'>
      <header className='main-header'>
        <nav className='navbar navbar-static-top'>
          <div className = 'navbar-custom-menu'>
            <ul className='nav navbar-nav'>
              <li>
                <a href='#' data-toggle='control-sidebar'><i className='fa fa-gears'></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className='content-wrapper'>
        <section className='content-header'>
          <h1>
            Page Header
            <small>Optional description</small>
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard'></i> Level</a></li>
            <li className='active'>Here</li>
          </ol>
        </section>
        <section className='content'>
        </section>
      </div>
    </div>
    <Control/>
  </div>
  ));
