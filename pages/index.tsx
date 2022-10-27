import { randomUUID } from "crypto"
import Head from "next/head"
import Link from "next/link"

const blogs = [
    {
        id: randomUUID(),
        title: "ความรักที่บิดเบี้ยว",
        publishDate: new Date().toISOString()
    },
    {
        id: randomUUID(),
        title: "การเดินทางในถิ่นทุรกันดานของพระเยซู",
        publishDate: new Date().toISOString()
    },
    {
        id: randomUUID(),
        title: "ปัญญาจารย์ ตอนที่ 1",
        publishDate: new Date().toISOString()
    }
]

type Blog = {
    id: number
    title: string
    publishDate: string
}

type HomePageProps = {
    blogs: Blog[]
}

const HomePage = ({ blogs }: HomePageProps) => {
    return (
        <>
            <Head>
                <title>Pongneng&apos;s Website - Blog</title>
                <meta name="description" content="Pongneng's Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col space-y-4">
                {blogs.map((blog) => (
                    <Link href="#" key={blog.id}>
                        <div>
                            <div className="hover:text-sky-500">
                                {blog.title}
                            </div>
                            <div className="text-gray-400 font-caption italic text-sm">
                                comming soon
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export function getStaticProps() {
    console.log(blogs)
    return {
        props: {
            blogs
        }
    }
}

export default HomePage
