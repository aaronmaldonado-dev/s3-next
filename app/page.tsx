"use client";
import { useSession } from "next-auth/react";

import AuthButton from "./components/AuthButton";
import AuthContent from "./components/AuthContent";

export default function Home() {
  const { data, status } = useSession();
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">S3 Test Project</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {status === "authenticated" && <li className="justify-center mr-4">Welcome {data?.user?.name}</li>}
            <li>
              <AuthButton />
            </li>
          </ul>
        </div>
      </div>
      {/* Container */}
      <div className=" container mx-auto py-4">
        {status === "unauthenticated" && <p>Please sign in to see the files you have available</p>}
        {status === "authenticated" && <AuthContent username={data?.user?.name} /> }
      </div>
    </div>
  );
}
