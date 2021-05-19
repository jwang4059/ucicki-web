import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useUser } from "../utils/fetcher";

const ListItem = React.forwardRef(({ onClick, href, children }, ref) => {
	return (
		<a href={href} onClick={onClick} ref={ref}>
			<li>{children}</li>
		</a>
	);
});

const NavLink = ({ href, children }) => {
	return (
		<Link href={href} passHref>
			<ListItem>{children}</ListItem>
		</Link>
	);
};

const Header = () => {
	const { isError } = useUser();
	const [open, setOpen] = useState(false);

	const signedIn = !isError;
	const toggleMenu = () => {
		setOpen(!open);
	};

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
						onClick={toggleMenu}
					>
						<FontAwesomeIcon icon={"bars"} />
					</div>
				</div>
			</div>

			{open && (
				<nav>
					<ul>
						<NavLink href="/" onClick={toggleMenu}>
							Home
						</NavLink>
						<NavLink href="/about" onClick={toggleMenu}>
							About
						</NavLink>
						{!signedIn && (
							<>
								<NavLink href="/register" onClick={toggleMenu}>
									Register
								</NavLink>
								<NavLink href="/login" onClick={toggleMenu}>
									Login
								</NavLink>
							</>
						)}
						{signedIn && (
							<>
								<NavLink href="/user" onClick={toggleMenu}>
									My Profile
								</NavLink>
								<NavLink href="/logout" onClick={toggleMenu}>
									Logout
								</NavLink>
							</>
						)}
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
