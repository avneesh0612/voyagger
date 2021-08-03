import Image from "next/image";
import Link from "next/link";

function Header({ user }) {
  return (
    <header className="flex items-center justify-evenly">
      <Image
        width={100}
        height={100}
        objectFit="contain"
        src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1627972754/voyager-removebg-preview_bixjvh.png"
      />
      {user ? (
        <a href="/api/auth/logout">{user.name}</a>
      ) : (
        <Link href="/api/auth/login">Sign in</Link>
      )}
    </header>
  );
}

export default Header;
