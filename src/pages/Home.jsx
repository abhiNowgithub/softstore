// pages/Home.jsx
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { FaWhatsapp, FaCheck, FaRocket, FaShoppingCart, FaMobile, FaLaptop } from "react-icons/fa"
import SEO from '../components/SEO/SEO'
import Header from '../components/layout/Header'

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0)

  // Story steps animation sequence
  const storySteps = [
    { title: "Discover", desc: "Explore our premium digital solutions" },
    { title: "Consult", desc: "Get expert advice for your business" },
    { title: "Develop", desc: "We build your custom platform" },
    { title: "Launch", desc: "Go live with your digital business" }
  ]

  useEffect(() => {
    // Story progression animation
    const storyInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % storySteps.length)
    }, 3000)

    return () => {
      clearInterval(storyInterval)
    }
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  const services = [
    {
      title: "Ecommerce Platform",
      description: "Build your own Amazon/Flipkart like marketplace with complete admin, vendor, and customer apps.",
      price: "Starting at ₹6,999",
      features: [
        "Multi-vendor marketplace",
        "Admin dashboard",
        "Website platform",
        "Payment integration",
        "Order management"
      ],
      icon: <FaShoppingCart className="text-3xl" />,
      popular: true
    },
    {
      title: "Food Delivery App",
      description: "Swiggy/Zomato clone with restaurant apps, delivery partner apps, and admin panel.",
      price: "Starting at ₹6,999",
      features: [
        "Restaurant management",
        "Real-time tracking",
        "Delivery partner app",
        "Customer apps",
        "Admin dashboard",
        "Payment gateway"
      ],
      icon: <FaMobile className="text-3xl" />,
      popular: false
    },
    {
      title: "Quick Commerce",
      description: "Blinkit/Zepto like quick delivery platform for instant commerce solutions.",
      price: "Starting at ₹6,999",
      features: [
        "10-15 minute delivery",
        "Inventory management",
        "Delivery tracking",
        "Multiple store support",
        "Real-time analytics",
        "Customer loyalty"
      ],
      icon: <FaRocket className="text-3xl" />,
      popular: false
    }
  ]

  const features = [
    {
      icon: <FaCheck className="text-green-500" />,
      title: "White-label Solution",
      description: "Fully customizable with your branding and business logic"
    },
    {
      icon: <FaCheck className="text-green-500" />,
      title: "Source Code Included",
      description: "Get complete source code ownership for future modifications"
    },
    {
      icon: <FaCheck className="text-green-500" />,
      title: "6 Months Support",
      description: "Free technical support and maintenance for 6 months"
    },
    {
      icon: <FaCheck className="text-green-500" />,
      title: "App Store Deployment",
      description: "We help you deploy to Google Play Store and Apple App Store"
    }
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      <SEO 
        title="Custom Ecommerce & Food Delivery App Development | SoftStore"
        description="Build your own Amazon, Swiggy, or Blinkit like platform. Complete white-label solutions with source code. Start your digital business today."
        keywords="ecommerce app development, food delivery app, quick commerce platform, white-label solution, app development company"
        image="/images/softstore-og-image.png"
        url="https://softstore.com"
      />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          {/* Story Progress Indicator */}
          <div className="story-progress mb-8">
            <div className="flex justify-center space-x-4 mb-4">
              {storySteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-white scale-125' 
                      : index < currentStep 
                        ? 'bg-green-400' 
                        : 'bg-gray-400'
                  }`}
                ></div>
              ))}
            </div>
            <div className="story-content">
              <h3 className="text-2xl font-bold mb-2">{storySteps[currentStep].title}</h3>
              <p className="text-lg opacity-90">{storySteps[currentStep].desc}</p>
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Digital Business</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Complete white-label solutions for ecommerce, food delivery, and quick commerce platforms
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="https://wa.me/919315675135"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaWhatsapp className="text-2xl" />
              BOOK FREE CONSULTATION
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              VIEW SOLUTIONS
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support" },
              { number: "6 Months", label: "Free Maintenance" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Complete Solutions
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready-to-deploy platforms with complete source code and white-label solutions
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={index + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  service.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 font-semibold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="text-2xl font-bold text-blue-600 mb-6">{service.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="https://wa.me/919315675135"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-center block transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="text-xl" />
                    GET QUOTE
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Get
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete package with everything you need to start your digital business
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                custom={index + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Features */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Complete Package Includes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <FaLaptop className="text-3xl mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Website Platform</h4>
                <p className="text-blue-100">Responsive web application</p>
              </div>
              <div>
                <FaMobile className="text-3xl mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Mobile Apps</h4>
                <p className="text-blue-100">Android & iOS for all users</p>
              </div>
              <div>
                <FaRocket className="text-3xl mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Admin Panel</h4>
                <p className="text-blue-100">Complete management dashboard</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Digital Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a complete white-label solution with source code and 6 months free support
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/919315675135"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-2xl" />
                BOOK FREE CONSULTATION
              </a>
              <a
                href="tel:+919315675135"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                CALL NOW
              </a>
            </div>

            <div className="mt-8 text-gray-300">
              {/* <p>📞 +91 6299306548 | 💬 24/7 WhatsApp Support</p> */}
              <p>
                📞 +91 9315675135 | 💬 24/7 WhatsApp Support | 📩 
                <a href="mailto:abhishek.verma.hi@gmail.com" class="underline hover:text-white">
                   abhishek.verma.hi@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">SoftStore Solutions</h3>
          <p className="text-gray-400 mb-6">Your Partner in Digital Business Transformation</p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://wa.me/919315675135" className="text-gray-400 hover:text-white transition-colors">
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SoftStore Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home