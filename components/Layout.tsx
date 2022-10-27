import Image from "next/image"
import profile from "../profile.jpg"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import Nav from "./Nav"

type LayoutProps = {
    children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter()
    const route = router.route.replace("/", "")
    const pageName = route === "" ? "Blog" : route

    return (
        <div className="max-w-xl mx-auto mt-24 font-body">
            <div className="my-4">
                <Image
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src={profile}
                    alt="Pongneng's Profile Picture"
                />
            </div>
            <h1 className="text-xl my-4 font-title">
                {`${pageName.charAt(0).toUpperCase()}${pageName.slice(1)}`}
            </h1>
            <Nav />
            <div className="my-8 border-b border-gray-200"></div>
            <main>{children}</main>
        </div>
    )
}

export default Layout
