import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

class Header extends Component{

    toggleUserPanel = () => {
        this.props.onClick();
    }
  
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon  onClick={this.toggleUserPanel}/>
                </IconButton>
                <Typography variant="title" color="inherit">
                    {this.props.roomName}
                </Typography>
                </Toolbar>
            </AppBar>
            </div>
        );
  }
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);