import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Tables = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1/rest_ci3/ci-restserver-master/index.php/kuliah").then((response) => setData(response.data));
  }, []);

  console.log(data);

  const deletePost = () => {
    axios
      .delete("http://127.0.0.1/rest_ci3/ci-restserver-master/index.php/kuliah", {
        body: "nidn",
        headers: {
          "Content-Type": "application/json"
          // Tambahkan header lain yang diperlukan oleh server jika ada
        }
      })
      .then((response) => {
        console.log("deleted successfully!");
        //console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                <th>NIDN</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Perbarui</th>
                <th>Hapus</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.no}>
                  <td>{item.nidn}</td>
                  <td>{item.nm_dos}</td>
                  <td>{item.alm_dos}</td>
                  <td>
                    <button onClick={() => navigate("./tambah.jsx/${item.no}")} className="btn btn-primary">
                      Perbarui
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={deletePost("nidn")}>
                      Hapus
                    </button>
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

export default Tables;
