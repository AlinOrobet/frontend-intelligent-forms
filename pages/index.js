import Head from "next/head";
import React, {useState} from "react";

import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";

import Hero from "../components/GuestComponents/Hero";
import Features from "../components/GuestComponents/Features";
import Subscriptions from "../components/GuestComponents/Subscriptions";
import Contact from "../components/GuestComponents/Contact";

export default function Home() {
  const [session, setSession] = useState(false);
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? Dashboard() : Guest()}
    </div>
  );
}
//Dashboard
function Dashboard() {
  return <DashboardLayout></DashboardLayout>;
}
//Guest
function Guest() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Subscriptions />
      <Contact />
    </MainLayout>
  );
}
