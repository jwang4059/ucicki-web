import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "./link";
import { useUser } from "../utils/fetcher";

/*
Links
- Home
- About Us
	- Main About + Board (Board + Fam heads) + History
	- Families
	- Comittees (Tip)
	- Mentor/Mentee
	- Events
	- Photos
- Calendar
- Resouces
*/

const LogoutButton = () => {
	const router = useRouter();
	const logout = async () => {
		await fetch(`${process.env.NEXT_PUBLIC_HOST}/logout`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		});

		router.reload();
	};

	return <button onClick={logout}>Logout</button>;
};

const Header = () => {
	const { isError } = useUser();
	const [open, setOpen] = useState(false);

	const signedIn = !isError;
	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<header className="min-w-full bg-black text-white fixed z-50">
			<div className="flex items-center h-24 p-6">
				<div className="flex-grow md:flex-grow-0 md:flex-shrink-0">
					<a href="https://www.circlek.org/">
						<img
							className="w-44 mr-4"
							src="https://i.imgur.com/p7Ufk3d.png"
							alt="Circle K International"
						/>
					</a>
				</div>
				<div className="flex-shrink-0 md:flex-shrink md:flex-grow flex items-end">
					<div
						className="flex justify-center items-center text-4xl md:hidden"
						onClick={toggleMenu}
					>
						<FontAwesomeIcon icon={"bars"} />
					</div>
					<nav className="hidden md:block min-w-full">
						<ul className="flex flex-row">
							<div className="flex-grow flex items-end">
								<li className="mx-2" onClick={toggleMenu}>
									<Link href="/">Home</Link>
								</li>
								<li className="mx-2" onClick={toggleMenu}>
									<Link href="/about">About</Link>
								</li>
							</div>
							<div className="flex-shrink-0 flex items-end">
								<li className="mx-2" onClick={toggleMenu}>
									{!signedIn ? (
										<Link href="/register">Register</Link>
									) : (
										<Link href="/user">My Profile</Link>
									)}
								</li>
								<li className="mx-2" onClick={toggleMenu}>
									{!signedIn ? (
										<Link href="/login">Login</Link>
									) : (
										<LogoutButton />
									)}
								</li>
							</div>
						</ul>
					</nav>
				</div>
			</div>

			{open && (
				<nav className="md:hidden">
					<ul className="flex flex-col p-6">
						<li className="my-2" onClick={toggleMenu}>
							<Link href="/">Home</Link>
						</li>
						<li className="my-2" onClick={toggleMenu}>
							<Link href="/about">About</Link>
						</li>
						<li className="my-2" onClick={toggleMenu}>
							{!signedIn ? (
								<Link href="/register">Register</Link>
							) : (
								<Link href="/user">My Profile</Link>
							)}
						</li>
						<li className="my-2" onClick={toggleMenu}>
							{!signedIn ? <Link href="/login">Login</Link> : <LogoutButton />}
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
