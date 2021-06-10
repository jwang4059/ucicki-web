import React, { Fragment } from "react";
import { Popover, Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "./link";
import cn from "classnames";

import { useUser } from "../utils/fetcher";

const about = [
	{
		name: "Circle K",
		description: "Get a better understanding of what Circle K is.",
		href: "/about/circlek",
		icon: ["fas", "globe"],
	},
	{
		name: "Board",
		description: "Learn about the Board and what they do.",
		href: "/about/board",
		icon: ["fas", "user-tie"],
	},
	{
		name: "Families",
		description: "Meet the families and their Bigs.",
		href: "/about/families",
		icon: ["fas", "house-user"],
	},
	{
		name: "Committees",
		description: "Learn about the committees.",
		href: "/about/committees",
		icon: ["fas", "users"],
	},
	{
		name: "Mentorship Program",
		description: "Find your mentor or mentee.",
		href: "/about/mentorship",
		icon: ["fas", "user-friends"],
	},
];

const events = [
	{
		name: "Service",
		description: "Learn about service.",
		href: "/events/service",
		icon: ["fas", "seedling"],
	},
	{
		name: "Leadership",
		description: "Learn about leadership.",
		href: "/events/leadership",
		icon: ["fas", "star"],
	},
	{
		name: "Fellowship",
		description: "Learn about fellowship.",
		href: "/events/fellowship",
		icon: ["fas", "heart"],
	},
	{
		name: "Fundraising",
		description: "Learn about fundraising.",
		href: "/events/fundraising",
		icon: ["fas", "dollar-sign"],
	},
	{
		name: "CKI South",
		description: "Learn about CKI South.",
		href: "/events/cki-south",
		icon: ["fas", "child"],
	},
	{
		name: "FTC",
		description: "Learn about FTC.",
		href: "/events/ftc",
		icon: ["fas", "lightbulb"],
	},
	{
		name: "DCON",
		description: "Learn about DCON.",
		href: "/events/dcon",
		icon: ["fas", "graduation-cap"],
	},
];

const resources = [
	{
		name: "Cheers",
		description: "Learn our cheers.",
		href: "/cheers",
		icon: ["fas", "bullhorn"],
	},
	{
		name: "Club Bylaws",
		description: "Learn club bylaws.",
		href: "#",
		icon: ["fas", "balance-scale"],
	},
	{
		name: "MRP Requirements",
		description: "Check out MRP requirements.",
		href: "/mrp",
		icon: ["fas", "tasks"],
	},
	{
		name: "Suggestion Box",
		description: "Make a suggestion.",
		href: "/suggestion-box",
		icon: ["fas", "inbox"],
	},
];

const aboutCTA = [
	{ name: "Photos", href: "/photos", icon: ["fas", "camera"] },
	{ name: "Videos", href: "/videos", icon: ["fas", "video"] },
];

const eventsCTA = [
	{ name: "Calendar", href: "/calendar", icon: ["fas", "calendar"] },
	{ name: "Leaderboard", href: "/leaderboard", icon: ["fas", "trophy"] },
];

const resourcesCTA = [
	{
		name: "Online Application",
		href: "/application",
		icon: ["fas", "file-alt"],
	},
	{ name: "Suggestion Box", href: "/suggestion-box", icon: ["fas", "inbox"] },
];

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

	return (
		<button
			className="whitespace-nowrap inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
			onClick={logout}
		>
			Logout
		</button>
	);
};

const DesktopPopover = ({ name, items, cta }) => {
	return (
		<Popover className="relative">
			{({ open }) => (
				<>
					<Popover.Button
						className={cn(
							open
								? "bg-gray-900 text-white"
								: "text-gray-500 hover:text-gray-300",
							"group bg-black rounded-md inline-flex items-center text-base font-medium focus:outline-none"
						)}
					>
						<span>{name}</span>
						<span className="ml-2 h-5 w-5 flex justify-center items-center">
							<FontAwesomeIcon
								icon={["fas", "chevron-down"]}
								className={cn(
									open ? "text-white" : "text-gray-500",
									"text-xs group-hover:text-gray-300"
								)}
								aria-hidden="true"
							/>
						</span>
					</Popover.Button>

					<Transition
						show={open}
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<Popover.Panel
							static
							className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
						>
							<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
									{items.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
										>
											<span className="flex-shrink-0 h-6 w-6">
												<FontAwesomeIcon
													icon={item.icon}
													className="text-lg text-indigo-600"
													aria-hidden="true"
												/>
											</span>
											<div className="ml-4">
												<p className="text-base font-medium text-gray-900">
													{item.name}
												</p>
												<p className="mt-1 text-sm text-gray-500">
													{item.description}
												</p>
											</div>
										</Link>
									))}
								</div>
								{cta && (
									<div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
										{cta.map((item) => (
											<div key={item.name} className="flow-root">
												<Link
													href={item.href}
													className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
												>
													<span className="flex-shrink-0 h-6 w-6">
														<FontAwesomeIcon
															icon={item.icon}
															className="text-lg text-gray-400"
															aria-hidden="true"
														/>
													</span>
													<span className="ml-3">{item.name}</span>
												</Link>
											</div>
										))}
									</div>
								)}
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};

const MobileDropdown = ({ name, items, cta }) => {
	return (
		<Menu as="div">
			{({ open }) => (
				<>
					<Menu.Button
						className={cn(
							open ? "text-white" : "text-gray-500",
							"group bg-black rounded-md inline-flex items-center text-base font-medium hover:text-gray-300 focus:outline-none"
						)}
					>
						<span>{name}</span>
						<span className="ml-2 h-5 w-5 flex justify-center items-center">
							<FontAwesomeIcon
								icon={["fas", "chevron-down"]}
								className={cn(
									open ? "text-white" : "text-gray-500",
									"text-xs group-hover:text-gray-300"
								)}
								aria-hidden="true"
							/>
						</span>
					</Menu.Button>

					<Transition
						show={open}
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<Menu.Items static as="ul" className="grid gap-y-2 mt-2 ml-2">
							{items.map((item) => (
								<Menu.Item as="li" key={item.name}>
									<a
										href={item.href}
										className="p-3 rounded-md text-base font-medium text-gray-500 hover:text-white hover:underline"
									>
										{item.name}
									</a>
								</Menu.Item>
							))}
							{cta.map((item) => (
								<Menu.Item as="li" key={item.name}>
									<a
										href={item.href}
										className="p-3 rounded-md text-base font-medium text-indigo-900 hover:text-indigo-500 hover:underline"
									>
										{item.name}
									</a>
								</Menu.Item>
							))}
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
};

const Header = () => {
	const { isLoading, isError } = useUser();
	const signedIn = !isError;

	return (
		<Popover className="h-24 fixed z-30 bg-black">
			{({ open }) => (
				<>
					<div className="h-full w-screen flex flex-col justify-center px-6">
						<div className="flex justify-between items-center py-6 md:justify-start md:space-x-8">
							<div className="flex-shrink-0 flex justify-start">
								<a href="https://www.circlek.org/">
									<span className="sr-only">Circle K International</span>
									<img
										className="h-10 w-auto"
										src="https://i.imgur.com/p7Ufk3d.png"
										alt="Circle K International"
									/>
								</a>
							</div>

							{/* Mobile Menu Toggle */}
							<div className="-my-2 md:hidden">
								<Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-100 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Open menu</span>
									<span className="h-6 w-6">
										<FontAwesomeIcon
											icon={["fas", `${open ? "times" : "bars"}`]}
											className="text-2xl"
											aria-hidden="true"
										/>
									</span>
								</Popover.Button>
							</div>

							{/* Desktop Navbar */}
							<Popover.Group as="nav" className="hidden md:flex space-x-8">
								<Link
									href="/"
									className="text-base font-medium text-gray-500 hover:text-gray-300"
								>
									Home
								</Link>

								<DesktopPopover name="About" items={about} cta={aboutCTA} />
								<DesktopPopover name="Events" items={events} cta={eventsCTA} />
								<DesktopPopover
									name="Resources"
									items={resources}
									cta={resourcesCTA}
								/>
							</Popover.Group>

							{/* Desktop Register/Login */}
							{!isLoading && (
								<div className="hidden md:flex justify-end items-center md:flex-1">
									{!signedIn ? (
										<>
											{/* Desktop Register */}
											<Link
												href="/login"
												role="button"
												className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-300"
											>
												Sign in
											</Link>
											{/* Desktop Login */}
											<Link
												href="/register"
												role="button"
												className="ml-8 whitespace-nowrap inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
											>
												Sign up
											</Link>
										</>
									) : (
										<LogoutButton />
									)}
								</div>
							)}
						</div>
					</div>

					{/* Mobile Menu */}
					<Transition
						show={open}
						as={Fragment}
						enter="duration-200 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							static
							className="inset-x-0 p-2 transition transform origin-top-right md:hidden bg-black"
						>
							<div className="p-6">
								{/* Menu Items */}
								<div className="mt-6">
									<nav className="grid gap-y-4">
										<Link
											href="/"
											className="text-base font-medium text-gray-500 hover:text-gray-300"
										>
											Home
										</Link>
										<MobileDropdown name="About" items={about} cta={aboutCTA} />
										<MobileDropdown
											name="Events"
											items={events}
											cta={eventsCTA}
										/>
										<MobileDropdown
											name="Resources"
											items={resources}
											cta={resourcesCTA}
										/>
									</nav>
								</div>
							</div>

							{/* Mobile Register/Login */}
							{!isLoading && (
								<div className="py-6 px-5 space-y-6">
									{/* Mobile Register */}
									<Link
										href="/register"
										role="button"
										className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
									>
										Sign up
									</Link>
									{/* Mobile Login */}
									<p className="mt-6 text-center text-base font-medium text-gray-500">
										Already a member?{" "}
										<Link
											href="/login"
											role="button"
											className="text-indigo-600 hover:text-indigo-500"
										>
											Sign in
										</Link>
									</p>
								</div>
							)}
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};

export default Header;
