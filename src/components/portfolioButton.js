"use client";
import { Link as ScrollLink } from "react-scroll";

export default function PortfolioButton() {
    return (
        <a
            href="#portfolio-section"
            className="inline-block cursor-pointer rounded-lg bg-orange-600 px-5 py-2 font-medium text-white transition-all duration-200 ease-in-out hover:border hover:border-orange-600 hover:bg-white hover:text-orange-600"
        >
            Portfolio
        </a>
    );
}
