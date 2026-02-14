export default function WhatsAppCTA() {
  return (
    <section className="bg-transparent py-14 px-4 border">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Heading */}
        <h2 className="text-black text-2xl md:text-3xl font-bold leading-relaxed">
          পেমেন্ট করতে সমস্যা হলে বা কিছু জানার প্রয়োজন হলে <br />
          হোয়াটসঅ্যাপে মেসেজ করুন!
        </h2>

        {/* WhatsApp Button */}
        <a
          href="https://api.whatsapp.com/send?phone=8801798979578"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-3
            bg-white text-green-600 font-bold
            px-8 py-4 rounded-full
            shadow-xl
            transform transition-all duration-300
            hover:scale-110 hover:shadow-2xl
            animate-pulse
          "
        >
          {/* WhatsApp Icon */}
          <svg aria-hidden="true" viewBox="0 0 448 512" className="w-6 h-6 fill-green-600">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z" />
          </svg>

          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  )
}
