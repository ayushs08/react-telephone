import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const SearchBar = () => {
  return (
    <Paper className="search-bar">
      <TextField
          id="name"
          label="Search"
          margin="normal"
          fullWidth
        />
    </Paper>
  )
}
export default SearchBar;