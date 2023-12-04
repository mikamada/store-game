import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"
import { JwtPayloadTypes, UserTypes } from "../../../services/data-types";
import { useRouter } from "next/router";

export default function AuthNav() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: ''
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JwtPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload?.player;
      const IMG = process.env.NEXT_PUBLIC_IMAGE;
      user.avatar = `${IMG}/${userFromPayload.avatar}`
      setIsLogin(true);
      setUser(user)
    }

  }, [isLogin]);

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/");
    setIsLogin(false);
  }

  if (isLogin) {
    return (<li className="nav-item my-auto dropdown d-flex">
      <div className="vertical-line d-lg-block d-none"></div>
      <div>
        <a className="dropdown-toggle ms-lg-40" role="button" id="dropdownMenuLink"
          data-bs-toggle="dropdown" aria-expanded="false">
          <img
            src={user.avatar}
            className="rounded-circle"
            width="40"
            height="40"
            alt=""
          />
        </a>

        <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
          <li>
            <Link href="/member" className="dropdown-item text-lg color-palette-2">My Profile</Link>
          </li>
          <li>
            <Link href="/" className="dropdown-item text-lg color-palette-2">Wallet</Link>
          </li>
          <li>
            <Link href="/member/edit-profile" className="dropdown-item text-lg color-palette-2">Account Settings</Link>
          </li>
          <li>
            <button onClick={onLogout} className="dropdown-item text-lg color-palette-2 cursor-pointer">Log Out</button>
          </li>
        </ul>
      </div>
    </li>)
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in" className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill">Sign In</Link>
    </li>
  )
}
