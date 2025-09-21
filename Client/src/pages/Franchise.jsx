import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import FormField from '../components/ui/FormField';

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    enquiryType: 'franchise',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({
          name: '', email: '', phone: '', city: '',
          enquiryType: 'franchise', message: '',
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Failed to submit form' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Submit your application and schedule a consultation with our franchise team.'
    },
    {
      number: '02',
      title: 'Qualification & Training',
      description: 'Complete our qualification process and comprehensive training program.'
    },
    {
      number: '03',
      title: 'Launch & Support',
      description: 'Launch your ZEVRO franchise with ongoing support and marketing assistance.'
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Proven Business Model',
      description: 'Join a successful franchise system with proven profitability and growth potential.'
    },
    {
      icon: '🎯',
      title: 'Marketing Support',
      description: 'Comprehensive marketing materials and campaigns to drive customer acquisition.'
    },
    {
      icon: '📚',
      title: 'Training Program',
      description: 'Complete training on operations, management, and customer service excellence.'
    },
    {
      icon: '🤝',
      title: 'Ongoing Support',
      description: '24/7 support from our experienced team to ensure your success.'
    },
    {
      icon: '🌱',
      title: 'Growing Market',
      description: 'Tap into the rapidly expanding plant-based food market with high demand.'
    },
    {
      icon: '🏆',
      title: 'Brand Recognition',
      description: 'Leverage the established ZEVRO brand and customer loyalty.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zevro-maroon-950 via-zevro-maroon-900 to-zevro-maroon-800">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Own a <span className="text-zevro-flame-400">ZEVRO</span> Franchise
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Grow with India’s 1st co-branding model – simple, scalable, and profitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
              <Button variant="primary" size="lg" 
              className="w-full sm:w-auto"
              >
                Request Information
              </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-zevro-gold-400 text-zevro-gold-400 hover:bg-zevro-gold-400 hover:text-zevro-maroon-900">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - ZEVRO Style */}
      <section className="py-20 bg-gradient-to-br from-zevro-maroon-900 via-zevro-maroon-800 to-zevro-maroon-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-zevro-flame-400">ZEVRO</span> Franchise?
            </h2>
            <div className="w-24 h-1 bg-zevro-flame-400 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the perfect blend of healthy food, profitable business, and proven success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Unique Co-Branding Model */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-zevro-flame-400 to-zevro-flame-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-zevro-flame-400/25 transition-all duration-300">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Unique Co-Branding Model</h3>
              <p className="text-gray-300 text-sm">Add Zevro Chaap to your restaurant without changing your name or menu.</p>
            </div>

            {/* Low Franchise Cost */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                <span className="text-white text-2xl font-bold">💰</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Low Franchise Cost – ₹1 Lakh</h3>
              <p className="text-gray-300 text-sm">India's lowest entry barrier with the highest growth potential.</p>
            </div>

            {/* Zero Royalty */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-zevro-maroon-600 to-zevro-maroon-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-zevro-maroon-600/25 transition-all duration-300">
                <span className="text-white text-2xl">🔓</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Zero Royalty</h3>
              <p className="text-gray-300 text-sm">Keep 100% of your profits – no royalty, no profit sharing.</p>
            </div>

            {/* Premium Quality Direct Supply */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-zevro-flame-500 to-zevro-flame-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-zevro-flame-500/25 transition-all duration-300">
                <span className="text-white text-2xl">🥗</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Premium Quality Direct Supply</h3>
              <p className="text-gray-300 text-sm">Pure soya, pre-marinated chaap delivered fresh from our central kitchen.</p>
            </div>

            {/* Exclusive Zone */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Exclusive Zone</h3>
              <p className="text-gray-300 text-sm">One Zevro partner every 1.5 km radius – no competition nearby.</p>
            </div>

            {/* Instant Revenue Boost */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Instant Revenue Boost</h3>
              <p className="text-gray-300 text-sm">₹1 lakh+ monthly sales potential from Zevro menu items.</p>
            </div>

            {/* Chef-Less Kitchen Model */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                <span className="text-white text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Chef-Less Kitchen Model</h3>
              <p className="text-gray-300 text-sm">No need for professional chefs or highly trained staff – easy to operate.</p>
            </div>

            {/* Quick ROI */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Quick ROI</h3>
              <p className="text-gray-300 text-sm">Recover your investment within the first month itself.</p>
            </div>

            {/* Quick Setup */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Quick Setup</h3>
              <p className="text-gray-300 text-sm">Start serving customers within just 7 days.</p>
            </div>

            {/* Quick Setup */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Free Delivery & Logistics</h3>
              <p className="text-gray-300 text-sm">We take care of all supply chain delivery costs — raw material is delivered to your outlet at no extra charge.</p>
            </div>

            {/* Zevro App & POS */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-300">
                <span className="text-white text-2xl">📲</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Zevro  App & POS</h3>
              <p className="text-gray-300 text-sm">Launching soon for seamless sales, loyalty, and operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zevro-maroon-900 mb-4">
              ❓ Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is the total investment required?",
                answer: "Only ₹99,999 — the lowest entry cost in India’s food franchise market."
              },
              {
                question: "Is there any royalty or profit-sharing?",
                answer: "No. Zevro follows a Zero Royalty Model — you keep 100% of your profits."
              },
              {
                question: "What is included in the franchise package?",
                answer: "Franchise rights, branding support, staff training, central supply of pre-marinated chaap, and access to Zevro App & POS (soon)."
              },
              {
                question: "Do I need to own a restaurant to start?",
                answer: "No. You can add Zevro Chaap to your existing restaurant or start with a  Casual Dinning/ Kikos Outlet."
              },
              {
                question: "How soon can I start operations?",
                answer: "Setup is fast — you can begin serving in just 7 days."
              },
              {
                question: "How long is the franchise agreement?",
                answer: "The Zevro franchise agreement is for 1 year and is easily renewable each year at just ₹24,000 annually."
              },
              {
                question: "Who supplies the raw material?",
                answer: "All raw materials are supplied directly from Zevro central Kitchen. As a Zevro partner, your raw material delivery are provided free of cost."
              },
              {
                question: "Is training required for staff?",
                answer: "Minimal. Our chef-less kitchen model makes it easy for any staff to operate. 4 Days Training Included In Franchise Fees."
              },
              {
                question: "How do you ensure consistent taste and quality?",
                answer: "Centralized pre-marinated supply + standardized recipes = same great taste everywhere."
              },
              {
                question: "What makes Zevro different from other franchises?",
                answer: "Low cost, zero royalty, exclusive territory, and a unique co-branding model that adds new revenue without changing your restaurant’s name or menu."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-zevro-maroon-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Franchise;
