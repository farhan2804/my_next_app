import Link from "next/link";
const Home = () => {
  return (
    <div>
      <h1> Welcome to Next.js</h1>

      <Link href="/">Home</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Home;
