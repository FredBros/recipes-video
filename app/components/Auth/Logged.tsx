"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";

type Props = {
  image: string;
};

const Logged = ({image}:Props) => {
  return (
    <>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={image} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"#"} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link href={"#"}>Settings</Link>
            </li>
            <li>
              <span onClick={() => signOut()}>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Logged;
