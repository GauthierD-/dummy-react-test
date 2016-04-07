import React from 'react'
import { Link, browserHistory } from 'react-router'

// import material-ui
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import NavMenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';



export default function App({ children }) {
  return (
    <div>
      <AppBar
      title="Title"
      iconElementLeft={
        <IconMenu
          iconButtonElement={ <IconButton><NavMenuIcon color='white' /></IconButton> }
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          <MenuItem
            primaryText='Homepage'
            onClick={() => {
              browserHistory.push('/');
            }}
          />
          <MenuItem
            primaryText='Foo Page'
            onClick={() => {
              browserHistory.push('/foo');
            }}
          />
          <MenuItem
            primaryText="Bar Page"
            onClick={() => {
              browserHistory.push('/bar');
            }}
          />
        </IconMenu>

      }
      />
      <div>
        <RaisedButton
          label="Default btn Go to /foo"
          style={{margin: 12}}
          onClick={() => browserHistory.push('/foo')}
        />
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}
