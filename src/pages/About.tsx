import { motion } from 'motion/react';
import { Target, Eye, Award, Heart, Shield, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Our Story & Mission
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Built on trust, integrity, and a vision to help others achieve financial greatness.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHlj_b8WxMQTQ/profile-displayphoto-shrink_800_800/B56Zjn.cYEH8Ac-/0/1756238563536?e=1775088000&v=beta&t=VY8vYWYqkPABK3B8h0ZHs11LKzJqfZ2oYV8I2gI_68g" 
                alt="Jince Madamana" 
                referrerPolicy="no-referrer"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-primary mb-8">A Vision Realized</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Jince Madamana arrived in America with more than just luggage; he arrived with a vision to build a life of significance. He understood early on that the foundation of any great success story is financial security.
                </p>
                <p>
                  Today, that vision is realized through **Grace Affordable Insurance Agency Inc.** As a Texas-licensed brokerage, we act as a vital bridge between our clients and top-rated insurance carriers.
                </p>
                <p>
                  Jince's passion lies in helping families and business owners navigate the complexities of protection—from the car you drive to the business you've built and the legacy you'll leave behind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="bg-secondary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Target className="text-secondary w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To provide comprehensive, affordable insurance and wealth creation solutions that empower our clients to protect their assets and grow their legacy with confidence.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="bg-secondary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="text-secondary w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be the most trusted financial partner for families and business owners in Texas, known for our integrity, expert guidance, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-slate-500">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award />, title: "Integrity", desc: "We do what's right for the client, always." },
              { icon: <Heart />, title: "Empathy", desc: "We understand the weight of protecting a family." },
              { icon: <Shield />, title: "Reliability", desc: "We are there when you need us most." },
              { icon: <TrendingUp />, title: "Excellence", desc: "We strive for the best results in every policy." }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-primary mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">{value.title}</h4>
                <p className="text-slate-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
