import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode } from "react"

const NavItems: { [key: string]: string } = {
    "/": "Blog",
    "/about": "About"
}

const isCurrentlySelected = (route: string, nav: string) => {
    return route === nav
}

const Nav = () => {
    const router = useRouter()
    return (
        <nav className="flex justify-start space-x-2 font-title">
            {Object.keys(NavItems).map((key) => (
                <Link
                    key={key}
                    href={key}
                    className={[
                        isCurrentlySelected(router.route, key)
                            ? "text-black"
                            : "text-gray-400",
                        "hover:text-sky-500"
                    ].join(" ")}
                >
                    {NavItems[key]}
                </Link>
            ))}
        </nav>
    )
}

export default Nav
