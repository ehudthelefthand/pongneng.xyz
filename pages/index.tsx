import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profile from "../profile.jpg";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Pongneng&apos;s Website</title>
                <meta name="description" content="Pongneng's Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Image src={profile} alt="Pongneng's Profile Picture" />
            </div>
            <nav>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
            </nav>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
