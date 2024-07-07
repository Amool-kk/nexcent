import React from "react";
import { Button } from "../ui/button";
import CompanyLogo from "./companyLogo";
import ThemeSwitcher from "../themeSwitch";

export default function Nav() {
  return (
    <div className="dark:bg-[#263238]" >
      <div className="flex justify-center py-5 border-none">
        <div className="flex-1 flex justify-center items-center">
          <CompanyLogo />
        </div>
        <div className="hidden lg:block my-auto" >
          <div className="flex list-none gap-10 flex-1 items-center justify-center">
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </div>
        </div>
        <div className="flex-1 flex lg:justify-center justify-between items-center">
          <Button variant={"other"}>Login</Button>
          <Button size={"default"}>Sign up</Button>
          <ThemeSwitcher/>
        </div>
      </div>
    </div>
  );
}
