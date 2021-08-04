import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";

type HeaderProps = {
  ssruser?: Object;
};

const Header: React.FC<HeaderProps> = ({ ssruser }) => {
  const user = useUser();
  return (
    <header className="flex items-center justify-evenly">
      <Image
        width={100}
        height={100}
        objectFit="contain"
        src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1627972754/voyager-removebg-preview_bixjvh.png"
      />
      {ssruser ? (
        <a href="/api/auth/logout">{ssruser.name}</a>
      ) : (
        <a href="/api/auth/logout">{user.user?.name}</a>
      )}

      {!ssruser && !user?.user && <a href="/api/auth/login">Sign in</a>}
    </header>
  );
};

export default Header;
