import React from "react";

const sidebar = () => {
  return (
    <div>
      <body id="page-top">
        {/*Page Wrapper*/}
        <div id="wrapper"></div>
        {/*Sidebar*/}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          {/*<!-- Sidebar - Brand -->*/}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15"></div>
            <div className="sidebar-brand-text mx-3">Tampil Kuliah</div>
          </a>

          {/*Divider*/}
          <hr className="sidebar-divider my-0" />

          {/*Nav Item - Dashboard*/}
          <li className="nav-item active">
            <a className="nav-link" href="Dashboard">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>

          {/*Divider*/}
          <hr className="sidebar-divider" />

          {/*Heading*/}
          <div className="sidebar-heading">INFORMASI PERKULIAHAN</div>

          {/*Nav Item - Pages Collapse Menu*/}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <span>Dosen Fakultas Teknik</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="Tables">
                  Dosen
                </a>
              </div>
            </div>
          </li>

          {/*<!-- Nav Item - Utilities Collapse Menu -->*/}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
              <span>Data Mahasiswa</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Utilities:</h6>
                <a className="collapse-item" href="industri">
                  Teknik Industri
                </a>
                <a className="collapse-item" href="informatika">
                  Teknik Informatika
                </a>
                <a className="collapse-item" href="informasi">
                  Teknologi Informasi
                </a>
                <a className="collapse-item" href="otomotif">
                  Teknik Otomotif
                </a>
              </div>
            </div>
          </li>

          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider my-0" />

          {/*<!-- Heading -->*/}

          {/*<!-- Nav Item - Tables -->*/}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseB" aria-expanded="true" aria-controls="collapseB">
              <span>Daftar Mata Kuliah</span>
            </a>
            <div id="collapseB" className="collapse" aria-labelledby="headingB" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="Tables">
                  Teknik Industri
                </a>
                <a className="collapse-item" href="informatika">
                  Teknik Informatika
                </a>
                <a className="collapse-item" href="matkul">
                  Teknologi Informasi
                </a>
                <a className="collapse-item" href="otomotif">
                  Teknik Otomotif
                </a>
              </div>
            </div>
          </li>

          {/*<!-- Nav Item - Charts -->*/}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseChart" aria-expanded="true" aria-controls="collapseChart">
              <span>Jadwal Kuliah</span>
            </a>
            <div id="collapseChart" className="collapse" aria-labelledby="headingChart" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="Tables">
                  Teknik Industri
                </a>
                <a className="collapse-item" href="informatika">
                  Teknik Informatika
                </a>
                <a className="collapse-item" href="jdwlinfrd3">
                  Teknologi Informasi
                </a>
                <a className="collapse-item" href="otomotif">
                  Teknik Otomotif
                </a>
              </div>
            </div>
          </li>

          {/*<!-- Nav Item - Pages Collapse Menu -->*/}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder"></i>
              <span>Pengaturan Akun</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Login Screens:</h6>
                <a className="collapse-item" href="login">
                  Login
                </a>
                <a className="collapse-item" href="register.html">
                  Register
                </a>
                <a className="collapse-item" href="forgot-password.html">
                  Forgot Password
                </a>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Other Pages:</h6>
                <a className="collapse-item" href="404.html">
                  404 Page
                </a>
                <a className="collapse-item" href="blank.html">
                  Blank Page
                </a>
              </div>
            </div>
          </li>

          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider d-none d-md-block" />

          {/*<!--  <!-- Sidebar Toggler (Sidebar) --> -->*/}

          {/*<!-- Sidebar Message -->*/}
        </ul>
        {/*<!-- End of Sidebar -->
         *<!-- Content Wrapper -->*/}
      </body>
    </div>
  );
};

export default sidebar;
