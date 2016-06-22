import React from 'react';

const SettingsItemMenu = ({content = () => null }) => (
  <li>
    <a href='#' data-toggle='control-sidebar'><i className='fa fa-gears'></i></a>
  </li>
);

export default SettingsItemMenu;
