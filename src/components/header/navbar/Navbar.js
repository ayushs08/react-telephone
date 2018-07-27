import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InvertColors from '@material-ui/icons/InvertColors';
import logo from '../../../logo.svg';
import Typography from '@material-ui/core/Typography';

const Navbar = () => {
  return (
    <div className="navbar">
      <IconButton>
        <MenuIcon />
      </IconButton>
      <div className="brand">
        <img src={logo} alt="" height={50} className="logo"/>
        <Typography variant="title" className="brand__name">React Telephone</Typography>
      </div>
      <IconButton>
        <InvertColors />
      </IconButton>
    </div> 
  )
}
export default Navbar;