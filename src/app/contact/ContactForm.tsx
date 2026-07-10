"use client";

import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      formRef.current?.reset();
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  const buttonLabel =
    status === "sending"
      ? "SENDING..."
      : status === "sent"
      ? "INQUIRY SENT"
      : "Send Inquiry";

  return (
    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            className="block font-label-md text-on-surface-variant uppercase text-xs"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            className="w-full bg-background border border-outline focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface p-3 transition-all"
            id="name"
            placeholder="John Doe"
            type="text"
          />
        </div>
        <div className="space-y-2">
          <label
            className="block font-label-md text-on-surface-variant uppercase text-xs"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="w-full bg-background border border-outline focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface p-3 transition-all"
            id="email"
            placeholder="help@carrecoveryteam.co.uk"
            type="email"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            className="block font-label-md text-on-surface-variant uppercase text-xs"
            htmlFor="service"
          >
            Service Required
          </label>
          <select
            className="w-full bg-background border border-outline focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface p-3 transition-all"
            id="service"
          >
            <option>Breakdown Recovery</option>
            <option>Car Towing</option>
            <option>Jump Start</option>
            <option>Fuel Delivery</option>
            <option>Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label
            className="block font-label-md text-on-surface-variant uppercase text-xs"
            htmlFor="location"
          >
            Your Location
          </label>
          <input
            className="w-full bg-background border border-outline focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface p-3 transition-all"
            id="location"
            placeholder="City or Postcode"
            type="text"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          className="block font-label-md text-on-surface-variant uppercase text-xs"
          htmlFor="message"
        >
          Message Details
        </label>
        <textarea
          className="w-full bg-background border border-outline focus:border-primary-container focus:ring-1 focus:ring-primary-container text-on-surface p-3 transition-all"
          id="message"
          placeholder="Describe your situation..."
          rows={4}
        ></textarea>
      </div>
      <button
        className={`px-10 py-4 font-bold uppercase tracking-wider transition-all disabled:opacity-70 ${
          status === "sent"
            ? "bg-green-600 text-white"
            : "bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim"
        }`}
        disabled={status === "sending"}
        type="submit"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
