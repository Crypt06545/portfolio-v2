import JsonContactCard from "./JsonContactCard";
import ContactFormCard from "./ContactFormCard";

const ContactSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] sm:text-[11px] tracking-widest font-medium text-amber-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            SYSTEM.CONTACT :: ESTABLISH_CONNECTION
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100">
            &lt;Contact_Me /&gt;
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* LEFT SIDE - JSON Card */}
          <div className="flex-1">
            <JsonContactCard />
          </div>

          {/* RIGHT SIDE - Code Form Card */}
          <div className="flex-1">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
