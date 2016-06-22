import React from 'react';

const SidebarUserPanel = ({imgUrl='/img/user.png', FullName='Mr. Smith', status ='Online'}) => (
      <div className='user-panel'>
        <div className='pull-left image'>
          <img src={imgUrl} className='img-circle' alt='User Image'/>
        </div>
        <div className='pull-left info'>
          <p>{FullName}</p>
          <a href='#'><i className='fa fa-circle text-success'></i> {status}</a>
        </div>
      </div>
);

export default SidebarUserPanel;

