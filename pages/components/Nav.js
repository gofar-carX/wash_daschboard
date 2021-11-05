import React from 'react'

export default function Nav() {
    return (
        <aside className="left-sidebar">
        <div className="scroll-sidebar">
         
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
             
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i data-feather="home" className="feather-icon"></i>
                  <span className="hide-menu"
                    >Wash
                   </span>
                </a>
             </li>
             <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i data-feather="settings" className="settings-icon"></i>
                  <span className="hide-menu"
                    >Repair
                  </span>
                 
                </a>
             </li>
             <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i data-feather="eye" className="feather-icon"></i>
                  <span className="hide-menu"
                    >Maintenance
                    </span>
                </a>
             </li>
             <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i data-feather="monitor" className="feather-icon"></i>
                  <span className="hide-menu"
                    >Dashboard
                 </span>
                </a>
             </li>
             <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i data-feather="users" className="feather-icon"></i>
                  <span className="hide-menu"
                    >Workers
                    </span>
                </a>
             </li>
             <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i data-feather="clipboard" className="feather-icon"></i>
                  <span className="hide-menu"
                    >History
                </span>
                </a>
             </li>
             <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <i data-feather="log-out" className="feather-icon"></i>
                  <span className="hide-menu"
                    >LogOut
                    </span>
                </a>
             </li>
   
            </ul>
          </nav>
        </div>
      </aside>
    )
}
