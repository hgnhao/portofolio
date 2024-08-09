import Link from "next/link";

const NavLink = ({href, title} ) => {
    return (
        <Link 
            href={href} 
            className="block py-3 pl-1 pr-1 lg:py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 sm:text-xl font-semibold rounded md:p-0 hover:text-slate-300">
            {title}
        </Link>
    );
};

export default NavLink;