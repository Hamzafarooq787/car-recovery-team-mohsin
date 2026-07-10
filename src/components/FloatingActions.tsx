export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col gap-2 sm:gap-3">
      <a
        href="https://wa.me/447856978630"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-[9999px] bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
      >
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.469-.148-.667.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.298-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.001 2c-5.523 0-10 4.477-10 10 0 1.768.464 3.489 1.34 5.002L2 22l5.13-1.32c1.457.783 3.098 1.19 4.87 1.19h.004c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.15h-.004c-1.61 0-3.19-.427-4.573-1.24l-.328-.194-3.234.83.86-3.144-.213-.331A8.147 8.147 0 013.85 12c0-4.502 3.649-8.15 8.152-8.15 4.502 0 8.15 3.648 8.15 8.15 0 4.502-3.648 8.15-8.15 8.15z" />
        </svg>
      </a>
      <a
        href="tel:+447856978630"
        aria-label="Call us"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-[9999px] bg-primary-container flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
      >
        <span
          className="material-symbols-outlined text-on-primary-container text-2xl sm:text-3xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          call
        </span>
      </a>
    </div>
  );
}
