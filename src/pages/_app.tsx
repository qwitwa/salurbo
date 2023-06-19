import { type AppType } from "next/app";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";
import Head from "next/head";
import Link from "next/link";
import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

const InnerLayout = ({ children }: { children: ReactNode }) => {
  const user = useUser();
  return (
    <>
      <Head>
        <title>Salurbo Basin</title>
        <meta name="description" content="The Salurbo river valley region." />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <header className=" min-h-8 flex flex-row items-center gap-8 bg-slate-600 p-2 font-bold text-gray-50">
          <Link href="/"> Home </Link>
          <Link href="/characters"> Characters </Link>
          <Link href="/rules"> Rules </Link>
          <div className="ml-auto">
            {!user.isSignedIn && <SignInButton />}
            {!!user.isSignedIn && <UserButton />}
          </div>
        </header>
        <main className="flex flex-auto flex-col bg-slate-300">{children}</main>
      </div>
    </>
  );
};

const AppWithClerk: AppType = ({ Component, pageProps }) => (
  <ClerkProvider {...pageProps}>
    <InnerLayout>
      <Component {...pageProps} />
    </InnerLayout>
  </ClerkProvider>
);
export default api.withTRPC(AppWithClerk);
