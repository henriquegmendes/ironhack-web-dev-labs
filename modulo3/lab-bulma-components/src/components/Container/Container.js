import React from 'react';

import './Container.css';

const Container = (props) => {
  return (
    <div class="container is-widescreen">
      {props.children}
    </div>
  );
};

export default Container;
