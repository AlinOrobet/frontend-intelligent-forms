import {useRouter} from "next/router";
import React from "react";
import Image from "next/image";
function UserProfile({openUserProfile, setOpenUserProfile, user}) {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => setOpenUserProfile(!openUserProfile)}
        className="duration-500 transition-all p-1 hover:rounded-full"
      >
        {user.image ? (
          <div className="relative h-8 w-8">
            <Image
              src="/user2.jpg"
              className="rounded-full bg-white object-cover"
              alt="user_image"
              fill
            />
          </div>
        ) : (
          <div className="h-9 w-9 rounded-full bg-white hover:bg-lightBlue hover:text-primary flex items-center justify-center text-md text-third font-bold duration-500 transition-all">
            {user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase()}
          </div>
        )}
      </button>
      {user.subscription.status === "Inactive" && (
        <span className="md:hidden absolute h-3 w-3 bg-red-500 top-5 rounded-full"></span>
      )}

      <div
        className={`${
          openUserProfile ? "inline" : "hidden opacity-0"
        } absolute right-1 top-[3.8rem] flex w-52 md:w-56 lg:w-64 2xl:w-72 flex-col gap-3 bg-button p-2 text-slate-100 shadow-lg duration-500 z-30 rounded-md`}
      >
        <div className="flex gap-3 items-center">
          {user.image ? (
            <div className="relative h-9 w-9 md:h-12 md:w-12">
              <Image src="/user2.jpg" className="object-cover rounded-lg" alt="user_image" fill />
            </div>
          ) : (
            <div className="h-9 w-9 md:h-12 md:w-12 rounded-full bg-white text-third  flex items-center justify-center text-md font-bold">
              {user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <div className="flex gap-1 text-sm font-semibold">
              <span>{user.lastName + " " + user.firstName}</span>
              <span className="text-sky-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
                </svg>
              </span>
            </div>
            <div className="text-xs text-slate-400">{user.email}</div>
          </div>
        </div>
        <div className="border-t border-slate-500/30"></div>
        <div className="flex justify-around">
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold">{user.forms.length}</span>
            <span className="text-sm text-slate-400">Completed</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold">
              {user.subscription.type === "BASIC" && user.subscription.status === "Active"
                ? 10
                : user.subscription.type === "PRO" && user.subscription.status === "Active"
                ? "50"
                : "3"}
            </span>
            <span className="text-sm text-slate-400">Available</span>
          </div>
        </div>
        <div className="border-t border-slate-500/30"></div>
        <div className="flex flex-col">
          <a href="#" className="flex items-center gap-3 rounded-md py-2 px-3 hover:bg-lightBlue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"></path>
            </svg>
            <span>Profile</span>
          </a>
          <a
            href="#"
            className="relative flex items-center gap-3 rounded-md py-2 px-3 hover:bg-lightBlue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
            </svg>
            {user.subscription.status === "Inactive" && (
              <span className="md:hidden absolute h-3 w-3 bg-red-500 top-2 left-6 rounded-full"></span>
            )}
            <span>Subscriptions</span>
          </a>
          <a href="#" className="flex items-center gap-3 rounded-md py-2 px-3 hover:bg-lightBlue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
            </svg>
            <span>Help Center</span>
          </a>
        </div>
        <button
          className="flex justify-center gap-3 rounded-md bg-red-600 py-2 px-3 font-semibold hover:bg-red-500 focus:ring-2 focus:ring-red-400"
          onClick={() => {
            localStorage.removeItem("token");
            router.reload(window.location.pathname);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"></path>
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </>
  );
}

export default UserProfile;
