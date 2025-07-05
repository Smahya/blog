// import SearchBar from "../SearchBar";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 app-ui-bg">
      <div className="container mx-auto py-4">
        <div className="flex flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex-shrink-0">
            <Image src="/mahya.svg" alt="" width={100} height={50} />
          </Link>

          {/* Search Bar - Desktop */}
          {/* <div className="hidden md:flex w-72 mx-4">
            <SearchBar options={[]} />
          </div> */}

          <nav className="mt-2 md:mt-0">
            <div className="flex space-x-6">
              <NavbarLink />
            </div>
          </nav>
        </div>

        {/* Search Bar - Mobile */}
        {/* <div className="md:hidden mt-4">
          <SearchBar options={[]} />
        </div> */}
      </div>
    </header>
  );
}

export function NavbarLink() {
  return (
    <>
      {navbarItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          target={item.external ? "_blank" : "_self"}
          className="text-neutral-950 dark:text-neutral-50 dark:hover:text-blue-primary hover:text-blue-primary hover:underline transition-colors font-medium"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}

const navbarItems = [
  {
    name: "Blog posts",
    href: "/posts",
  },
  {
    name: "Portfolio",
    href: "https://salmasali.com",
    external: true,
  },
];
