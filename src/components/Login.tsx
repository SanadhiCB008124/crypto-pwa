import React, { useState } from "react";
import coin from "/src/assets/logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import {Link, useNavigate} from "react-router-dom";
import { auth } from "../firebase";
import bgImg from "../assets/splash4.jpg"
import styles from "../style.tsx";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();


  const handleLogin = async () => {
    event?.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      console.log(user);
      navigate("/home");

    } catch (error) {
     console.log(error);
    }
  };

  return (
      <div>

          <div className=" min-h-screen grid bg-primary">
              <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">

                  <div
                      className=" w-full bg-primary h-full  flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover "
                      style={{
                          backgroundImage: `url(${bgImg})`
                      }}
                  >

                      <div className="lg:text-left text-center">
                          <div className="flex items-center justify-center">
                              <div className="bg-primary flex flex-col w-90 border-2 border-primary-500 rounded-3xl px-8 py-10">

                                  <div className="text-center m-10">
                                      <img
                                          className="mx-auto w-38 rounded-full"
                                          src={coin}
                                          alt="logo"
                                      />
                                      <h4 className={styles.heading1}>
                                          ZenithPay
                                      </h4>
                                  </div>
                                  <form>
                                      <p className="mb-4 text-white">Please login to your account</p>
                                      <div className="mb-4 flex flex-col" >

                                          <label
                                              htmlFor="email"
                                              className="text-left mb-2"
                                          >
                                              Username
                                          </label>
                                          <input
                                              type="text"
                                              onChange={(e) => setEmail(e.target.value)}
                                              id=""
                                              placeholder="Email"
                                              className=" rounded-lg py-3 px-3 bg-black   placeholder-white-500 text-white"
                                          />


                                      </div>
                                      <div className="mb-4 flex flex-col" >
                                          <label
                                              htmlFor="password"
                                              className=" text-left mb-2 "

                                          >
                                              Password
                                          </label>
                                          <input
                                              type="text"
                                              onChange={(e) => setPassword(e.target.value)}

                                              id=""
                                              placeholder="Password"
                                              className=" rounded-lg py-3 px-3 bg-black placeholder-white-500 text-white"
                                          />


                                      </div>
                                      <div className="mb-12 pt-1 text-center">
                                          <button
                                              className=" text w-full white bg-black border-2 border-primary-500 py-3 px-4 rounded-xl"
                                              type="button"
                                              onClick={handleLogin}
                                              data-te-ripple-init
                                              data-te-ripple-color="light"
                                          >
                                              Log in
                                          </button><br/>

                                          <button className=" text-white bg-green-950 w-full mt-4  py-3 px-4 rounded-xl">
                                              <Link to="/CreateWallet" >
                                                  No account? Register here
                                              </Link>
                                          </button>

                                      </div>

                                  </form>

                              </div>
                          </div>
                      </div>


                  </div>

              </div>
          </div>
      </div>






  );
};

export default Login;
