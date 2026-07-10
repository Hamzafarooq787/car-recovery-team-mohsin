"use client";

import { useRef, useState } from "react";

const WHATSAPP_NUMBER = "447856978630";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    const formData = new FormData(formRef.current);
    const name = formData.get("name")?.toString().trim();
    const service = formData.get("service")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    const lines = [
      "Hi, I'd like a quotation for a recovery service.",
      name && `Name: ${name}`,
      service && `Service Required: ${service}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    formRef.current.reset();
    setStatus("idle");
  };

  return (
    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
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
          name="name"
          placeholder="John Doe"
          type="text"
        />
      </div>
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
          name="service"
        >
          <option>Breakdown Recovery</option>
          <option>Car Towing</option>
          <option>Jump Start</option>
          <option>Fuel Delivery</option>
          <option>Tyre Change</option>
          <option>Other</option>
        </select>
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
          name="message"
          placeholder="Describe your situation..."
          rows={4}
        ></textarea>
      </div>
      <button
        className="bg-primary-container text-on-primary-container px-10 py-4 font-bold uppercase tracking-wider hover:bg-primary-fixed-dim transition-all disabled:opacity-70 flex items-center gap-3"
        disabled={status === "sending"}
        type="submit"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.469-.148-.667.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.298-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.001 2c-5.523 0-10 4.477-10 10 0 1.768.464 3.489 1.34 5.002L2 22l5.13-1.32c1.457.783 3.098 1.19 4.87 1.19h.004c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.15h-.004c-1.61 0-3.19-.427-4.573-1.24l-.328-.194-3.234.83.86-3.144-.213-.331A8.147 8.147 0 013.85 12c0-4.502 3.649-8.15 8.152-8.15 4.502 0 8.15 3.648 8.15 8.15 0 4.502-3.648 8.15-8.15 8.15z" />
        </svg>
        {status === "sending" ? "Opening WhatsApp..." : "Get Quotation on WhatsApp"}
      </button>
    </form>
  );
}
