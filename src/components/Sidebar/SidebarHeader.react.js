/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */
import Icon           from 'components/Icon/Icon.react';
import { Link }       from 'react-router-dom';
import React          from 'react';
import styles         from 'components/Sidebar/Sidebar.scss';
// get the package.json environment variable
const version = process.env.version;

let SidebarHeader = () => (
<div className={styles.header}>
  <Link to='/apps'>
    <div className={styles.version}>
      <div>ACNAPI Developer Dashboard</div>
    </div>
  </Link>
</div> );

export default SidebarHeader
