import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About Us | Car Recovery Team",
};

export default function AboutPage() {
  return (
    <div className="font-body-md">
      <style>{`
        .emergency-glow {
          animation: about-pulse-glow 2s infinite ease-in-out;
        }
        @keyframes about-pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.2); }
          50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.5); }
        }
        .border-left-accent {
          border-left: 4px solid #ffd700;
        }
      `}</style>
      <SiteHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden border-b border-secondary-container">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            <img
              alt="Car Recovery Service Night"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AP1WRLt5iyULqV9GDm63S3rIVDPVraYcEBv2U61eZKpbRKkoM6h9Zju3zJRQKzMo_vTeTWe_6yDM_Qkt0mEwzp2tsFK9-s2yD7DvArf6DWvx98Yc1NQGb9XPkf8KjJSivbBpDWaQHd0uvWOUdDlJmAfLERfUZ8LKOS_a6gYePMTLsUffemNX2DrCbtHr3N4rUnGFMXeusMOQ8wWycM1RAwzzRZIEgwXCCkHvxS16cIFjSbCBqp9R4DD07S4uhQ"
            />
          </div>
          <div className="relative z-20 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border border-primary-container/30 text-primary-container mb-6">
                <span className="material-symbols-outlined text-[18px]">
                  verified
                </span>
                <span className="font-label-md uppercase tracking-wider text-[12px]">
                  Professional Excellence since 2010
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-white mb-6">
                Built on Reliability. <br />
                <span className="text-primary-container">
                  Driven by Expertise.
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                When you&apos;re stranded, you don&apos;t just need a
                tow—you need a professional response team that understands
                the urgency of your situation. We are the UK&apos;s premier
                roadside assistance specialists.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+447856978630"
                  className="bg-primary-container text-on-primary-container px-8 py-4 font-bold text-lg hover:bg-primary-fixed-dim transition-all emergency-glow"
                >
                  GET IMMEDIATE HELP
                </a>
                <Link
                  href="/services"
                  className="border border-on-surface text-on-surface px-8 py-4 font-bold text-lg hover:bg-surface-container-highest transition-all"
                >
                  VIEW OUR SERVICES
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / Why Choose Us Grid */}
        <section className="py-20 bg-surface-container-lowest">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="bg-surface-container p-8 border-left-accent">
                <span className="material-symbols-outlined text-primary-container text-4xl mb-4">
                  timer
                </span>
                <h3 className="font-headline-lg text-headline-lg text-white mb-2">
                  30-Minute Response
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  Our strategic fleet positioning ensures we reach most
                  roadside emergencies within half an hour, day or night.
                </p>
              </div>
              <div className="bg-surface-container p-8 border-left-accent">
                <span className="material-symbols-outlined text-primary-container text-4xl mb-4">
                  gavel
                </span>
                <h3 className="font-headline-lg text-headline-lg text-white mb-2">
                  Fully Insured
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  Rest easy knowing your vehicle is in safe hands. We carry
                  comprehensive liability and transit insurance for total
                  peace of mind.
                </p>
              </div>
              <div className="bg-surface-container p-8 border-left-accent">
                <span className="material-symbols-outlined text-primary-container text-4xl mb-4">
                  engineering
                </span>
                <h3 className="font-headline-lg text-headline-lg text-white mb-2">
                  Expert Technicians
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  Our team consists of IVR-certified recovery specialists
                  with years of experience in complex vehicle extraction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 border-t border-secondary-container">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-headline-xl text-headline-xl text-white">
                  Our Story: From One Truck to a{" "}
                  <span className="text-primary-container">
                    Trusted Fleet.
                  </span>
                </h2>
                <div className="w-20 h-1 bg-primary-container"></div>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Car Recovery Team was founded on a simple realization: the
                  recovery industry lacked a truly &quot;customer-first&quot;
                  professional standard. We saw drivers stranded for hours
                  with little communication and unprofessional service.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  What started as a single flatbed in London has grown into
                  a highly coordinated network of recovery specialists
                  spanning the region. Our growth is built entirely on the
                  trust of local drivers who know that when they call us,
                  help is actually on the way.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div>
                    <div className="text-primary-container font-headline-lg text-4xl">
                      14+
                    </div>
                    <div className="text-on-surface font-label-md">
                      Years Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-primary-container font-headline-lg text-4xl">
                      25k+
                    </div>
                    <div className="text-on-surface font-label-md">
                      Vehicles Recovered
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-primary-container/10 blur-xl transition-all group-hover:bg-primary-container/20"></div>
                <div className="relative border border-secondary-container bg-surface-container-high overflow-hidden">
                  <div
                    className="aspect-video bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOE9q_Xfupc05BbK7pNMwWmP4JCNPkze7z9-hReUYxvaf33LWyPqKN6PV_nulOy90j8u4LN3Gsf6Nab1tT6LEH2XGLGIJ9BSWo2CDbhHXGv0NbhllllP61UxDLlS61S2nGjkumrOZ7n2gLH7gI7arcQcIpRJNOg5KTaLTfXn3HT8sGX4dug4wtCJyAhx8MTCJPjoyiWUl_Wn1mDw-CBxWh5G9-zM3jmMJvNCN9o3CpRiz2FaBtod4dkC153U37fhI4lHboix_6RIQ')",
                    }}
                  ></div>
                  <div className="p-8">
                    <h4 className="font-headline-lg text-white mb-2 italic">
                      &quot;We don&apos;t just tow cars; we rescue people
                      from stressful situations.&quot;
                    </h4>
                    <p className="text-primary-container font-bold">
                      — Founder, Car Recovery Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Services Bento Grid */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-xl text-headline-xl text-white mb-4">
                Precision Assistance
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Our expertise extends beyond simple towing. We handle
                complex roadside challenges with industrial-grade equipment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 h-full md:h-[600px]">
              <div className="md:col-span-3 bg-surface-container-highest p-8 flex flex-col justify-end border border-secondary-container hover:border-primary-container transition-all group relative overflow-hidden">
                <span className="material-symbols-outlined text-primary-container absolute top-8 right-8 text-5xl opacity-20 group-hover:opacity-100 transition-all">
                  battery_charging_full
                </span>
                <h3 className="font-headline-lg text-white mb-2">
                  Jump Starts &amp; Fuel
                </h3>
                <p className="text-on-surface-variant">
                  Rapid response for dead batteries or empty tanks to get
                  you moving without a tow.
                </p>
              </div>
              <div className="md:col-span-3 bg-surface-container-highest p-8 flex flex-col justify-end border border-secondary-container hover:border-primary-container transition-all group relative overflow-hidden">
                <span className="material-symbols-outlined text-primary-container absolute top-8 right-8 text-5xl opacity-20 group-hover:opacity-100 transition-all">
                  tire_repair
                </span>
                <h3 className="font-headline-lg text-white mb-2">
                  Tyre Changes
                </h3>
                <p className="text-on-surface-variant">
                  Safe roadside tyre replacement using professional
                  hydraulic equipment on any vehicle type.
                </p>
              </div>
              <div className="md:col-span-4 bg-surface-container-high p-8 flex flex-col justify-end border border-secondary-container hover:border-primary-container transition-all group relative overflow-hidden">
                <span className="material-symbols-outlined text-primary-container absolute top-8 right-8 text-5xl opacity-20 group-hover:opacity-100 transition-all">
                  art_track
                </span>
                <h2 className="font-headline-xl text-white mb-2">
                  Long-Distance Towing
                </h2>
                <p className="text-on-surface-variant">
                  Inter-city vehicle transport services with scheduled
                  pickups and guaranteed delivery times.
                </p>
              </div>
              <div className="md:col-span-2 bg-primary-container p-8 flex flex-col justify-end border border-primary-container hover:bg-primary-fixed-dim transition-all group relative overflow-hidden">
                <span className="material-symbols-outlined text-on-primary-container absolute top-8 right-8 text-5xl">
                  warning
                </span>
                <h3 className="font-headline-lg text-on-primary-container mb-2">
                  Accident Recovery
                </h3>
                <p className="text-on-primary-container/80">
                  Specialized winching and clearing services for damaged
                  vehicles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
            <div className="inline-block px-4 py-2 bg-error-container text-on-error-container mb-8 font-bold border border-error animate-pulse">
              AVAILABLE NOW: 24/7 OPERATIONAL
            </div>
            <h2 className="font-headline-xl text-headline-xl text-white mb-8">
              Need Assistance Right Now?
            </h2>
            <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto mb-12">
              Don&apos;t wait in the dark. Our dispatch team is ready to
              coordinate your rescue immediately. One call is all it takes
              to get an expert to your location.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                className="w-full sm:w-auto bg-primary-container text-on-primary-container px-6 sm:px-12 py-4 sm:py-5 font-bold text-base sm:text-xl md:text-2xl sm:whitespace-nowrap hover:bg-primary-fixed-dim transition-all emergency-glow flex items-center justify-center gap-3"
                href="tel:+447856978630"
              >
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  call
                </span>
                CALL +44 7856 978630
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
