import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, fas);

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
		href: "#",
		icon: ["fas", "seedling"],
	},
	{
		name: "Leadership",
		description: "Learn about leadership.",
		href: "#",
		icon: ["fas", "star"],
	},
	{
		name: "Fellowship",
		description: "Learn about fellowship.",
		href: "#",
		icon: ["fas", "heart"],
	},
	{
		name: "Fundraising",
		description: "Learn about fundraising.",
		href: "#",
		icon: ["fas", "dollar-sign"],
	},
	{
		name: "CKI South",
		description: "Learn about CKI South.",
		href: "#",
		icon: ["fas", "child"],
	},
	{
		name: "FTC",
		description: "Learn about FTC.",
		href: "#",
		icon: ["fas", "lightbulb"],
	},
	{
		name: "DCON",
		description: "Learn about DCON.",
		href: "#",
		icon: ["fas", "graduation-cap"],
	},
];

const resources = [
	{
		name: "Cheers",
		description: "Learn our cheers.",
		href: "#",
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
		href: "#",
		icon: ["fas", "tasks"],
	},
	{
		name: "Suggestion Box",
		description: "Make a suggestion.",
		href: "#",
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

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const DesktopPopover = ({ name, items, cta }) => {
	return (
		<Popover className="relative">
			{({ open }) => (
				<>
					<Popover.Button
						className={classNames(
							open ? "text-gray-900" : "text-gray-500",
							"group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						)}
					>
						<span>{name}</span>
						<span className="ml-2 h-5 w-5 flex justify-center items-center">
							<FontAwesomeIcon
								icon={["fas", "chevron-down"]}
								className={classNames(
									open ? "text-gray-400" : "text-gray-600",
									"text-xs group-hover:text-gray-500"
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
										<a
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
										</a>
									))}
								</div>
								{cta && (
									<div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
										{cta.map((item) => (
											<div key={item.name} className="flow-root">
												<a
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
												</a>
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

const MenuDropdown = ({ name, items, isOpen, onClick }) => {
	return (
		<li onClick={onClick}>
			<div
				className={classNames(
					isOpen ? "text-gray-500" : "text-gray-900",
					"group mb-2 bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
				)}
			>
				<span>{name}</span>
				<span className="ml-2 h-5 w-5 flex justify-center items-center">
					<FontAwesomeIcon
						icon={["fas", "chevron-down"]}
						className={classNames(
							isOpen ? "text-gray-400" : "text-gray-600",
							"text-xs group-hover:text-gray-500"
						)}
						aria-hidden="true"
					/>
				</span>
			</div>
			{isOpen && (
				<ul className="grid gap-y-2 mt-2 ml-2">
					{items.map((item) => (
						<li key={item.name}>
							<a
								href={item.href}
								className="p-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 "
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

export default function Example() {
	const [mobileState, setMobileState] = useState({
		menu: false,
		about: false,
		events: false,
		media: false,
		resources: false,
	});

	const toggleMobileMenu =
		(name = "menu") =>
		() => {
			setMobileState({
				...mobileState,
				[name]: !mobileState[name],
			});
		};

	return (
		<Popover className="relative bg-white">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-4 sm:px-6">
						<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
							<div className="flex justify-start">
								<a href="#">
									<span className="sr-only">Workflow</span>
									<img
										className="h-8 w-auto sm:h-10"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
										alt=""
									/>
								</a>
							</div>

							{/* Mobile Menu Toggle */}
							<div className="-mr-2 -my-2 md:hidden">
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Open menu</span>
									<span className="h-6 w-6">
										<FontAwesomeIcon
											icon={["fas", "bars"]}
											className="text-2xl"
											aria-hidden="true"
										/>
									</span>
								</Popover.Button>
							</div>

							{/* Desktop Navbar */}
							<Popover.Group as="nav" className="hidden md:flex space-x-10">
								{/* Uses special properties to prevent it from cutting off when screen is small */}
								<Popover className="relative">
									{({ open }) => (
										<>
											<Popover.Button
												className={classNames(
													open ? "text-gray-900" : "text-gray-500",
													"group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
												)}
											>
												<span>About</span>
												<span className="ml-2 h-5 w-5 flex justify-center items-center">
													<FontAwesomeIcon
														icon={["fas", "chevron-down"]}
														className={classNames(
															open ? "text-gray-400" : "text-gray-600",
															"text-xs group-hover:text-gray-500"
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
													className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
												>
													<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
														<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
															{about.map((item) => (
																<a
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
																</a>
															))}
														</div>
													</div>
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>

								<DesktopPopover name="Events" items={events} cta={eventsCTA} />
								<DesktopPopover
									name="More"
									items={resources}
									cta={resourcesCTA}
								/>
							</Popover.Group>

							{/* Desktop Register/Login */}
							<div className="hidden md:flex justify-end items-center md:flex-1 lg:w-0">
								{/* Desktop Register */}
								<a
									href="/login"
									className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
								>
									Sign in
								</a>
								{/* Desktop Login */}
								<a
									href="/register"
									className="ml-8 whitespace-nowrap inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
								>
									Sign up
								</a>
							</div>
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
							focus
							static
							className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
						>
							<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
								<div className="pt-5 pb-6 px-5">
									<div className="flex items-center justify-between">
										{/* Home Logo */}
										<div>
											<img
												className="h-8 w-auto"
												src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
												alt="Workflow"
											/>
										</div>
										{/* Close Menu */}
										<div className="-mr-2">
											<Popover.Button className="bg-white rounded-md p-2 inline-flex justify-center items-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
												<span className="sr-only">Close menu</span>
												<span className="h-6 w-6 inline-flex justify-center items-center">
													<FontAwesomeIcon
														icon={["fas", "times"]}
														className="text-2xl"
														aria-hidden="true"
													/>
												</span>
											</Popover.Button>
										</div>
									</div>

									{/* Menu Dropdowns */}
									<div className="mt-6">
										<nav>
											<ul className="grid gap-y-2">
												<MenuDropdown
													name="About"
													items={about}
													isOpen={mobileState["about"]}
													onClick={toggleMobileMenu("about")}
												/>
												<MenuDropdown
													name="Events"
													items={events}
													isOpen={mobileState["events"]}
													onClick={toggleMobileMenu("events")}
												/>
												<MenuDropdown
													name="Resources"
													items={resources}
													isOpen={mobileState["resources"]}
													onClick={toggleMobileMenu("resources")}
												/>
											</ul>
										</nav>
									</div>
								</div>

								{/* Mobile Register/Login */}
								<div className="py-6 px-5 space-y-6">
									{/* Mobile Register */}
									<a
										href="/register"
										role="button"
										className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
									>
										Sign up
									</a>
									{/* Mobile Login */}
									<p className="mt-6 text-center text-base font-medium text-gray-500">
										Already a member?{" "}
										<a
											href="/login"
											className="text-indigo-600 hover:text-indigo-500"
										>
											Sign in
										</a>
									</p>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
}
