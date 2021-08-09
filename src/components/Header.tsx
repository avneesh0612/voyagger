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
      <Link href="/" passHref>
        <Image
          width={80}
          height={80}
          objectFit="contain"
          src="/voyager.svg"
          className="cursor-pointer"
          alt="voyager"
        />
      </Link>
      {ssruser ? (
        <Link href="/api/auth/logout">{ssruser.name}</Link>
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
