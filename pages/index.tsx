import type { NextPage } from "next";
import Head from "next/head";

import { ChannelSection, ChatSection } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meet.ai</title>
        <meta
          name="description"
          content="A platform where you can practise your English speaking skills through chatting with AI-powered bots."
        />
        <meta name="og:title" content="Meet.ai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-row gap-3 items-center justify-center min-h-screen">
        <ChannelSection />
        <ChatSection />
      </main>
    </>
  );
};

export default Home;
