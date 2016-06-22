
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import AccountItemMenu from '../account.jsx';
import '/public/css/skins/skin-blue.min.css';

storiesOf('AccountItemMenu', module)
  .add('default AccountItemMenu', () => (
  <div className='hold-transition skin-blue sidebar-mini'>
    <div className='wrapper'>
      <header className='main-header'>
        <a href='#' className='logo'>
          <span className='logo-mini'><b>A</b>LT</span>
          <span className='logo-lg'><b>Admin</b>LTE</span>
        </a>
        <nav className='navbar navbar-static-top'>
          <a href='#' className='sidebar-toggle' data-toggle='offcanvas' role='button'>
            <span className='sr-only'>Toggle navigation</span>
          </a>
          <div className = 'navbar-custom-menu'>
            <ul className='nav navbar-nav'>
              <AccountItemMenu/>
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
