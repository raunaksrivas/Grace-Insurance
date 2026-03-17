import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceData = {
  personal: {
    title: "Personal Insurance",
    subtitle: "Protecting what matters most to you and your family.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    description: "Your home and vehicles are likely your biggest investments. We help you find the right balance of coverage and affordability to ensure you're protected against the unexpected.",
    offerings: [
      { name: "Auto Insurance", desc: "Comprehensive coverage for your vehicles with competitive rates." },
      { name: "Homeowners Insurance", desc: "Protect your dwelling, personal property, and liability." },
      { name: "Renters Insurance", desc: "Affordable protection for your belongings in a rental property." },
      { name: "Landlord Insurance", desc: "Specialized coverage for property owners renting to others." }
    ]
  },
  commercial: {
    title: "Commercial Insurance",
    subtitle: "Securing the business you've worked hard to build.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    description: "Texas business owners face unique risks. From liability to property damage, we provide the robust commercial solutions you need to operate with peace of mind.",
    offerings: [
      { name: "Business Owners Policy (BOP)", desc: "Bundled coverage for small to medium-sized businesses." },
      { name: "General Liability", desc: "Protection against claims of bodily injury or property damage." },
      { name: "Fleet Insurance", desc: "Comprehensive coverage for your business vehicles." },
      { name: "Workers Compensation", desc: "Essential protection for your employees and your business." }
    ]
  },
  wealth: {
    title: "Wealth & Retirement",
    subtitle: "Building a legacy that lasts for generations.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200",
    description: "Financial security is the foundation of greatness. We help you navigate wealth creation and retirement planning to ensure your hard work pays off for you and your heirs.",
    offerings: [
      { name: "Life Insurance", desc: "Term, Whole, and Universal life options to protect your family." },
      { name: "Retirement Planning", desc: "Strategic advice to ensure a comfortable and secure retirement." },
      { name: "Wealth Creation", desc: "Growth strategies tailored to your long-term financial goals." },
      { name: "Legacy Planning", desc: "Ensuring your assets are passed down according to your wishes." }
    ]
  }
};

export default function ServicePage({ type }: { type: 'personal' | 'commercial' | 'wealth' }) {
  const data = serviceData[type];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-bold text-primary mb-6"
            >
              {data.title}
            </motion.h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <img src={data.image} alt={data.title} referrerPolicy="no-referrer" className="w-full h-[400px] object-cover rounded-3xl mb-12 shadow-xl" />
              <h2 className="text-3xl font-bold text-primary mb-6">Comprehensive Coverage</h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                {data.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.offerings.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="bg-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <ShieldCheck className="text-secondary w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.name}</h3>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="bg-primary text-white p-10 rounded-3xl shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6">Get a Quote</h3>
                  <p className="text-slate-300 mb-8">
                    Ready to see how much you can save? Our experts are ready to help you find the perfect policy.
                  </p>
                  <Link to="/contact" className="btn-secondary w-full text-center block mb-6">
                    Request a Quote
                  </Link>
                  <div className="text-center text-sm text-slate-400">
                    Or call us directly at:<br />
                    <a href="tel:9724604144" className="text-white font-bold text-lg mt-2 block hover:text-secondary transition-colors">
                      (972) 460-4144
                    </a>
                  </div>
                </div>

                <div className="mt-8 bg-slate-50 p-8 rounded-3xl border border-slate-200">
                  <h4 className="font-bold text-primary mb-4">Why Choose Us?</h4>
                  <ul className="space-y-3">
                    {['Independent Agency', 'Texas Licensed', 'Top-Rated Carriers', 'Personal Service'].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Explore Our Other Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(serviceData)
              .filter(([key]) => key !== type)
              .map(([key, service]) => (
                <Link 
                  key={key} 
                  to={`/services/${key}`}
                  className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-slate-500">{service.subtitle}</p>
                  </div>
                  <div className="bg-slate-100 p-4 rounded-full group-hover:bg-secondary group-hover:text-primary transition-colors">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
