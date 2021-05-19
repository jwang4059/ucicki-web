import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useUser } from "../utils/fetcher";

const NavLink = React.forwardRef(({ onClick, href, children }, ref) => {
	return (
		<a href={href} onClick={onClick} ref={ref}>
			<li>{children}</li>
		</a>
	);
});

const Header = () => {
	const { isError } = useUser();
	const [open, setOpen] = useState(false);

	const signedIn = !isError;

	return (
		<header className="min-w-full bg-black text-white px-2 py-4 fixed z-10">
			<div className="flex items-center">
				<div className="flex-grow">
					<a href="https://www.circlek.org/">
						<img
							className="w-48"
							src="https://i.imgur.com/p7Ufk3d.png"
							alt="Circle K International"
						/>
					</a>
				</div>
				<div className="flex-shrink-0">
					<div
						className="flex justify-center items-center text-4xl p-2"
						onClick={() => setOpen(!open)}
					>
						<FontAwesomeIcon icon={"bars"} />
					</div>
				</div>
			</div>

			{open && (
				<nav>
					<ul>
						<Link href="/" passHref>
							<NavLink>Home</NavLink>
						</Link>
						<Link href="/about" passHref>
							<NavLink>About</NavLink>
						</Link>
						{!signedIn && (
							<>
								<Link href="/register" passHref>
									<NavLink>Register</NavLink>
								</Link>
								<Link href="/login" passHref>
									<NavLink>Login</NavLink>
								</Link>
							</>
						)}
						{signedIn && (
							<>
								<Link href="/user" passHref>
									<NavLink>My Profile</NavLink>
								</Link>
								<Link href="/logout" passHref>
									<NavLink>Logout</NavLink>
								</Link>
							</>
						)}
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
