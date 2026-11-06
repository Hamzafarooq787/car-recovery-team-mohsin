import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact Us | Car Recovery Team",
};

export default function ContactPage() {
  return (
    <div className="font-body-md text-on-surface">
      <style>{`
        .emergency-pulse {
          animation: contact-pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes contact-pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(255, 215, 0, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 215, 0, 0); }
        }
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 16px;
        }
        .bento-item {
          background: #1f2020;
          border: 1px solid #3D3D3D;
          padding: 24px;
        }
      `}</style>
      <SiteHeader />
      <main className="pt-24 pb-20 px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        {/* Emergency Hero Section */}
        <section className="mb-12">
          <div className="relative overflow-hidden bg-surface-container-low border border-secondary-container p-8 md:p-12">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-error-container text-on-error-container px-3 py-1 font-label-md mb-6 uppercase tracking-widest text-xs">
                  Emergency Response
                </span>
                <h1 className="font-headline-xl text-headline-xl mb-4 text-on-background uppercase italic">
                  Stranded on the Road?
                </h1>
                <p className="text-body-lg font-body-lg text-on-surface-variant mb-8 max-w-lg">
                  Our team is active 24/7. Average response time is under 45
                  minutes. Contact our dispatch center immediately for
                  professional recovery.
                </p>
                <a
                  className="emergency-pulse inline-flex items-center justify-center bg-primary-container text-on-primary-container w-full md:w-auto px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold uppercase tracking-tight sm:whitespace-nowrap gap-3 hover:bg-primary-fixed-dim transition-all"
                  href="tel:+447845297881"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    phone_in_talk
                  </span>
                  Call 07845 297881
                </a>
              </div>
              <div className="hidden md:block">
                <div className="aspect-video bg-surface-container-highest relative border-4 border-primary-container/20">
                  <img
                    alt="A professional heavy-duty car recovery truck with bright yellow hazard lights flashing on a dark, wet highway at night. The lighting is dramatic and high-contrast, emphasizing the metallic textures and the authoritative presence of the vehicle. The overall mood is reliable, industrial, and urgent, with the Deep Charcoal background highlighting the Emergency Yellow accents of the truck's livery."
                    className="w-full h-full object-cover grayscale-[0.2]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBY75PErTNaKTqz0fshWTo_Jyk4M38qZCDca9VgG9DP5lsT1h_wSUnYKf2vvEaCE3b5ILU7NBNDrHEcbTT4SCMt24y-_eVhxWHg6gH0Yht6JQFhXd4E7JW9j5cG5zqMsa9RjM-8ZUnvd5iUApWXPRtRDrBEM1uhke6XsMyrwoiv2X4s_835tkdOuQlONEvrFpiRpwpKolz8TD0bLFR8hXwA2559_tcTmqsO0kpMTYBEvrq6OpafIUci5v6VEx1buLrN0TxZb1iCSc"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            {/* Subtle background geometric pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
              <svg fill="none" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern height="40" id="pattern-hex" patternUnits="userSpaceOnUse" width="40" x="0" y="0">
                  <path d="M20 0l17.32 10v20L20 40 2.68 30V10L20 0z" stroke="currentColor" strokeWidth="1"></path>
                </pattern>
                <rect fill="url(#pattern-hex)" height="100%" width="100%"></rect>
              </svg>
            </div>
          </div>
        </section>

        {/* Main Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Contact Form */}
          <div className="lg:col-span-8 bg-surface-container p-8 border border-secondary-container">
            <h2 className="font-headline-lg text-headline-lg mb-6 text-on-background">
              Non-Urgent Inquiries
            </h2>
            <p className="text-on-surface-variant font-body-md mb-8">
              For quotes, booking inquiries, or general questions, please use
              the form below. We typically respond within 2 hours during
              business windows.
            </p>
            <ContactForm />
          </div>
          {/* Contact Info & Quick Info */}
          <div className="lg:col-span-4 flex flex-col gap-gutter">
            <div className="bg-surface-container-high p-8 border-l-4 border-primary-container flex-grow">
              <h3 className="font-headline-lg text-headline-lg mb-6 text-on-background">
                Find Us
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary-container">
                    mail
                  </span>
                  <div>
                    <p className="font-label-md text-xs uppercase text-on-surface-variant">
                      Email Support
                    </p>
                    <p className="font-body-lg">help@carrecoveryteam.co.uk</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary-container">
                    location_on
                  </span>
                  <div>
                    <p className="font-label-md text-xs uppercase text-on-surface-variant">
                      Operating Area
                    </p>
                    <p className="font-body-lg">
                      Greater London &amp; Surrounding Counties
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary-container">
                    schedule
                  </span>
                  <div>
                    <p className="font-label-md text-xs uppercase text-on-surface-variant">
                      Availability
                    </p>
                    <p className="font-body-lg">
                      24 Hours / 7 Days / 365 Days
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Live Map / Service Area Placeholder */}
            <div className="bg-surface-container p-4 border border-secondary-container h-64 relative overflow-hidden group">
              <div className="absolute inset-0 bg-surface-container-highest">
                <img
                  alt="A stylized, high-contrast dark mode map showing the London metropolitan area with highlighted service zones. The map uses a palette of Deep Charcoal, Surface Grey, and sharp Emergency Yellow lines to indicate major motorways and response hubs. The style is technical and clean, resembling a GPS navigation interface optimized for visibility."
                  className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE8kf1nKkcSvVEWL5NwBJG-kpp-dG-IAsvzZfG3DSl-CPXB6hnAty0m6pnWxjIgWMRpQOOUNo-M5kF7ujDY3WdMiifNfnwWqmI_SFJZterRKzSmifDLWw2esENvOkGUWyKAc8V1EmPFGTMiiZgHx9yNZSxQMS6jH_SFzdPZ-HQLSiDjddko5TPfDJJVnn3t5ansIMqLz86yhvynQmY3KRs644tU__j2Kr-7kAVhrS17Crlsp6Xb9QXZ-1FpEymLV8kAHSBITy_qTw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                <p className="font-label-md text-xs uppercase text-primary-container">
                  Dispatch Zone: Active
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown Guide Section */}
        <section className="mt-16">
          <h2 className="font-headline-lg text-headline-lg mb-8 text-on-background text-center uppercase tracking-tight">
            What to do in a breakdown
          </h2>
          <div className="grid md:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-low border border-secondary-container p-6 relative">
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xl">
                1
              </span>
              <h3 className="font-callout text-callout mb-3 mt-4 text-primary-container">
                Safety First
              </h3>
              <p className="text-on-surface-variant">
                Pull as far over to the left as possible. Turn on your
                hazard lights and use sidelights if it&apos;s dark or
                visibility is poor.
              </p>
            </div>
            <div className="bg-surface-container-low border border-secondary-container p-6 relative">
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xl">
                2
              </span>
              <h3 className="font-callout text-callout mb-3 mt-4 text-primary-container">
                Exit the Vehicle
              </h3>
              <p className="text-on-surface-variant">
                Exit through the passenger door. Move away from the road,
                ideally behind a crash barrier, and keep children
                supervised.
              </p>
            </div>
            <div className="bg-surface-container-low border border-secondary-container p-6 relative">
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xl">
                3
              </span>
              <h3 className="font-callout text-callout mb-3 mt-4 text-primary-container">
                Call for Help
              </h3>
              <p className="text-on-surface-variant">
                Contact 07845 297881. Provide your location (use
                landmarks or motorway marker posts) and vehicle details.
              </p>
            </div>
          </div>
          <div className="mt-8 bg-error/10 border border-error p-6 flex flex-col md:flex-row items-center gap-6">
            <span
              className="material-symbols-outlined text-error text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              warning
            </span>
            <p className="text-on-surface font-semibold text-center md:text-left">
              If you are on a motorway and feel you are in immediate danger,
              dial 999 first, then contact our recovery team.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
