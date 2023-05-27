import React from "react";
import { basicPost } from "../api";

export default function Register() {
  // const [user] = useLSState("user", null);
  return (
    <div className="h-full font-mono flex justify-center items-center">
      <form className="p-2 border" onSubmit={basicPost("/user/register")} method="post">
        <label htmlFor={`in_username`} className="">
          username
        </label>
        <br />
        <input
          className="border  px-1"
          type="username"
          aria-describedby={`help_in_username`}
          id={`in_username`}
          name="username"
        />
        <br />
        <label htmlFor={`in_email`} className="">
          Email
        </label>
        <br />
        <input
          className="border  px-1"
          type="email"
          aria-describedby={`help_in_email`}
          id={`in_email`}
          name="email"
        />
        <br />
        <label htmlFor={`in_password`} className="">
          Password
        </label>
        <br />
        <input
          className="border  px-1"
          type="password"
          aria-describedby={`help_in_password`}
          id={`in_password`}
          name="password"
        />
        <br />
        <label htmlFor={`in_r_password`} className="">
          Repeat Password
        </label>
        <br />
        <input
          className="border  px-1"
          type="password"
          aria-describedby={`help_in_r_password`}
          id={`in_r_password`}
          name="r_password"
        />
        <br />
        <button className="border mt-1 px-4 ">Sign in</button>
        {/* {user && (
            <Link href="/my_domains">
              <a className="mt-1 ml-2 px-4 ">
                Go to My Domains
              </a>
            </Link>
          )} */}
      </form>
    </div>
  );
}
