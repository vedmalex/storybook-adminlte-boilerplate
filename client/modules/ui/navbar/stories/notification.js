
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import NotificationItemMenu from '../notification.jsx';
import '/public/css/skins/skin-blue.min.css';

storiesOf('NotificationItemMenu', module)
  .add('default NotificationItemMenu', () => (
  <div className='hold-transition skin-blue sidebar-mini'>
    <div className='wrapper'>
      <header className='main-header'>
        <nav className='navbar navbar-static-top'>
          <a href='#' className='sidebar-toggle' data-toggle='offcanvas' role='button'>
            <span className='sr-only'>Toggle navigation</span>
          </a>
          <div className = 'navbar-custom-menu'>
            <ul className='nav navbar-nav'>
              <NotificationItemMenu/>
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
  </div>
  ));
