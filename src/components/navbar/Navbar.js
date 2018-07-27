import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Code from '@material-ui/icons/Code';
import Search from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

import logo from '../../logo.svg';
import SearchBar from './SearchBar';

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
        <Search />
      </IconButton>
      <IconButton>
        <Code />
      </IconButton>

      <SearchBar />

    </div> 
  )
}
export default Navbar;