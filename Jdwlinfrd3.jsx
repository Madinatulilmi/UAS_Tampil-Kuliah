import React, { useEffect, useState } from "react";
import "./navbar";
import "./industri";
import "./sidebar";
import "./tambah";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Jdwlinfrd3 = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios.get("http://127.0.0.1/rest_ci3/ci-restserver-master/index.php/jadwal").then((response) => setData(response.data));
  }, []);

  console.log(data);

  return (
    <div>
      <div className="container-fluid">
        {/*<!-- Page Heading -->*/}
        <h1 className="h3 mb-2 text-gray-800">Tables</h1>

        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4" />
        <div className="card-header py-3" />
        <h6 className="m-0 font-weight-bold text-primary">Data Dosen</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <button onClick={() => navigate("./tambah")} className="btn btn-primary mb-4">
            Tambah Data
          </button>
          <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>Kode Jadwal</th>
                <th>NIDN</th>
                <th>Kode Mata Kuliah</th>
                <th>Waktu</th>
                <th>Ruang</th>
                <th>Kelas</th>
                <th>Hari</th>
                <th>Tahun Ajaran</th>
                <th>Semester</th>
                <th>User</th>

                <th>Perbarui</th>
                <th>Hapus</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.no}>
                  <td>{item.kd_jadwal}</td>
                  <td>{item.nidn}</td>
                  <td>{item.kd_matkul}</td>
                  <td>{item.waktu}</td>
                  <td>{item.ruang}</td>
                  <td>{item.kelas}</td>
                  <td>{item.hari}</td>
                  <td>{item.ta}</td>
                  <td>{item.sem}</td>
                  <td>{item.user}</td>

                  <td>
                    <button onClick={() => navigate("./tambah.jsx/${item.no}")} className="btn btn-primary">
                      Perbarui
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/*<!-- /.container-fluid -->*/}

      {/*<!-- End of Main Content -->

<!-- Footer -->*/}
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2021</span>
          </div>
        </div>
      </footer>

      {/*<!-- End of Footer -->*/}

      {/*<!-- End of Content Wrapper -->*/}

      {/*<!-- End of Page Wrapper -->

<!-- Scroll to Top Button-->*/}
    </div>
  );
};

export default Jdwlinfrd3;
