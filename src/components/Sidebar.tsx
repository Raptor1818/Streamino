import React from 'react'

import css from '../styles/Sidebar.module.css';

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className={css.sidebarContainer}>
      <ul>
        <li>Library</li>
        <li>Library</li>
        <li>Library</li>
        <li>Library</li>
      </ul>
    </div>
  )
}

export default Sidebar