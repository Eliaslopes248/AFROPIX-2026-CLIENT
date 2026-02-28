import React from "react";
import NavBar from "../components/ui/NavBar";
import LandingPage_HeroSection from "../components/landing_page_ui/LandingPage_HeroSection";
import WhySection from "../components/landing_page_ui/why_section";
import CallingAction from "../components/landing_page_ui/calling_action";
import Footer from "../components/ui/Footer";

export default function LandingPage() {
    return (
        <div>
            <NavBar />
            <LandingPage_HeroSection />
            <WhySection />
            <CallingAction />
            <Footer />
        </div>
    )
}