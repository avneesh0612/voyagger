import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  ssruser?: {
    name?: string;
  };
}

const Header: React.FC<HeaderProps> = ({ ssruser }) => {
  const user = useUser();

  return (
    <header className="flex items-center justify-evenly">
      <Link href="/">
        <Image
          width={100}
          height={100}
          objectFit="contain"
          src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1627972754/voyager-removebg-preview_bixjvh.png"
          className="cursor-pointer"
        />
      </Link>
      {ssruser ? (
        <a href="/api/auth/logout">{ssruser.name}</a>
      ) : (
        <Link href="/api/auth/logout">
          <a className={user.user?.name ? "" : "hidden"}>{user.user?.name}</a>
        </Link>
      )}

      {!ssruser && !user?.user && <Link href="/api/auth/login">Sign in</Link>}
    </header>
  );
};

export default Header;
