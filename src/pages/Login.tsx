import React from "react";
import { basicPost } from "../api";

export default function Login() {
  // const [user] = useLSState("user", null);
  const handleSubmit = () => {
    return basicPost("/user/login", (res) => { 
      localStorage.setItem("user", JSON.stringify(res.user));
    });
  };

  return (
    <div className="h-full font-mono flex justify-center items-center">
      <form className="p-2 border" onSubmit={handleSubmit()} method="post">
        <label htmlFor={`in_email`}>Email</label>
        <br />
        <input
          className="border  px-1"
          type="email"
          aria-describedby={`help_in_email`}
          id={`in_email`}
          name="email"
        />
        <br />
        <label htmlFor={`in_password`}>Password</label>
        <br />
        <input
          className="border px-1"
          type="password"
          aria-describedby={`help_in_password`}
          id={`in_password`}
          name="password"
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
