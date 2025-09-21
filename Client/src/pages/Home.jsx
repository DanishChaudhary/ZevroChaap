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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zevro-flame-400 mb-4 bg-gradient-to-r from-zevro-flame-400 to-zevro-gold-400 bg-clip-text text-transparent">
                🇮🇳 India’s 1st Co-Branding Franchise Model
              </h2>

            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.6s' }}>
              At Zevro, we don’t replace your brand — we empower it. With our unique co-branding model, your restaurant keeps its own name and menu, while seamlessly adding  range as a new revenue stream. No extra infrastructure, no menu change — only higher sales backed by the strength of a national brand.
              <span className="text-zevro-gold-400 font-semibold"> Zevro’s signature chaap</span> range as a new revenue stream. No extra infrastructure, no menu change — only higher sales backed by the strength of a national brand.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Link to="/franchise">
                <Button variant="primary" size="lg"
                  className="w-full sm:w-auto"
                >
                  Become A Proud Franchise Owner
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

      {/* Our Vision Section */}
      <section className="py-20 bg-gradient-to-br from-zevro-maroon-900 to-zevro-maroon-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🌍 Our <span className="text-zevro-flame-400"> Vision</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building the world's largest chaap brand — Healthy Chaap, Pure Soya, Proudly Indian.

              <span className="text-zevro-gold-400 font-semibold"> At Zevro</span>, we dream big. We see a future where chaap stands proudly alongside pizza, burgers, and coffee as a global favorite. Our vision is to transform local restaurants into national brand outlets, creating opportunities for partners and delivering unforgettable taste to customers.

              By building India's first co-branding franchise network, Zevro will make pure soya, healthy, and innovative chaap accessible to millions.<span className="text-zevro-gold-400 font-semibold"> By 2026, our goal is to establish 500+ thriving outlets across India</span> as the foundation for global expansion — proudly Indian, proudly global.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zevro-maroon-900 mb-4">
              🌟 Our Story
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Every food revolution began with a simple idea.
                Pizza crossed oceans. Burgers built empires. Coffee became culture.
              </p>
              <p>
                Now, it's time for chaap — India's proud vegetarian innovation — to rise as the next global favorite.
              </p>
              <p>
                At Zevro, we started with a simple belief: chaap deserves more. More respect. More creativity. More reach. Once seen as just a street snack, we reimagined it as a global movement — healthy, pure soya, proudly Indian.
              </p>
              <p>
                But Zevro Chaap is more than a menu. It's a movement for restaurants. We built India's first co-branding franchise model that lets existing restaurants, cafés, and kitchens plug into our brand — instantly unlocking new customers, higher sales, and the power of national marketing.
              </p>
              <p>
                From Delhi NCR to every corner of India — and soon across the world — Zevro Chaap is not just food.
                It is a revolution in vegetarian dining, and a promise of healthy flavors, bold innovation, and Indian pride served on every plate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zevro-maroon-900 mb-4">
            🎯 Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of taste, health, and sustainability with our premium soya products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hover className="text-center p-8">
              <div className="w-16 h-16 bg-zevro-flame-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <p className="text-zevro-flame-600 text-2xl">🥗</p>
              </div>
              <h3 className="text-xl font-semibold text-zevro-maroon-900 mb-4">Health First</h3>
              <p className="text-gray-600">
                We serve 100% soya-based, protein-rich meals designed for a healthier lifestyle.
              </p>
            </Card>

            <Card hover className="text-center p-8">
              <div className="w-16 h-16 bg-zevro-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <p className="text-zevro-gold-600 text-2xl">✨</p>
              </div>
              <h3 className="text-xl font-semibold text-zevro-maroon-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Bold fusion recipes and creative flavors that make every bite unforgettable.
              </p>
            </Card>

            <Card hover className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <p className="text-green-600 text-2xl">💸</p>
              </div>
              <h3 className="text-xl font-semibold text-zevro-maroon-900 mb-4">Affordability</h3>
              <p className="text-gray-600">
                Premium quality food at prices everyone can enjoy.
              </p>
            </Card>

            <Card hover className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <p className="text-blue-600 text-2xl">🤝</p>
              </div>
              <h3 className="text-xl font-semibold text-zevro-maroon-900 mb-4">Co-Growth</h3>
              <p className="text-gray-600">
                We grow hand-in-hand with our restaurant partners through our co-branding model.
              </p>
            </Card>

            <Card hover className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <p className="text-purple-600 text-2xl">🔒</p>
              </div>
              <h3 className="text-xl font-semibold text-zevro-maroon-900 mb-4">Trust</h3>
              <p className="text-gray-600">
                Consistent taste, reliable supply, and a brand customers can depend on.
              </p>
            </Card>

            <Card hover className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <p className="text-green-600 text-2xl">🌱</p>
              </div>
              <h3 className="text-xl font-semibold text-zevro-maroon-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                Responsible sourcing and eco-friendly practices that care for our planet.
              </p>
            </Card>

            <Card hover className="text-center p-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <p className="text-indigo-600 text-2xl">📲</p>
              </div>
              <h3 className="text-xl font-semibold text-zevro-maroon-900 mb-4">Technology-Driven</h3>
              <p className="text-gray-600">
                Smart apps, POS, and loyalty systems to power seamless operations.
              </p>
            </Card>

            <Card hover className="text-center p-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <p className="text-yellow-600 text-2xl">💛</p>
              </div>
              <h3 className="text-xl font-semibold text-zevro-maroon-900 mb-4">Customer Delight</h3>
              <p className="text-gray-600">
                Every meal is more than food — it's an experience built on joy and loyalty.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gradient-to-br from-zevro-maroon-900 to-zevro-maroon-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card variant="glass" className="p-12">
              <div className="w-24 h-24 bg-zevro-flame-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-4xl">🎯</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                At Zevro, our mission is simple — to take India's favorite chaap from local streets to the global stage. We empower restaurants with an easy co-branding model, supply pure soya and healthy chaap, and create growth opportunities for entrepreneurs. Our promise is consistent taste, modern technology, and a brand customers trust. By 2026, Zevro will unite 500 thriving outlets across India, setting the stage for global expansion.
              </p>
            </Card>
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
