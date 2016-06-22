import React from 'react';

const Form = ({action='#', method = 'get', }) => (
  <form action={action} method={method} className='sidebar-form'>
    <div className='input-group'>
      <input type='text' name='q' className='form-control' placeholder='Search...'/>
      <span className='input-group-btn'>
        <button type='submit' name='search' id='search-btn' className='btn btn-flat'>
          <i className='fa fa-search'/>
        </button>
      </span>
    </div>
  </form>
);

export default Form;

