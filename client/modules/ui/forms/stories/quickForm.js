
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import QuickForm from '../quickForm.jsx';
import '/public/css/skins/skin-blue.min.css';

storiesOf('QuickForm', module)
  .add('default QuickForm', () => (
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
          <QuickForm/>
        </section>
      </div>
    </div>
  </div>
  ))
   .add('default another QuickForm', () => (
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
          <QuickForm/>
        </section>
      </div>
    </div>
  </div>
  ));
