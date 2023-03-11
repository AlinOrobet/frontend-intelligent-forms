import Head from "next/head";
import React, {useState, useEffect} from "react";

import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";

import Hero from "../components/GuestComponents/Hero";
import Features from "../components/GuestComponents/Features";
import Subscriptions from "../components/GuestComponents/Subscriptions";
import Contact from "../components/GuestComponents/Contact";

export default function Home() {
  const [session, setSession] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setSession(true);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? <Dashboard setSession={setSession} /> : <Guest setSession={setSession} />}
    </div>
  );
}

function Dashboard(props) {
  return (
    <DashboardLayout>
      <button
        className=""
        onClick={() => {
          localStorage.removeItem("token");
          props.setSession(false);
        }}
      >
        SIGN OUT
      </button>
    </DashboardLayout>
  );
}

function Guest(props) {
  return (
    <MainLayout activeLink="home">
      <div className="flex-grow">
        <Hero />
        <Features />
        <Subscriptions />
        <Contact />
      </div>
    </MainLayout>
  );
}
