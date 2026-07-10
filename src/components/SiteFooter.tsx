import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "Breakdown Recovery",
  "Car Towing",
  "Jump Start",
  "Fuel Delivery",
  "Tyre Change",
  "Roadside Assistance",
];

export default function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-secondary-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-12 max-w-[1280px] mx-auto">
        {/* Brand & Info */}
        <div className="space-y-6 md:col-span-1">
          <div className="font-headline-lg text-headline-lg font-bold text-primary-container">
            Car Recovery Team
          </div>
          <p className="text-on-surface-variant max-w-xs font-body-md">
            Professional 24/7 roadside assistance and vehicle recovery
            services you can trust when it matters most.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-label-md text-primary-container uppercase text-xs tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="font-label-md text-primary-container uppercase text-xs tracking-widest">
            Services
          </h4>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service}>
                <Link
                  className="text-on-surface-variant hover:text-on-surface transition-colors font-body-md"
                  href="/services"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-label-md text-primary-container uppercase text-xs tracking-widest">
            Get Help Now
          </h4>
          <div className="space-y-3">
            <a
              className="flex items-center gap-2 text-on-surface hover:text-primary-container transition-colors font-bold"
              href="tel:+447856978630"
            >
              <span className="material-symbols-outlined text-primary-container">
                call
              </span>
              +44 7856 978630
            </a>
            <p className="flex items-center gap-2 text-on-surface-variant font-body-md">
              <span className="material-symbols-outlined text-primary-container">
                mail
              </span>
              help@carrecoveryteam.co.uk
            </p>
            <p className="flex items-center gap-2 text-on-surface-variant font-body-md">
              <span className="material-symbols-outlined text-primary-container">
                schedule
              </span>
              Available 24 Hours / 7 Days
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-container py-6">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-on-surface-variant text-sm font-body-md">
            © 2024 Car Recovery Team. 24/7 Professional Roadside Assistance.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-on-surface-variant text-sm font-body-md">
              System Status: All Vehicles Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
