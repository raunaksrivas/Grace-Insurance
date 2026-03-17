import { motion } from 'motion/react';
import { Shield, TrendingUp, Briefcase, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920" 
            alt="Modern Texas Office" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-6 border border-secondary/30">
              <Star className="w-4 h-4 mr-2 fill-secondary" />
              Texas Licensed Insurance Brokerage
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Protect Your Legacy. <br />
              <span className="text-secondary">Secure Your Future.</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              Affordable, customized insurance solutions for families and business owners in Texas. We bridge the gap to top-rated carriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-secondary text-center text-lg py-4 px-8">
                Get a Free Quote
              </Link>
              <Link to="/services/wealth" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all text-center text-lg">
                Wealth Planning
              </Link>
            </div>
            
            <div className="mt-12 flex items-center space-x-8 text-white/60 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                Affordable Rates
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                Expert Guidance
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                Texas Based
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Grace Insurance?</h2>
            <p className="text-lg text-slate-600">
              We don't just sell policies; we build relationships. As an independent agency, we work for you, not the insurance companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10 text-secondary" />,
                title: "Custom Protection",
                desc: "Tailored personal and commercial insurance that fits your specific needs and budget."
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-secondary" />,
                title: "Wealth Creation",
                desc: "Strategic retirement planning and wealth-building strategies to ensure long-term security."
              },
              {
                icon: <Briefcase className="w-10 h-10 text-secondary" />,
                title: "Business Growth",
                desc: "Comprehensive commercial solutions from General Liability to Fleet insurance for Texas businesses."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary rounded-2xl"></div>
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHlj_b8WxMQTQ/profile-displayphoto-shrink_800_800/B56Zjn.cYEH8Ac-/0/1756238563536?e=1775088000&v=beta&t=VY8vYWYqkPABK3B8h0ZHs11LKzJqfZ2oYV8I2gI_68g" 
                alt="Jince Madamana" 
                referrerPolicy="no-referrer"
                className="relative z-10 rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-xl z-20 text-white shadow-xl">
                <div className="text-3xl font-bold">8+ Years</div>
                <div className="text-secondary text-sm font-semibold uppercase tracking-wider">Experience</div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Meet Our Founder</h4>
              <h2 className="text-4xl font-bold text-primary mb-6">Jince Madamana</h2>
              <p className="text-xl italic text-slate-500 mb-8">
                "I arrived in America with a vision: to build a life of significance and help others do the same."
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                As the Principal and Founder of Grace Affordable Insurance Agency Inc., Jince is a dedicated Wealth Creation & Retirement Specialist. His mission is to help Texas families and business owners navigate the complexities of protection and legacy building.
              </p>
              <Link to="/about" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group">
                Read Full Story <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick View */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-6">Comprehensive Solutions</h2>
              <p className="text-slate-300 text-lg">
                From your first car to your business empire, we provide the coverage you need at every stage of life.
              </p>
            </div>
            <Link to="/contact" className="btn-secondary">View All Services</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Personal Insurance", list: ["Auto & Home", "Renters", "Landlord", "Umbrella"], link: "/services/personal" },
              { title: "Commercial Insurance", list: ["BOP", "General Liability", "Fleet Insurance", "Workers Comp"], link: "/services/commercial" },
              { title: "Financial Services", list: ["Life Insurance", "Retirement Planning", "Wealth Creation", "Legacy Building"], link: "/services/wealth" }
            ].map((service, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-secondary">{service.title}</h3>
                <ul className="space-y-4 mb-8">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="text-white font-semibold flex items-center hover:text-secondary transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Michael R.", role: "Small Business Owner", text: "Jince helped me secure my business when others couldn't find affordable rates. His expertise in commercial insurance is unmatched." },
              { name: "Sarah T.", role: "Homeowner", text: "The team at Grace Insurance made the process of bundling my home and auto so simple. I saved over $800 a year!" },
              { name: "David L.", role: "Retiree", text: "Wealth creation was always a mystery to me. Jince sat down and explained everything clearly. I finally feel secure about my legacy." }
            ].map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-sm text-slate-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Ready to Secure Your Future?</h2>
              <p className="text-xl text-primary/80 mb-10 max-w-2xl mx-auto">
                Join hundreds of Texas families and business owners who trust Grace Insurance for their protection and growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-xl">
                  Get Started Today
                </Link>
                <a href="tel:9724604144" className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-all shadow-xl">
                  Call (972) 460-4144
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
