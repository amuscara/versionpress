import * as React from 'react';

interface BodyProps {
  children?: React.ReactElement<any>;
}

const Body: React.StatelessComponent<BodyProps> = ({ children }) => (
  <div className='Modal-body'>
    {children}
  </div>
);

export default Body;
