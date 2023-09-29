import React, { useState } from "react";
import coin from "/src/assets/coin.jpg";
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
                                          className="mx-auto w-48 rounded-full"
                                          src={coin}
                                          alt="logo"
                                      />
                                      <h4 className={styles.heading1}>
                                          Bit Wallet
                                      </h4>
                                  </div>
                                  <form>
                                      <p className="mb-4 text-white">Please login to your account</p>
                                      <div className="relative mb-4" data-te-input-wrapper-init>
                                          <input
                                              type="text"
                                              name="email"
                                              onChange={(e) => setEmail(e.target.value)}
                                              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none dark:placeholder-text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                                              id=""
                                              placeholder="Username"
                                          />
                                          <label
                                              htmlFor="email"
                                              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                          >
                                              Username
                                          </label>
                                      </div>
                                      <div className="relative mb-4 border-1 border-black" data-te-input-wrapper-init>
                                          <input
                                              type="password"
                                              name="password"
                                              className="peer  block min-h-[auto] w-full rounded border-1 border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none dark:placeholder-text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                                              id=""
                                              onChange={(e) => setPassword(e.target.value)}
                                              placeholder="Password"
                                          />
                                          <label
                                              htmlFor="password"
                                              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                          >
                                              Password
                                          </label>
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
