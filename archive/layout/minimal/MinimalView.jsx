import React from "react";
import './MinimalView.css';

const MinimalView = (props) => {
  const { children } = props;

  return <main className='MinimalView'>{children}</main>;
};

export default MinimalView;
