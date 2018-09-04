import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Code from '@material-ui/icons/Code';
import Typography from '@material-ui/core/Typography';

import logo from '../../logo.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <img src={logo} alt="" height={50} className="logo"/>
        <Typography variant="title" className="brand__name">React Telephone</Typography>
      </div>
      <IconButton>
        <Code />
      </IconButton>
    </div> 
  )
}
export default Navbar;