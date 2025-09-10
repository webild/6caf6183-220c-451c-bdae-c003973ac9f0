"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarStyleMinimal
        logoSrc="/images/logo.svg"
        logoAlt="Sample Brand"
        buttonText="Get Started"
        className=""
      />

      <div id="hero" data-section="hero" className="scroll-mt-24 bg-gradient-to-r from-[#FF5733] to-[#FFC300]">
        <SplitHero
          title="Welcome to the Sample Site"
          subtitle="Showcasing our amazing products"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => {}}
          onSecondaryButtonClick={() => {}}
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About Us"
          descriptions={[
            "We are a forward-thinking company.",
            "Committed to delivering quality products.",
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Get the app", image: "/images/placeholderwide1.jpg", position: "left", isCenter: false },
            { title: "Step 2", description: "Create an account", image: "/images/placeholderwide2.jpg", position: "center", isCenter: true },
            { title: "Step 3", description: "Start trading", image: "/images/placeholderwide3.jpg", position: "right", isCenter: false },
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics"
          description="Understanding our token structure"
          kpiItems={[
            { value: "1M", description: "Total Supply" },
            { value: "500K", description: "Circulating Supply" },
            { value: "5%", description: "Transaction Fee" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Sample Brand"
          logoText="Sample Brand"
          className=""
        />
      </div>
    </SiteThemeProvider>
  );
}
