import React, { useState } from "react";
import axios from "axios";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [username, setUsername] = useState("username");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState("password");

  const handleLogin = () => {
    const data = {
      username: "username",
      password: "password"
    };

    axios
      .post("http://127.0.0.1/rest_ci3/ci-restserver-master/index.php/user", data)
      .then((response) => {
        // Tangani respons berhasil di sini
        console.log(response.data);
      })
      .catch((error) => {
        // Tangani kesalahan di sini
        console.error(error);
      });
  };
  return (
    <body class="bg-gradient-primary">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                {/*<!-- Nested Row within Card Body -->*/}
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form class="user">
                        <div class="form-group">
                          <input type="email" class="form-control form-control-user" aria-describedby="emailHelp" placeholder="Enter Email Address..." value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div class="form-group">
                          <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <a onClick={handleLogin} class="btn btn-primary btn-user btn-block">
                          Login
                        </a>
                      </form>
                      <hr />
                      <div class="text-center">
                        <a class="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div class="text-center">
                        <a class="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default login;
