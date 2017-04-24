import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';

import Weeks from './../../components/Week'
import styles from './styles.css'

class NavMenu extends Component {
  render() {
    return (
      <div>
        <Drawer>
            <AppBar className={styles.menuHome}
                title="RED it"
                iconElementLeft={<IconButton><SiteIcon/></IconButton>}
            />
            <Weeks/>
        </Drawer>
      </div>
    );
  }
}

export default NavMenu;
