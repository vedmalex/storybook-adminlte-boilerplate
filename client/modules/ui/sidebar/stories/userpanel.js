import React from 'react';
import { storiesOf } from '@kadira/storybook';
import UserPanel from '../userpanel.jsx';
import '/public/css/skins/skin-blue.min.css';

storiesOf('Sidebar UserPanel', module)
  .add('default UserPanel', () => (
  <div className='hold-transition skin-blue sidebar-mini'>
    <div className='wrapper'>
      <header className='main-header'>
        <nav className='navbar navbar-static-top'>
          <div className = 'navbar-custom-menu'>
            <ul className='nav navbar-nav'>
            </ul>
          </div>
        </nav>
      </header>
      <aside className='main-sidebar'>
        <section className='sidebar'>
              <UserPanel/>
        </section>
      </aside>
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
