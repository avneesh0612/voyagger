import { getSession, signIn, signOut } from "next-auth/client";

export default function Home({ session }) {
  return (
    <div>
      {session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
      {session && (
        <div>
          <p>Signed in as {session.user.email}</p>
          <p>Name: {session.user.name}</p>
          <img src={session.user.image} alt={session.user.name} />
        </div>
      )}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: { destination: "/signin" },
    };
  }

  return {
    props: {
      session,
    },
  };
};
