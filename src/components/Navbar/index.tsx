import { Popover, PopoverButton, PopoverPanel, Transition, PopoverBackdrop } from "@headlessui/react";
import { Fragment } from "react";
import LogoComponent from "@/components/LogoComponent";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Navbar() {

  return (
      <Popover className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24 z-40">
        <LogoComponent />
        <div className="grow">
          <div
            className=" hidden sm:flex items-center justify-center gap-2 md:gap-8">
            <Link href="/">Home</Link>
            <Link href="Events">Events</Link>
            <Link href="membership">Membership</Link>
            <Link href="Gallery">Gallery</Link> <Link href="aboutus">Contact Us</Link>
            
             </div>
            
        </div>
        <div className="flex grow items-center justify-end sm:hidden">
          <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus: ring-indigo-500"> <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" /> </PopoverButton>
        </div>
        <PopoverBackdrop className="sm:hidden fixed inset-0 bg-black opacity-30 " />
        <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
          <PopoverPanel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-40">
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50"> <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold">SSK samaj Kanchipuram</h1>
                <div className="-mr-2">
                  <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link className="Focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="/">
                    Home </Link>
                  <Link className="Focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="Events">
                    Events </Link>
                    <Link className="Focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="membership">
                    Membership </Link>
                  <Link className="Focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="Gallery">
                    Gallery </Link>
                    <Link className="Focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2" href="aboutus">
                    Contact us </Link>
                </nav>
              </div>
              <div className="mt-6 flex flex-col items-center gap-2">
                <Link href="register" className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus: ring-2 focus: ring-inset focus: ring-gray-500"> Sign up </Link>
                <Link href="login" className="rounded-md bg-gray-500 px-4 py-2 text-sm font-medium md: text-x1 w-full focus:outline-none focus: ring-2 focus: ring-inset focus: ring-gray-500"> Login
                </Link>
              </div>
            </div>
            </div>
          </PopoverPanel>
        </Transition>
        <div className="hidden sm:block">
          <Link href="signup" className="mx-2 font-bold">
            Sign up
          </Link>
          <Link href="login" className="font-bold">
            Login
          </Link>
        </div>
      </Popover>
  );
};
