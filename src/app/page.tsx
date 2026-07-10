const services = [
  {
    name: "Breakdown Recovery",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvQxl65eWF6SIkCqEqgYLtD0OSfcfxbid67mFE_N9TsOS6vyFvL79q9ciIZBHkNzWM2BQjJRM-rQWiHb8bHX4qaUrd-_5bS7h_pDMd6Ed0MSxQrmbgOzW1OZPj_r9oDxSuHCEHjRd4MhkSll5exjTU9hH5BFKUvWArBVKVR_RemlV_UC-Xw5nk8FCigtAEqy3duhL1Nng1bQ9bOvotw0bzZtZgcq0FX1Nhci66LuyyAYWAMa9nvOwdATSNZ9kyyyI9swfbx7Mr54k",
    description:
      "Rapid response for all types of vehicle breakdowns. We'll transport you and your car safely to your destination.",
  },
  {
    name: "Car Towing",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-qXvVZUujrQk8Uvs8Jzh2rpstAf5jL7dNpYiQXwamdHlsNQxI8qwa4ychAEMMjp_7WLEUQZr-RtFdcnTJXONpNRJDERdj8h5lEhE8Whm1bUcOb1rXLVzSSykfWgt34oHxAZ-jY9E6-J7kfkAvk68dAOEGs-SXUyZrf6NOKkttd9uL6t5tBt6FQmzQlTR5yeW9J2WCDDgy6PHKhkUzx2SgENYOukIlmOaK_BSujdQivpGTTzZReRNLKKcAB1Fz0auXlduiG2gkEbk",
    description:
      "Professional towing for short and long distances. Secure equipment for all car sizes and weights.",
  },
  {
    name: "Jump Start",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHRfU5z8M5_ee9uPG2Brc_6qER5aI4H0PIhLWHrNfXlkPFs6T_CwQK8YJFSvc2pW-2T3oY0E7JW6nqUdeeTo89WNzMWomt9jstFTNZyKf0EYkm4Anp3qlooVq603cEyowkU4zXRGNYw18FK56D0VHqViyg1-UscjW0fNiD15CL4gStNTRV83jJl2wEFIAMqI4W1kRol2mKvBOS2mzixIr6NPyBaUGLX_98tgKzRdIKtJ0e8M4uWmTTUjeGyh-LvM5bc9kmBCZTVjw",
    description:
      "Flat battery? Our technicians will get your engine running again in no time with professional jump-start gear.",
  },
  {
    name: "Fuel Delivery",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrX9e6xGLCuAGPXg7fgmg06czsnofflM8ikRwsaxXhEVYzutpXNtOjoQdR19KKsP80-oW69Q6sc4p6kejgeOpyVOELyC9JfMWQ1rCdmFb9jLu_UQHx5mmy-mulG_85CvvODInRTGjNtI0rJeCPYv-cwOu4ozb0XL6cXx1Fwrshi42OstteqvX8RqnlpjbAi0giltV1FgEAfKce-Oogz-qPgjpnaknca44W4BsgF4IU16OSthiGXOvLcsNwmAO5cCqy5OwQjSc2XSE",
    description:
      "Ran out of fuel? We'll deliver enough petrol or diesel to get you to the nearest service station.",
  },
  {
    name: "Tyre Change",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxkNGlalGRFdfE_rNbBpTLv1LfR8XtmXlAsgnlMRedGDFbTMnGTX9YBago7I66n5W1_0P1zG7gl_b7mHr7JSr82QNko3W5ZdJ5gGZ8qHEjpHuWEjy-E8tOe-8pPYOoP1iyUnORxBh3qLTn_MljqU2rzUv97JdprJyooG_CChY1CZmrvBwdm2svfOPZWpOvMd03eHYFa8sM-F2NcXY5MvLsyDmIoYBYaAE_Q73LIXsqmZ1quBKM0ARtOUYGSxTnhJXEEAzA1dnN5OA",
    description:
      "Puncture repair and roadside wheel changes. Don't risk your safety on the hard shoulder; let us handle it.",
  },
  {
    name: "Roadside Assistance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOr-l9C2-5nzw5Xr__19Jt_XYwjm96D00nKb8epa0QYWf_Peg8pbInVJwNnB1vWBdbh4jjGvxcmpvARBfZ9ocSGT-lWmeBQSWSWkgfJO6luX0FUfkYmAT8JO4pNT6LbAUo6TmFfwYD9sy5v-oz_30LNNqQrgJnlXQTcKZ97k-NBC6mlzA7CcCqYWkQHXZj3UYlAgXUvKNojQmCRewTNkn57B7ubbYXtuPkSRPqNBGBpFlPny2sTyv1Pj9bafwDUb3xTB2zMqnXZ0U",
    description:
      "Minor mechanical repairs at the scene to get you back on your journey without needing a tow.",
  },
];

export default function Home() {
  return (
    <>
      {/* Header / TopAppBar */}
      <header className="w-full top-0 sticky z-50 bg-surface border-b border-outline-variant flat no shadows">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-unit max-w-[1280px] mx-auto h-16">
          <div className="flex items-center gap-2">
            <span className="font-headline-lg text-headline-lg font-bold text-primary">
              Car Recovery Team
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <nav className="flex gap-6">
              <a
                href="#"
                className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1"
              >
                Home
              </a>
              <a
                href="#"
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              >
                About
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="font-label-md text-label-md text-on-surface-variant">
                  +44 7856 978630
                </span>
              </div>
              <button className="bg-primary-container text-on-primary-container px-6 py-2 font-label-md text-label-md font-bold uppercase tracking-wider hover:bg-primary-fixed-dim transition-all active:scale-95 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  phone_in_talk
                </span>
                Call Now
              </button>
            </div>
          </div>
          {/* Mobile Action */}
          <button className="md:hidden bg-primary-container text-on-primary-container p-2 active:scale-95">
            <span className="material-symbols-outlined">phone_in_talk</span>
          </button>
        </div>
      </header>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-outline-variant">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5u-j4XmwyzwikEeFZ8YseGiE8iXa-JVjO45cQpWd2GpBqHUqWH2lQ1ZoIizG2hbBYTStBqUhEcsoHG45cmD2Wxw-3exeLJxpbH4q6av_ciB6qoxdPF4O6XLXdDfuv0NyRFoLyb1RxbVNeI05M8TRjhzVOKAcbnj1jH7UkcRQXiAMXX7DQtln3Y83sCDsM5uoK8BlTrM7nPbmv72RZJzhRtjCKkzrRwTba1SW8qAtyCwaO2CdFKCi760-Wj_I3hKAryPAahoK46FE"
              alt=""
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full py-20">
            <div className="max-w-2xl border-l-4 border-primary-container pl-8 py-4">
              <span className="font-label-md text-label-md text-primary-container uppercase tracking-[0.2em] mb-4 block">
                24/7 Professional Assistance
              </span>
              <h1 className="font-headline-xl text-headline-xl text-white mb-6 uppercase leading-none tracking-tight text-shadow-strong">
                Fast &amp; Reliable Car Recovery{" "}
                <span className="text-primary-container">
                  When You Need It Most
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                Professional roadside assistance, towing, and recovery
                services available 24 hours a day, 7 days a week. We get you
                moving again, fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+447856978630"
                  className="bg-primary-container text-on-primary-container px-8 py-4 font-headline-lg text-headline-lg flex items-center justify-center gap-3 hover:bg-primary-fixed-dim transition-all active:scale-95"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    call
                  </span>
                  Call Now: +44 7856 978630
                </a>
                <button className="border border-outline px-8 py-4 font-headline-lg text-headline-lg text-white hover:bg-surface-variant transition-all flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">info</span>
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
            <div className="mb-16">
              <h2 className="font-headline-xl text-headline-xl uppercase mb-4">
                Our <span className="text-primary-container">Services</span>
              </h2>
              <div className="h-1 w-24 bg-primary-container"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="group bg-surface-container border border-outline-variant p-8 hover:border-primary-container hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <div className="mb-6">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-headline-lg text-headline-lg uppercase mb-3">
                    {service.name}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-surface border-y border-outline-variant">
          <div className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="relative p-unit emergency-pulse border-2">
                  <img
                    className="w-full aspect-video object-cover"
                    alt="A highly detailed professional image of a modern yellow recovery truck with flashing amber lights on a dark motorway at night, reflecting the authority and reliability of a 24/7 emergency response service. The scene is illuminated by the intense headlights and industrial work lights, highlighting a professional technician in high-visibility gear. High contrast and cinematic lighting accentuate the dark charcoal and bright yellow brand colors."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVzf2BGbFKPbpJ9fK9b0-PpFLf1SW61EM_z09bVtVzob8PZ602o_FI3GwukkXG9hcIxsQ6fZbClpIRd_MPKYeYCYpPx2KF0N_SUPfa1iY204RldL89q3t_hcDoI3KUnGLJoZM5QVeaXps_DVMFEM3fNX5KkVyO0yj9CKoqOdOjN1bqaJDyb8rgCqV7QkD_cqezumhmiCAfyVQ_309grkuvLksN9s6fwTF9GP1HCgTzpX0sxsQJ7Vev1teBeBHmY7omfdFkrxtfg-8"
                  />
                  <div className="absolute bottom-6 right-6 bg-primary-container p-6">
                    <span className="font-headline-xl text-headline-xl text-on-primary-container leading-none block">
                      30
                    </span>
                    <span className="font-label-md text-label-md text-on-primary-container font-bold uppercase tracking-widest">
                      Min response
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="font-headline-xl text-headline-xl uppercase mb-8">
                  Why Choose{" "}
                  <span className="text-primary-container">Our Team?</span>
                </h2>
                <ul className="space-y-8">
                  <li className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-surface-variant flex items-center justify-center border-l-4 border-primary-container">
                      <span className="material-symbols-outlined text-primary-container">
                        schedule
                      </span>
                    </div>
                    <div>
                      <h4 className="font-callout text-callout uppercase mb-2">
                        24/7 availability
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        We never close. Day or night, rain or shine, our
                        recovery vehicles are on standby to assist you.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-surface-variant flex items-center justify-center border-l-4 border-primary-container">
                      <span className="material-symbols-outlined text-primary-container">
                        verified_user
                      </span>
                    </div>
                    <div>
                      <h4 className="font-callout text-callout uppercase mb-2">
                        professional team
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Fully insured, qualified, and highly experienced
                        recovery technicians who prioritize your safety.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-surface-variant flex items-center justify-center border-l-4 border-primary-container">
                      <span className="material-symbols-outlined text-primary-container">
                        speed
                      </span>
                    </div>
                    <div>
                      <h4 className="font-callout text-callout uppercase mb-2">
                        rapid response
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Strategically located teams ensure the fastest
                        possible arrival times to minimize your wait.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-container">
          <div className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto text-center">
            <h2 className="font-headline-xl text-headline-xl text-on-primary-container uppercase mb-6">
              In an Emergency?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container/80 mb-10 max-w-2xl mx-auto">
              Speak directly to our recovery dispatch team for an immediate
              quote and ETA.
            </p>
            <a
              className="inline-flex bg-surface text-primary px-12 py-6 font-headline-xl text-headline-xl uppercase tracking-tighter hover:bg-surface-variant transition-all group items-center gap-4"
              href="tel:+447856978630"
            >
              <span className="material-symbols-outlined text-[40px] group-hover:rotate-12 transition-transform">
                phone_in_talk
              </span>
              +44 7856 978630
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto bg-surface-container-lowest border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop py-12 max-w-[1280px] mx-auto">
          {/* Brand & Info */}
          <div className="space-y-6">
            <span className="font-headline-lg text-headline-lg font-bold text-primary">
              Car Recovery Team
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              Reliable, professional, and fast recovery services. Available
              24/7 across the region for all your roadside assistance needs.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  public
                </span>
              </a>
            </div>
          </div>
          {/* Services Links */}
          <div className="space-y-6">
            <h4 className="font-label-md text-label-md font-bold uppercase tracking-widest text-primary">
              Our Services
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <a
                className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                Breakdown Recovery
              </a>
              <a
                className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                Car Towing
              </a>
              <a
                className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                Jump Start
              </a>
              <a
                className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                Fuel Delivery
              </a>
              <a
                className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                Tyre Change
              </a>
              <a
                className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                Roadside Assistance
              </a>
            </div>
          </div>
          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-label-md text-label-md font-bold uppercase tracking-widest text-primary">
              Get Help Now
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container">
                  phone
                </span>
                <span className="font-headline-lg text-headline-lg text-on-surface">
                  +44 7856 978630
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container">
                  alarm
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  Available 24 hours / 7 days a week
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-outline-variant py-6">
          <div className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto flex flex-col md:row justify-between gap-4">
            <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
              © 2024 Car Recovery Team. All rights reserved. Professional
              Roadside Assistance.
            </p>
            <div className="flex justify-center gap-6">
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                href="#"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
