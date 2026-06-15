import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { AtSign, Facebook, Github, Globe, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
var farhan_png_asset_default = {
	version: 1,
	asset_id: "ac379d50-e56d-4945-b914-4dcab4913664",
	project_id: "9842f04a-2511-4110-8815-f070d69ce00c",
	url: "/__l5e/assets-v1/ac379d50-e56d-4945-b914-4dcab4913664/farhan.png",
	r2_key: "a/v1/9842f04a-2511-4110-8815-f070d69ce00c/ac379d50-e56d-4945-b914-4dcab4913664/farhan.png",
	original_filename: "farhan.png",
	size: 2954273,
	content_type: "image/png",
	created_at: "2026-06-13T17:40:33Z"
};
//#endregion
//#region src/data/projects.ts
var projects = [
	{
		name: "EasySpeak — AI Teleprompter",
		tags: [
			"Entertainment",
			"AI",
			"Productivity"
		],
		desc: "AI-powered teleprompter with script generation, subscription monetization, and a custom scroll engine. 50K+ downloads on the stores.",
		store: "Both",
		href: "#",
		appStoreUrl: "#",
		playStoreUrl: "#",
		gradient: "from-orange-500 via-rose-500 to-amber-400",
		glyph: "ES"
	},
	{
		name: "vDoctor — Telemedicine",
		tags: [
			"Health",
			"Video",
			"WebRTC"
		],
		desc: "Secure video consultations on WebRTC + Jitsi Meet with appointment scheduling, digital prescriptions, and hardened patient record handling.",
		store: "Both",
		href: "#",
		appStoreUrl: "#",
		playStoreUrl: "#",
		gradient: "from-cyan-400 via-sky-500 to-indigo-600",
		glyph: "vD"
	},
	{
		name: "Divya Bhaskar Sales",
		tags: [
			"Enterprise",
			"Sales",
			"Analytics"
		],
		desc: "DCR workflow, EOD/EOM incentive calculators, and market-share reporting tuned for very large sales datasets.",
		store: "Enterprise",
		href: "#",
		appStoreUrl: "",
		playStoreUrl: "",
		gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
		glyph: "DB"
	},
	{
		name: "Divya Bhaskar Matrix",
		tags: [
			"News",
			"CMS",
			"Media"
		],
		desc: "Reporter app for uploading news, photos and media with real-time newsroom communication across 4 languages & 62 editions.",
		store: "Both",
		href: "#",
		appStoreUrl: "#",
		playStoreUrl: "#",
		gradient: "from-emerald-400 via-teal-500 to-cyan-600",
		glyph: "Mx"
	},
	{
		name: "Poros HR",
		tags: [
			"SaaS",
			"GPS",
			"iBeacon"
		],
		desc: "GPS + iBeacon attendance with background and terminated-state location tracking, real-time dashboards, Firebase-backed sync.",
		store: "Enterprise",
		href: "#",
		appStoreUrl: "",
		playStoreUrl: "",
		gradient: "from-amber-300 via-orange-500 to-red-600",
		glyph: "Po"
	},
	{
		name: "Wellnessta",
		tags: [
			"Lifestyle",
			"Marketplace",
			"Payments"
		],
		desc: "Salon & spa discovery, bookings, coupons, gift cards and memberships on a scalable API architecture with payment integration.",
		store: "Both",
		href: "#",
		appStoreUrl: "#",
		playStoreUrl: "#",
		gradient: "from-pink-400 via-rose-500 to-purple-600",
		glyph: "Wn"
	},
	{
		name: "Mask — Digital Wellness",
		tags: [
			"SwiftUI",
			"Security",
			"IAP"
		],
		desc: "Secure app locking with timed access controls, Face ID / Touch ID auth, IAP premium tier, and Combine-powered state.",
		store: "App Store",
		href: "#",
		appStoreUrl: "#",
		playStoreUrl: "",
		gradient: "from-slate-300 via-zinc-400 to-slate-700",
		glyph: "Mk"
	},
	{
		name: "Property Management",
		tags: [
			"Real Estate",
			"Flutter",
			"Finance"
		],
		desc: "Tenant tracking, lease management, automated payment reminders and monthly/yearly income dashboards for landlords.",
		store: "Both",
		href: "#",
		appStoreUrl: "#",
		playStoreUrl: "#",
		gradient: "from-lime-400 via-emerald-500 to-teal-700",
		glyph: "Pm"
	}
];
//#endregion
//#region src/data/socials.ts
var socials = [
	{
		platform: "LinkedIn",
		href: "https://linkedin.com/in/iamfarhansaiyad",
		iconName: "Linkedin"
	},
	{
		platform: "GitHub",
		href: "https://github.com/yourusername",
		iconName: "Github"
	},
	{
		platform: "Twitter / X",
		href: "https://x.com/yourusername",
		iconName: "Twitter"
	},
	{
		platform: "Instagram",
		href: "https://instagram.com/yourusername",
		iconName: "Instagram"
	},
	{
		platform: "Threads",
		href: "https://threads.net/@yourusername",
		iconName: "AtSign"
	},
	{
		platform: "Facebook",
		href: "https://facebook.com/yourusername",
		iconName: "Facebook"
	},
	{
		platform: "Email",
		href: "mailto:fazusai@ymail.com",
		iconName: "Mail"
	}
];
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-ambient text-foreground grain-bg overflow-x-hidden",
		children: [
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(Marquee, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(Experience, {}),
			/* @__PURE__ */ jsx(Projects, {}),
			/* @__PURE__ */ jsx(Contact, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ jsx("header", {
		className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "text-foreground text-lg font-semibold tracking-tight",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-primary",
						children: "farhan"
					}), ".dev"]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden md:flex items-center gap-8 font-mono-label text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#about",
							className: "hover:text-foreground transition-colors",
							children: "About"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#experience",
							className: "hover:text-foreground transition-colors",
							children: "Experience"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#work",
							className: "hover:text-foreground transition-colors",
							children: "Projects"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#contact",
							className: "hover:text-foreground transition-colors",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ jsx("a", {
					href: "mailto:fazusai@ymail.com",
					className: "font-mono-label text-foreground border border-border rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors",
					children: "Resume ↗"
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		className: "relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-10 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-40",
				style: { background: "radial-gradient(circle, oklch(0.74 0.19 50 / 0.55), transparent 60%)" }
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-30",
				style: { background: "radial-gradient(circle, oklch(0.82 0.16 75 / 0.5), transparent 60%)" }
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl relative grid lg:grid-cols-12 gap-12 lg:gap-10 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .6 },
							className: "flex items-center gap-3 font-mono-label text-primary mb-8",
							children: [/* @__PURE__ */ jsx("span", { className: "w-8 h-px bg-primary" }), "Senior Mobile Engineer · Ahmedabad, IN · Available Q3 2026"]
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .1
							},
							className: "text-2xl md:text-3xl font-display font-light text-foreground/90 mb-5",
							children: [
								"Hi, I'm ",
								/* @__PURE__ */ jsx("span", {
									className: "font-semibold text-gradient",
									children: "Farhan Saiyad"
								}),
								"."
							]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "font-display text-[12vw] md:text-[7vw] lg:text-[5.5rem] leading-[0.95]",
							children: [
								{
									text: "Mobile apps",
									gradient: false
								},
								{
									text: "built with conviction,",
									gradient: true
								},
								{
									text: "shipped at scale.",
									gradient: false
								}
							].map((l, i) => /* @__PURE__ */ jsx(motion.span, {
								initial: {
									opacity: 0,
									y: 28
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .15 + i * .1,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "block " + (l.gradient ? "text-gradient" : ""),
								children: l.text
							}, i))
						}),
						/* @__PURE__ */ jsx(motion.p, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .8
							},
							className: "mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed",
							children: "iOS & Flutter developer with 5 years of expertise in Swift, SwiftUI & Dart — specializing in high-performance mobile applications, Clean Architecture, real-time WebRTC features, and enterprise SaaS rollouts."
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .95
							},
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "#work",
								className: "group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium transition-transform hover:scale-[1.03] glow-mint",
								children: ["View Projects", /* @__PURE__ */ jsx("span", {
									className: "transition-transform group-hover:translate-x-1",
									children: "→"
								})]
							}), /* @__PURE__ */ jsx("a", {
								href: "#contact",
								className: "inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium text-foreground hover:border-primary hover:text-primary transition-colors",
								children: "Get in Touch"
							})]
						}),
						/* @__PURE__ */ jsx(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: .6,
								delay: 1.1
							},
							className: "mt-10 flex items-center gap-3",
							children: socials.map((s) => {
								const IconComponent = {
									Github,
									Linkedin,
									Twitter,
									Mail,
									Globe,
									Instagram,
									Facebook,
									AtSign
								}[s.iconName];
								return /* @__PURE__ */ jsx("a", {
									href: s.href,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": s.platform,
									className: "w-11 h-11 rounded-full border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300",
									children: IconComponent ? /* @__PURE__ */ jsx(IconComponent, {
										size: 18,
										strokeWidth: 1.75
									}) : /* @__PURE__ */ jsx("span", { children: s.platform[0] })
								}, s.platform);
							})
						})
					]
				}), /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .9,
						delay: .4,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "lg:col-span-5 relative",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative rounded-3xl border border-primary/30 p-2 bg-card/40 backdrop-blur glow-mint",
						children: [
							/* @__PURE__ */ jsx("div", {
								"aria-hidden": true,
								className: "absolute inset-0 rounded-3xl pointer-events-none",
								style: { background: "radial-gradient(circle at 50% 60%, oklch(0.85 0.18 165 / 0.15), transparent 70%)" }
							}),
							/* @__PURE__ */ jsx("img", {
								src: farhan_png_asset_default.url,
								alt: "Farhan Saiyad",
								className: "relative w-full aspect-[4/5] object-cover rounded-2xl",
								loading: "eager"
							}),
							/* @__PURE__ */ jsxs(motion.div, {
								animate: { y: [
									0,
									-8,
									0
								] },
								transition: {
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut"
								},
								className: "absolute -bottom-4 left-4 md:bottom-6 md:left-6 rounded-xl bg-background/95 border border-border px-4 py-3 font-mono text-xs shadow-2xl backdrop-blur",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-primary",
									children: "swift • flutter"
								}), /* @__PURE__ */ jsx("div", {
									className: "text-muted-foreground",
									children: "ios / dart / swiftui"
								})]
							}),
							/* @__PURE__ */ jsxs(motion.div, {
								animate: { y: [
									0,
									8,
									0
								] },
								transition: {
									duration: 6,
									repeat: Infinity,
									ease: "easeInOut"
								},
								className: "absolute -top-3 right-4 md:top-6 md:right-6 rounded-full bg-primary text-primary-foreground px-3.5 py-1.5 font-mono text-[10px] md:text-xs shadow-2xl flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-primary-foreground/70 animate-pulse" }), "Available Q3 2026"]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl mt-20 grid grid-cols-3 gap-6 border-t border-border pt-10",
				children: [
					/* @__PURE__ */ jsx(Stat, {
						k: "5+",
						l: "Years shipping"
					}),
					/* @__PURE__ */ jsx(Stat, {
						k: "50K+",
						l: "Downloads driven"
					}),
					/* @__PURE__ */ jsx(Stat, {
						k: "12+",
						l: "Apps in production"
					})
				]
			})
		]
	});
}
function Stat({ k, l }) {
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 16
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: { duration: .5 },
		children: [/* @__PURE__ */ jsx("div", {
			className: "font-display text-4xl md:text-6xl text-gradient",
			children: k
		}), /* @__PURE__ */ jsx("div", {
			className: "font-mono-label text-muted-foreground mt-2",
			children: l
		})]
	});
}
function Marquee() {
	const items = [
		"Swift",
		"SwiftUI",
		"UIKit",
		"Flutter",
		"Dart",
		"Objective-C",
		"Clean Architecture",
		"MVVM",
		"WebRTC",
		"Agora",
		"Core Data",
		"Firebase",
		"iBeacon / BLE",
		"In-App Purchases",
		"XCTest"
	];
	return /* @__PURE__ */ jsx("section", {
		"aria-hidden": true,
		className: "border-y border-border py-6 overflow-hidden bg-secondary/30",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex gap-12 whitespace-nowrap animate-marquee w-max",
			children: [...items, ...items].map((t, i) => /* @__PURE__ */ jsxs("span", {
				className: "font-display text-2xl md:text-3xl flex items-center gap-12 text-foreground/80",
				children: [t, /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-primary" })]
			}, i))
		})
	});
}
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "px-6 md:px-10 py-28 md:py-40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl grid md:grid-cols-12 gap-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "md:col-span-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "font-mono-label text-primary",
					children: "01 / About"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "font-display text-4xl md:text-6xl mt-6",
					children: [
						"The craft of ",
						/* @__PURE__ */ jsx("span", {
							className: "text-gradient",
							children: "mobile"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed",
				children: [
					/* @__PURE__ */ jsx("p", { children: "I build mobile software the way good software is meant to be built — with architecture you can reason about, code paths you can test, and interfaces that feel inevitable. Five years across native iOS and Flutter, leading enterprise SaaS rollouts and consumer apps with real users." }),
					/* @__PURE__ */ jsxs("p", { children: [
						"Currently a Senior iOS Developer at ",
						/* @__PURE__ */ jsx("span", {
							className: "text-foreground",
							children: "iTechnotion"
						}),
						", where I lead architecture on GPS + iBeacon attendance platforms, real-time WebRTC features, and AI-integrated subscription products."
					] }),
					/* @__PURE__ */ jsxs("ul", {
						className: "grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-6 font-mono-label text-foreground",
						children: [
							/* @__PURE__ */ jsx("li", { children: "— iOS · Swift / SwiftUI / UIKit" }),
							/* @__PURE__ */ jsx("li", { children: "— Flutter · Dart / BLoC / GetX" }),
							/* @__PURE__ */ jsx("li", { children: "— Clean Architecture & MVVM" }),
							/* @__PURE__ */ jsx("li", { children: "— WebRTC, Agora, Jitsi Meet" }),
							/* @__PURE__ */ jsx("li", { children: "— GPS, iBeacon, BLE, background" }),
							/* @__PURE__ */ jsx("li", { children: "— XCTest, XCUITest, CI releases" })
						]
					})
				]
			})]
		})
	});
}
var experience = [{
	role: "Senior iOS Developer",
	company: "iTechnotion Pvt Ltd",
	period: "Jun 2022 — Present",
	bullets: [
		"Led architecture of scalable enterprise mobile apps across iOS and cross-platform.",
		"Designed SaaS attendance platform with GPS + iBeacon tracking, background-state location.",
		"Built AI-powered features and subscription monetization for consumer apps.",
		"Cut data latency ~30% via WebSockets-based real-time sync. Mentored juniors."
	]
}, {
	role: "iOS Developer",
	company: "Elsner Technology Pvt Ltd",
	period: "May 2021 — Jun 2022",
	bullets: [
		"Led Objective-C → Swift migration of production Taxi Driver & Customer apps, zero downtime.",
		"Refactored legacy code into modular MVVM, improving testability and performance.",
		"Reduced crashes ~20% via profiling and architecture cleanup."
	]
}];
function Experience() {
	return /* @__PURE__ */ jsx("section", {
		id: "experience",
		className: "px-6 md:px-10 py-28 md:py-40 border-t border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl grid md:grid-cols-12 gap-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "md:col-span-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "font-mono-label text-primary",
					children: "02 / Experience"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "font-display text-4xl md:text-6xl mt-6",
					children: [
						"Five years of ",
						/* @__PURE__ */ jsx("span", {
							className: "text-gradient",
							children: "shipping"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "md:col-span-7 md:col-start-6 space-y-16",
				children: experience.map((e, idx) => /* @__PURE__ */ jsxs(motion.article, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .6,
						delay: idx * .1
					},
					className: "border-t border-border pt-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-baseline justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("h3", {
							className: "font-display text-2xl md:text-3xl",
							children: [
								e.role,
								" ",
								/* @__PURE__ */ jsxs("span", {
									className: "text-muted-foreground",
									children: ["/ ", e.company]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "font-mono-label text-muted-foreground",
							children: e.period
						})]
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-6 space-y-3 text-muted-foreground",
						children: e.bullets.map((b, i) => /* @__PURE__ */ jsxs("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-primary mt-2 shrink-0",
								children: "→"
							}), /* @__PURE__ */ jsx("span", { children: b })]
						}, i))
					})]
				}, e.company))
			})]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ jsx("section", {
		id: "work",
		className: "px-6 md:px-10 py-28 md:py-40 border-t border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid md:grid-cols-12 gap-10 mb-16 md:mb-20",
				children: [/* @__PURE__ */ jsx("div", {
					className: "md:col-span-4",
					children: /* @__PURE__ */ jsx("div", {
						className: "font-mono-label text-primary",
						children: "03 / Selected Work"
					})
				}), /* @__PURE__ */ jsxs("h2", {
					className: "md:col-span-8 font-display text-4xl md:text-6xl",
					children: [
						"Apps that earned ",
						/* @__PURE__ */ jsx("span", {
							className: "text-gradient",
							children: "their install"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid sm:grid-cols-2 gap-6 md:gap-8",
				children: projects.map((p, i) => /* @__PURE__ */ jsx(ProjectCard, {
					p,
					index: i
				}, p.name))
			})]
		})
	});
}
function ProjectCard({ p, index }) {
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .6,
			delay: index % 2 * .08,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		whileHover: { y: -6 },
		className: "group block rounded-3xl border border-border bg-card/60 backdrop-blur overflow-hidden transition-colors hover:border-primary/30",
		children: [/* @__PURE__ */ jsxs("div", {
			className: `relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`,
			children: [
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": true,
					className: "absolute inset-0 opacity-30",
					style: {
						backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
						backgroundSize: "32px 32px, 48px 48px"
					}
				}),
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": true,
					className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
				}),
				/* @__PURE__ */ jsx(motion.div, {
					className: "absolute inset-0 grid place-items-center",
					whileHover: { scale: 1.08 },
					transition: {
						duration: .6,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: /* @__PURE__ */ jsx("div", {
						className: "font-display text-7xl md:text-8xl text-white drop-shadow-2xl select-none",
						children: p.glyph
					})
				}),
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": true,
					className: "absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out",
					style: { background: "linear-gradient(110deg, transparent 30%, oklch(1 0 0 / 0.15) 50%, transparent 70%)" }
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-6 md:p-7 flex flex-col justify-between min-h-[260px]",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-2 mb-5",
					children: p.tags.map((t) => /* @__PURE__ */ jsx("span", {
						className: "text-[10px] font-mono uppercase tracking-widest text-primary border border-primary/40 rounded-full px-2.5 py-1",
						children: t
					}, t))
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "font-display text-2xl md:text-3xl text-foreground",
					children: p.name
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-muted-foreground leading-relaxed text-sm md:text-base",
					children: p.desc
				})
			] }), /* @__PURE__ */ jsxs("div", {
				className: "mt-6 pt-4 border-t border-border/30 flex flex-wrap gap-3 items-center",
				children: [
					p.appStoreUrl && /* @__PURE__ */ jsxs("a", {
						href: p.appStoreUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-1.5 rounded-full bg-foreground/5 hover:bg-primary/10 hover:text-primary border border-border px-4 py-2 font-mono text-xs text-foreground transition-all duration-300",
						children: [
							/* @__PURE__ */ jsx("span", { children: "" }),
							" App Store ",
							/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground group-hover:text-primary transition-colors",
								children: "↗"
							})
						]
					}),
					p.playStoreUrl && /* @__PURE__ */ jsxs("a", {
						href: p.playStoreUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-1.5 rounded-full bg-foreground/5 hover:bg-primary/10 hover:text-primary border border-border px-4 py-2 font-mono text-xs text-foreground transition-all duration-300",
						children: [
							/* @__PURE__ */ jsx("span", { children: "🤖" }),
							" Play Store ",
							/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground group-hover:text-primary transition-colors",
								children: "↗"
							})
						]
					}),
					p.href && p.href !== "#" && !p.appStoreUrl && !p.playStoreUrl && /* @__PURE__ */ jsxs("a", {
						href: p.href,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground border border-primary/20 px-5 py-2 font-mono text-xs text-primary transition-all duration-300",
						children: ["Visit Project ", /* @__PURE__ */ jsx("span", { children: "↗" })]
					}),
					!p.appStoreUrl && !p.playStoreUrl && (!p.href || p.href === "#") && /* @__PURE__ */ jsxs("span", {
						className: "text-xs font-mono text-muted-foreground italic",
						children: ["▸ ", p.store]
					})
				]
			})]
		})]
	});
}
function Contact() {
	return /* @__PURE__ */ jsxs("section", {
		id: "contact",
		className: "px-6 md:px-10 py-32 md:py-48 border-t border-border relative overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-20",
			style: { background: "radial-gradient(circle, oklch(0.85 0.18 165 / 0.6), transparent 60%)" }
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl relative",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "font-mono-label text-primary mb-10",
					children: "04 / Contact"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "font-display text-[12vw] md:text-[8vw] leading-[0.95]",
					children: [
						"Have a hard",
						/* @__PURE__ */ jsx("br", {}),
						"mobile problem?",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "text-gradient",
							children: "Let's talk."
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-16 grid md:grid-cols-3 gap-10 border-t border-border pt-10",
					children: [
						/* @__PURE__ */ jsx(ContactItem, {
							label: "Email",
							value: "fazusai@ymail.com",
							href: "mailto:fazusai@ymail.com"
						}),
						/* @__PURE__ */ jsx(ContactItem, {
							label: "Phone",
							value: "+91 98985 31984",
							href: "tel:+919898531984"
						}),
						/* @__PURE__ */ jsx(ContactItem, {
							label: "LinkedIn",
							value: "iamfarhansaiyad",
							href: "https://linkedin.com/in/iamfarhansaiyad"
						})
					]
				})
			]
		})]
	});
}
function ContactItem({ label, value, href }) {
	return /* @__PURE__ */ jsxs("a", {
		href,
		className: "group block border-t border-border md:border-t-0 pt-6 md:pt-0",
		children: [/* @__PURE__ */ jsx("div", {
			className: "font-mono-label text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsxs("div", {
			className: "font-display text-xl md:text-2xl mt-2 group-hover:text-gradient transition-colors",
			children: [
				value,
				" ",
				/* @__PURE__ */ jsx("span", {
					className: "inline-block transition-transform group-hover:translate-x-1",
					children: "↗"
				})
			]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "px-6 md:px-10 py-10 border-t border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 font-mono-label text-muted-foreground",
			children: [/* @__PURE__ */ jsx("div", { children: "© 2026 Farhan Saiyad — Ahmedabad, IN" }), /* @__PURE__ */ jsx("div", { children: "Designed & built with intention." })]
		})
	});
}
//#endregion
export { Index as component };
