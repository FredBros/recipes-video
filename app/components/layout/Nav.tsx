import React from 'react'
import Link from 'next/link';
import { Login, Logged } from '../';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href={"/"}>
            <div className="btn btn-ghost normal-case text-xl">spoOon</div>
          </Link>
        </div>
        {!session?.user && <Login />}
        {session?.user && <Logged image={session.user?.image || ""} />}
      </div>
    </nav>
  );
}

export default Nav