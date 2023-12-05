import React, { useState } from 'react'
import Link from 'next/link'
import cx from "classnames"
import Cookies from "js-cookie"
import { useRouter } from 'next/router';
import { setSignIn } from '../../../services/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formStyles = {
    label: cx("form-label text-lg fw-medium color-palette-1 mb-10"),
    input: cx("form-control rounded-pill text-lg")
  }

  const onSubmit = async () => {
    const data = {
      email,
      password
    }

    if (!email || !password) {
      toast.error("Email dan Password harus diisi");
    } else {
      const response = await setSignIn(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Login Success");
        const { token } = response.data;
        const tokenBase64 = btoa(token);
        Cookies.set("token", tokenBase64, {
          expires: 1,
          path: "/",
        });
        router.push("/");
      }

    }
  }

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
      <div className="pt-50">
        <label className={formStyles.label}>Email
          Address
        </label>
        <input
          type="email"
          className={formStyles.input}
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label className={formStyles.label}>Password</label>
        <input
          type="password"
          className={formStyles.input}
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          type='button'
          onClick={onSubmit}
        >
          Continue to Sign In
        </button>

        <Link
          className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
          href="/sign-up"
          role="button"
        >
          Sign Up
        </Link>
      </div>
      <ToastContainer />
    </>
  )
}
