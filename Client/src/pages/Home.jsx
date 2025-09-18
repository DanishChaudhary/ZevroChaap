import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  const [whatsappConfig, setWhatsappConfig] = useState({
    number: '',
    defaultMessage: ''
  });

  useEffect(() => {
    // Fetch WhatsApp configuration from backend
    fetch(`${import.meta.env.VITE_API_BASE_URL}/contact/config`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setWhatsappConfig(data.whatsappConfig);
        }
      })
      .catch(err => { /* WhatsApp config fetch failed - silently handled */ });
  }, []);

  const openWhatsAppForFranchise = () => {
    const franchiseMessage = "Hi! I'm interested in starting a ZEVRO franchise. Could you please provide me with more details about franchise opportunities, investment requirements, and the application process?";
    const message = encodeURIComponent(franchiseMessage);
    const url = `https://wa.me/${whatsappConfig.number.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zevro-maroon-950 via-zevro-maroon-900 to-zevro-maroon-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated flame background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-zevro-flame-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-zevro-gold-400 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-zevro-flame-600 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8 animate-fade-in-up">
              <img
                src={new URL('../assets/logo.png', import.meta.url).href}
                alt="ZEVRO - Healthy Bite Pure Soya"
                className="mx-auto h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl"
              />
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-zevro-gold-400">ZEVRO</span>
              <br />
              <span className="text-zevro-flame-400 text-4xl md:text-5xl lg:text-6xl">Chaap Revolution</span>
            </h1>

            {/* Tagline */}
            <div className="text-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zevro-flame-400 mb-4 bg-gradient-to-r from-zevro-flame-400 to-zevro-gold-400 bg-clip-text text-transparent">
                🔥 Zevro – Scaling India’s Biggest Chaap Franchise Brand
              </h2>

            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.6s' }}>
              Transform your entrepreneurial dreams into reality with India's most trusted chaap franchise.
              <span className="text-zevro-gold-400 font-semibold"> Join 500+ successful franchisees</span> and be part of the plant-based food revolution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Link to="/franchise">
                <Button variant="primary" size="lg"
                className="w-full sm:w-auto"
                >
                  Get Started Today
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <Link to="/menu">
                <Button variant="outline" size="xl" className="w-full sm:w-auto border-zevro-gold-400 text-zevro-gold-400 hover:bg-zevro-gold-400 hover:text-zevro-maroon-900">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zevro-maroon-900 mb-4">
              Why Choose ZEVRO?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of taste, health, and sustainability with our premium soya products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover className="text-center p-8">
              <div className="w-16 h-16 bg-zevro-flame-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-zevro-flame-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zevro-maroon-900 mb-4">100% Natural</h3>
              <p className="text-gray-600">
                Made from premium quality soybeans with no artificial additives or preservatives.
              </p>
            </Card>

            <Card hover className="text-center p-8">
              <div className="w-16 h-16 bg-zevro-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-zevro-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zevro-maroon-900 mb-4">Health Certified</h3>
              <p className="text-gray-600">
                Approved by health authorities and packed with essential proteins and nutrients.
              </p>
            </Card>

            <Card hover className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zevro-maroon-900 mb-4">Sustainable</h3>
              <p className="text-gray-600">
                Eco-friendly production process that supports environmental sustainability.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-gradient-to-br from-zevro-maroon-900 to-zevro-maroon-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-zevro-flame-400">Vision</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing the food industry with premium plant-based soya products that nourish both people and planet.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2020, ZEVRO emerged from a simple yet powerful vision: to make healthy,
                  sustainable food accessible to everyone. Our journey began when our founder,
                  a nutrition enthusiast and environmental advocate, recognized the growing need
                  for plant-based alternatives that don't compromise on taste or quality.
                </p>
                <p>
                  Starting with a small team of food scientists and culinary experts, we dedicated
                  ourselves to perfecting the art of soya-based food production. Through countless
                  hours of research, testing, and refinement, we developed our signature products
                  that have now become favorites among health-conscious consumers.
                </p>
                <p>
                  Today, ZEVRO stands as a testament to innovation in the plant-based food industry,
                  with a growing network of franchise partners who share our commitment to health,
                  sustainability, and excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card variant="glass" className="p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-zevro-flame-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
                  <p className="text-gray-300">
                    To provide delicious, nutritious, and sustainable plant-based food solutions
                    that promote health and environmental well-being while building a community
                    of conscious consumers and successful franchise partners.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zevro-maroon-900 to-zevro-maroon-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your ZEVRO Franchise?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our growing network of successful franchise partners and bring healthy eating to your community.
          </p>
          <Button
            variant="secondary"
            size="xl"
            className="w-full sm:w-auto"
            onClick={openWhatsAppForFranchise}
          >
            Request Franchise
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
