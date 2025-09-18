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
              Join the plant-based revolution and build a profitable business with our proven franchise system.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* NO Royalty */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-zevro-flame-400 to-zevro-flame-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-zevro-flame-400/25 transition-all duration-300">
                <span className="text-white text-2xl font-bold">₹</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">NO Royalty</h3>
              <h4 className="text-zevro-gold-400 font-bold text-lg mb-4">NO Profit Sharing</h4>
              <p className="text-gray-300 text-sm">Keep 100% of your profits with zero ongoing fees</p>
            </div>

            {/* High Quality */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-zevro-maroon-600 to-zevro-maroon-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-zevro-maroon-600/25 transition-all duration-300">
                <span className="text-white text-2xl">🏭</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Premium Quality</h3>
              <h4 className="text-zevro-gold-400 font-bold text-lg mb-4">Direct Supply</h4>
              <p className="text-gray-300 text-sm">High-quality sauces, syrups & premixes directly from manufacturer</p>
            </div>

            {/* Chef Less Kitchen */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-zevro-flame-500 to-zevro-flame-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-zevro-flame-500/25 transition-all duration-300">
                <span className="text-white text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Chef-Less Kitchen</h3>
              <h4 className="text-zevro-gold-400 font-bold text-lg mb-4">Simple Operations</h4>
              <p className="text-gray-300 text-sm">No need for professional chefs or highly trained staff</p>
            </div>

            {/* Low Investment */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Low Investment</h3>
              <h4 className="text-zevro-gold-400 font-bold text-lg mb-4">High Returns</h4>
              <p className="text-gray-300 text-sm">Affordable setup with 0% wastage and maximum profitability</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Creative Freedom */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Creative Freedom</h3>
              <h4 className="text-zevro-gold-400 font-bold text-lg mb-4">Your Business Rules</h4>
              <p className="text-gray-300 text-sm">Design your menu, pricing & marketing strategies freely</p>
            </div>

            {/* Marketing Support */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-zevro-flame-400 to-zevro-flame-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-zevro-flame-400/25 transition-all duration-300">
                <span className="text-white text-2xl">📢</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Marketing Support</h3>
              <h4 className="text-zevro-gold-400 font-bold text-lg mb-4">Complete Branding</h4>
              <p className="text-gray-300 text-sm">Full branding materials, social media content & promotional strategies</p>
            </div>

            {/* Training & Support */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Training & Support</h3>
              <h4 className="text-zevro-gold-400 font-bold text-lg mb-4">Ongoing Assistance</h4>
              <p className="text-gray-300 text-sm">Comprehensive training program & continuous operational support</p>
            </div>

            {/* Quick ROI */}
            <div className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-zevro-maroon-600 to-zevro-maroon-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-zevro-maroon-600/25 transition-all duration-300">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-zevro-gold-400 font-bold text-lg mb-2">Quick ROI</h3>
              <h4 className="text-zevro-gold-400 font-bold text-lg mb-4">Fast Recovery</h4>
              <p className="text-gray-300 text-sm">Start earning profits within 6-12 months of operation</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zevro-maroon-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is the total investment required?",
                answer: "The total investment ranges from 250,000 to 275,000 depending on the package you choose, including franchise fee, equipment, and initial inventory."
              },
              {
                question: "How long is the franchise agreement?",
                answer: "Our franchise agreement is for 10 years with options to renew for additional 5-year terms."
              },
              {
                question: "Do you provide territory protection?",
                answer: "Yes, we provide territory protection to ensure you have exclusive rights to operate in your designated area."
              },
              {
                question: "What ongoing support do you provide?",
                answer: "We provide marketing support, operational guidance, new product training, and 24/7 customer service support."
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
