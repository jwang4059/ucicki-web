import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "./link";
import { useUser } from "../utils/fetcher";
import { useClickAwayListener } from "../utils/clickAwayListener";

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
	const navRef = useRef(null);
	const { isLoading, isError } = useUser();
	const [mobileMenuState, setMobileMenuState] = useState({
		menuOpen: false,
		aboutOpen: false,
	});

	const signedIn = !isError;
	const toggleMenu = (name) => {
		setMobileMenuState({
			...mobileMenuState,
			[name]: !mobileMenuState[name],
		});
	};

	const { menuOpen, aboutOpen } = mobileMenuState;
	useClickAwayListener(navRef, menuOpen, () => toggleMenu("menuOpen"));

	return (
		<header className="min-w-full text-white fixed z-50">
			<nav ref={navRef}>
				<div className="flex items-center h-24 p-6 bg-black">
					<div className="flex-shrink-0">
						<a href="https://www.circlek.org/">
							<img
								className="w-44 mr-4"
								src="https://i.imgur.com/p7Ufk3d.png"
								alt="Circle K International"
							/>
						</a>
					</div>
					<div className="flex-grow flex justify-end items-end">
						<div
							className="w-12 h-12 flex justify-center items-center text-4xl md:hidden"
							onClick={() => toggleMenu("menuOpen")}
						>
							{!menuOpen ? (
								<FontAwesomeIcon icon={["fas", "bars"]} />
							) : (
								<FontAwesomeIcon icon={["fas", "times"]} />
							)}
						</div>
						<div className="hidden md:block min-w-full">
							<ul className="flex flex-row">
								<div className="flex-grow flex items-end">
									<li className="mx-2">
										<Link href="/">Home</Link>
									</li>
									<li className="mx-2">
										<Link href="/about">About</Link>
									</li>
								</div>
								<div className="flex-shrink-0 flex items-end">
									<li className="mx-2">
										{!signedIn ? (
											<Link href="/register">Register</Link>
										) : (
											<Link href="/user">My Profile</Link>
										)}
									</li>
									<li className="mx-2">
										{!signedIn ? (
											<Link href="/login">Login</Link>
										) : (
											<LogoutButton />
										)}
									</li>
								</div>
							</ul>
						</div>
					</div>
				</div>

				{menuOpen && (
					<div className="bg-black md:hidden">
						<ul className="flex flex-col p-6">
							<li className="my-2">
								<Link href="/">Home</Link>
							</li>
							<li className="my-2">
								<div onClick={() => toggleMenu("aboutOpen")}>
									<span className="mr-2">About</span>
									{!aboutOpen ? (
										<FontAwesomeIcon icon={["fas", "caret-down"]} />
									) : (
										<FontAwesomeIcon icon={["fas", "caret-up"]} />
									)}
								</div>
								{aboutOpen && (
									<ul>
										<li className="my-2 ml-2">
											<Link href="/about">Circle K</Link>
										</li>
										<li className="my-2 ml-2">
											<Link href="/about/board">Board</Link>
										</li>
										<li className="my-2 ml-2">
											<Link href="/about/committees">Committees</Link>
										</li>
									</ul>
								)}
							</li>
							{!isLoading && (
								<>
									<li className="my-2">
										{!signedIn ? (
											<Link href="/register">Register</Link>
										) : (
											<Link href="/user">My Profile</Link>
										)}
									</li>
									<li className="my-2">
										{!signedIn ? (
											<Link href="/login">Login</Link>
										) : (
											<LogoutButton />
										)}
									</li>
								</>
							)}
						</ul>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
