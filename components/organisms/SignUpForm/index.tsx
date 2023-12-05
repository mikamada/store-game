import React, { useState } from 'react'
import Link from 'next/link'
import cx from "classnames"
import { useRouter } from 'next/router';

export default function SingUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const formClassnames = {
    label: cx("form-label text-lg fw-medium color-palette-1 mb-10"),
    input: cx("form-control rounded-pill text-lg")
  }

  const onSubmitForm = () => {
    const userForm = {
      name,
      email,
      password
    }
    localStorage.setItem("user-form", JSON.stringify(userForm));
    router.push("/sign-up-photo");
  }
  return (
    <>
      <div className="pt-50">
        <label htmlFor="name" className={formClassnames.label}>Full Name</label>
        <input
          type="text"
          className={formClassnames.input}
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="email" className={formClassnames.label}>Email Address</label>
        <input
          type="email"
          className={formClassnames.input}
          id="email" name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className={formClassnames.label}>Password</label>
        <input
          type="password"
          className={formClassnames.input}
          id="password" name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          type="button"
          onClick={onSubmitForm}
        >
          Continue
        </button>
        <Link
          className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
          href="/sign-in"
          role="button">Sign
          In</Link>
      </div>
    </>
  )
}
