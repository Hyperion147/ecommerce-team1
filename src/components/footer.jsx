import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter, Mail, Github } from "lucide-react"

export default function Footer() {
    return (
        <footer className="mt-20 bg-brand-black text-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="mb-4 flex flex-col leading-tight">
                            <span className="text-xl lg:text-2xl tracking-tight">
                                ThreadVerse
                            </span>
                            <span className="text-xs tracking-wide text-brand-terracotta">
                                Wear Your Story
                            </span>
                        </div>
                        <p className="mb-6 text-sm text-gray-400">
                            Premium sustainable tees crafted with care. Made in India, worn everywhere.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-200 transition hover:bg-brand-terracotta hover:text-brand-black"
                            >
                                <Instagram className="w-6 h-6 text-brand-terracotta hover:scale-125 hover:text-white" />

                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-200 transition hover:bg-brand-terracotta hover:text-brand-black"
                            >
                                <Facebook className="w-6 h-6 text-brand-terracotta hover:scale-125 hover:text-white" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-200 transition hover:bg-brand-terracotta hover:text-brand-black"
                            >
                                <Twitter className="w-6 h-6 text-brand-terracotta hover:scale-125 hover:text-white" />
                            </a>
                            <a
                                href="https://github.com/t4runjangra"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-200 transition hover:bg-brand-terracotta hover:text-brand-black"
                            >
                                <Github className="w-6 h-6 text-brand-terracotta hover:scale-125 hover:text-white" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-200">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-400 transition hover:text-brand-terracotta"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products"
                                    className="text-gray-400 transition hover:text-brand-terracotta"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-400 transition hover:text-brand-terracotta"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-400 transition hover:text-brand-terracotta"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-200">
                            Support
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-400 transition hover:text-brand-terracotta">
                                    Shipping Info
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 transition hover:text-brand-terracotta">
                                    Returns & Exchanges
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 transition hover:text-brand-terracotta">
                                    Size Guide
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 transition hover:text-brand-terracotta">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-200">
                            Stay Updated
                        </h3>
                        <p className="mb-4 text-sm text-gray-400">
                            Get early access to new drops, offers, and stories behind our tees.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex gap-2"
                        >
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 outline-none transition focus:border-brand-terracotta"
                            />
                            <button
                                type="submit"
                                className="rounded-md bg-brand-terracotta px-4 py-2 text-sm font-semibold text-brand-black transition hover:bg-[#c49566]"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
                    <p>© 2025 ThreadVerse. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="transition hover:text-brand-terracottaracotta">
                            Privacy Policy
                        </a>
                        <a href="#" className="transition hover:text-brand-terracotta">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
