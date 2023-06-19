import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

import DNDChar from "~/components/DNDChar";

export default function Home() {
  const user = useUser();

  const { data } = api.posts.getAll.useQuery();
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
        <header className="flex flex-row bg-slate-600 p-2 font-bold text-gray-50">
          <Link href="/characters"> Characters </Link>
          <div className="ml-auto">
            {!user.isSignedIn && <SignInButton />}
            {!!user.isSignedIn && <SignOutButton />}
          </div>
        </header>
        <main className="flex flex-col">
          <DNDChar />
          <div>
            {data?.map((post) => (
              <div key={post.id}>
                {post.content}{" "}
                <span className="font-mono font-bold text-red-500 underline">
                  {post.authorId}
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
