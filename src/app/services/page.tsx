import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Recovery Services | Car Recovery Team",
};

const services = [
  {
    name: "Breakdown Recovery",
    alt: "Breakdown Recovery Icon",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLsFz6g3bfx5ThURdfInEy1Dwq_ZC-uzLvQik4t3wb9iz49pTUTOD6Qz6hjzPIeNdH4Sp-NsCcYOqlV7limvtoDX4VcmO6kYNGrFJ3T8bb1Sr5cyli3O_mronV3kowtskkysD1K5jvTM9CPKjy-e7YDcP6Ix_6zLIRVWP3mOMjup1TMg_Ne04dO3L6_ThE-ufu1aMZGASxmO4N5k-hFtoV5Uq-bEQPwhxD7TUb1mMPwC5niHwywB5Q8Pzw",
    description:
      "Professional extraction and transport for vehicles of all sizes. Whether it's mechanical failure or an accident, we ensure safe transit to your destination.",
  },
  {
    name: "Car Towing",
    alt: "Car Towing Icon",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLt1GbauhAa97Aj8p0Up1e06du5rybIK149GyQ5zE13-U7bZ9Xrmml1DZ4Apvo14lV8_ildLi2fpljyDscM-FVv5AGfe5qcpghT9_IUPeeS-KsQ6dTbXIla9TLxbSpxUpz8qXHvAltsOpt6LLINdPz9bboSBleXsOYslh3riUVmhH68PRURSBAA82bvod8Ibd2ZEoKXryPA392zp8Hu9xDkX_p9wvJLDDyoKPJD6z_-_URL9kNTmntFeGBk",
    description:
      "Safe, damage-free towing services using modern flatbed trucks. Ideal for luxury vehicles, classic cars, or non-runners needing professional handling.",
  },
  {
    name: "Jump Start",
    alt: "Jump Start Icon",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLvDgV1h98PUGaP-C-n6JbisbuCvEWItZ8VmByrMnL_9G3sThe09xt1aEkg6aNEfBKkiAVB9mJfqi8R5w-M8MpRecpmCjcXgkL8Hypg4k6oLFL9sUjAN9UFvYw1CeB1m4xlLUaveJdANNqLycXfnPhctCaA0lELMDgaiR_Kk9jhoY6z9w4nS6XwJAG0ZeWaR58bZ65yU0BNl5GUq7A0YjFrXF9Ues7CitRYwrNl374F2JNMsOio22f07QQQ",
    description:
      "Battery failed? Our rapid response units carry professional-grade jump packs to get your engine turning and your journey back on track instantly.",
  },
  {
    name: "Fuel Delivery",
    alt: "Fuel Delivery Icon",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLv_P9FP9DtAVpaskRwbwah8riuKrW7PadeBHlSNmCoG_FXKSAlUODLn_f3nxvNMHki_ulHsjEKlqWZtilqe64DeVVJv1H2LPmBjYPWI-7Y6fn_W04Vo4MlaG49egI19taf2Ek3oAMM6b9D1zzNJ2AqckqGdy9eLjrpSPAGT2dvM2D4h1ErUvETkHQTank5oUPi57qR7dlIH-vun7ACn_nT-75QHVxslUIyI2cFvUSADteXJRKwL47roWQ",
    description:
      "Run out of fuel? We deliver petrol or diesel directly to your location, including bleeding the system if necessary for diesel engines.",
  },
  {
    name: "Tyre Change",
    alt: "Tyre Change Icon",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLu_DTTH462_qzYr317HFPm_-lli2cLVf5cyoRcL4L9n8oz4korZtJnO32aVbvaEcY4Ri5hKxLg15t8Fvqtjg2NHI8faKB5i69DbeTXgKmrOFoCKa_XVPggr6KFLteH2LvM7KNTQXDjQS0zZRwsMQBLra1Rz-h7EAY7yNryCmOKzhqsS1w9Lk2Y7L4b1D5lzFZbt_7cQFeg2A4DKrctZRgpTwjj8DYELJn1l8KUIKTao0QyIqBk5qEm6VC8",
    description:
      "Punctures are stressful. We'll change your tyre for your spare safely at the roadside, or provide mobile tyre fitting if you don't have a spare.",
  },
  {
    name: "Roadside Assistance",
    alt: "Roadside Assistance Icon",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLvxig8Y7AqQEN3fxelst4hT2dvwRHCUY-sM7iUHKOOOboDN9GXE3d5yDTX2O_miL65t-Ki5nxCdv4jGqbMg_3O2LZL6vuWBBdZVSws20Y16U6Kt4eUFOCsCZ_7s2R9sP_Wf9vxALDzuytm_XxFCfk8NyGJFQWUm-n4ZNEZcKZsNMc3ClYK-38Yer-mjhlUW1Z-3QDBrjLHXtFVskFN4ix0JME4Vg66BTlfM-DFK_gFILt825o101XQGS5M",
    description:
      "General minor repairs and troubleshooting. Our technicians aim to fix over 80% of faults right on the spot so you can continue your day.",
  },
];

export default function ServicesPage() {
  return (
    <div className="font-body-md">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-background border-b border-secondary-container">
        <nav className="flex justify-between items-center px-4 md:px-margin-desktop py-4 max-w-[1280px] mx-auto">
          <div className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary-container">
            Car Recovery Team
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              className="text-on-surface hover:text-primary-container transition-colors font-body-md"
              href="/"
            >
              Home
            </Link>
            <a
              className="text-primary-container font-bold border-b-2 border-primary-container pb-1 font-body-md"
              href="/services"
            >
              Services
            </a>
            <a
              className="text-on-surface hover:text-primary-container transition-colors font-body-md"
              href="/about"
            >
              About Us
            </a>
            <a
              className="text-on-surface hover:text-primary-container transition-colors font-body-md"
              href="/contact"
            >
              Contact Us
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block text-right">
              <p className="text-on-surface-variant text-sm font-label-md">
                24/7 Hotline
              </p>
              <p className="text-primary-container font-bold">
                +44 7856 978630
              </p>
            </div>
            <button className="bg-primary-container text-on-primary-container px-6 py-2 font-bold hover:bg-primary-fixed-dim transition-all active:scale-95">
              Call Now
            </button>
          </div>
        </nav>
      </header>
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 md:px-margin-desktop">
          <div className="max-w-[1280px] mx-auto relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary-container text-on-primary-container font-label-md px-3 py-1 mb-6 text-xs tracking-widest uppercase">
                Emergency Assistance 24/7
              </span>
              <h1 className="font-headline-xl text-headline-xl mb-6">
                Our Recovery{" "}
                <span className="text-primary-container">Services</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg mb-8">
                Stranded? We&apos;ve got you covered. From minor roadside
                issues to complete vehicle recovery, our professional
                responders are strategically located to reach you within
                minutes, anywhere in the region.
              </p>
            </div>
          </div>
          {/* Decorative atmospheric background element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary-container opacity-5 blur-[120px] pointer-events-none"></div>
        </section>

        {/* Services Bento Grid */}
        <section className="px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {services.map((service) => (
              <article
                key={service.name}
                className="bg-surface-container border border-secondary-container p-8 flex flex-col group hover:border-primary-container transition-colors duration-300 relative"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-6 w-16 h-16 bg-surface-container-high flex items-center justify-center border border-secondary-container">
                  <img alt={service.alt} className="w-12 h-12" src={service.image} />
                </div>
                <h3 className="font-headline-lg text-2xl mb-4 group-hover:text-primary-container transition-colors">
                  {service.name}
                </h3>
                <p className="text-on-surface-variant font-body-md mb-8 flex-grow">
                  {service.description}
                </p>
                <button className="w-full bg-primary-container text-on-primary-container py-4 font-bold uppercase tracking-widest hover:bg-primary-fixed-dim transition-all active:scale-95">
                  Request Assistance
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Danger/Emergency CTA */}
        <section className="mt-20 px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
          <div className="bg-error-container border-2 border-error p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-pulse">
            <div className="flex items-center gap-6">
              <span
                className="material-symbols-outlined text-error text-5xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                warning
              </span>
              <div>
                <h2 className="font-headline-lg text-on-error-container">
                  Immediate Danger?
                </h2>
                <p className="text-on-error-container opacity-90">
                  If you are on a motorway or in a dangerous location, call
                  us immediately.
                </p>
              </div>
            </div>
            <button className="w-full md:w-auto bg-error text-on-error px-10 py-5 font-bold uppercase text-xl shadow-lg hover:scale-105 active:scale-95 transition-transform">
              Emergency Call Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-secondary-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-4 md:px-margin-desktop py-12 max-w-[1280px] mx-auto">
          <div className="space-y-6">
            <div className="font-headline-lg text-headline-lg font-bold text-primary-container">
              Car Recovery Team
            </div>
            <p className="text-on-surface-variant max-w-xs font-body-md">
              Professional 24/7 roadside assistance and vehicle recovery
              services you can trust when it matters most.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <h4 className="font-label-md text-primary-container mb-2">
                SERVICES
              </h4>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md"
                href="#"
              >
                Breakdown Recovery
              </a>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md"
                href="#"
              >
                Car Towing
              </a>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md"
                href="#"
              >
                Jump Start
              </a>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md"
                href="#"
              >
                Fuel Delivery
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-label-md text-primary-container mb-2">
                QUICK LINKS
              </h4>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md"
                href="#"
              >
                Tyre Change
              </a>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md"
                href="#"
              >
                Roadside Assistance
              </a>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md"
                href="#"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-label-md text-primary-container">
              CONTACT US
            </h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-primary-container">
                  call
                </span>
                <span className="font-bold">+44 7856 978630</span>
              </p>
              <p className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary-container">
                  mail
                </span>
                <span>help@carrecoveryteam.co.uk</span>
              </p>
              <p className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary-container">
                  schedule
                </span>
                <span>Available 24 Hours / 7 Days</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-container py-6 text-center">
          <p className="text-on-surface-variant text-sm font-label-md">
            © 2024 Car Recovery Team. 24/7 Professional Roadside
            Assistance.
          </p>
        </div>
      </footer>
    </div>
  );
}
