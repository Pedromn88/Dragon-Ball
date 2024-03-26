import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Link href="/" className="header-container">
      <Image
        width={300}
        height={200}
        alt={`Logo Dragon Ball`}
        src={"/dragon_ball_logo.svg"}></Image>
    </Link>
  );
}
