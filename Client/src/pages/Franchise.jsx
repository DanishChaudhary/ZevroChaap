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

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$25,000',
      features: [
        'Basic franchise package',
        'Training for 2 staff members',
        'Marketing materials',
        'Initial inventory support',
        '6 months support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$45,000',
      features: [
        'Complete franchise package',
        'Training for 5 staff members',
        'Premium marketing materials',
        'Full inventory support',
        '12 months support',
        'Territory protection'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$75,000',
      features: [
        'Multi-location package',
        'Unlimited staff training',
        'Custom marketing campaigns',
        'Priority inventory support',
        '24 months support',
        'Exclusive territory rights',
        'Business development support'
      ],
      popular: false
    }
  ];

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
              <Button variant="primary" size="lg" onClick={() => document.getElementById('franchise-form').scrollIntoView()}>
                Request Information
              </Button>
              <Button variant="outline" size="lg" className="border-zevro-gold-400 text-zevro-gold-400 hover:bg-zevro-gold-400 hover:text-zevro-maroon-900">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - ZORKO Style */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-orange-500">ZEVRO</span> Brand ?
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* NO Royalty */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-600 rounded-full flex items-center justify-center border-4 border-red-500">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">₹</span>
                </div>
              </div>
              <h3 className="text-orange-500 font-bold text-lg mb-2">NO Royalty</h3>
              <h4 className="text-orange-500 font-bold text-lg mb-4">NO Profit Sharing</h4>
              <p className="text-white text-sm">Make only Profits</p>
            </div>

            {/* High Quality */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🏭</span>
                </div>
              </div>
              <h3 className="text-blue-400 font-bold text-lg mb-2">High Quality of <span className="text-orange-500">Sauces,</span></h3>
              <h4 className="text-blue-400 font-bold text-lg mb-4"><span className="text-orange-500">Syrups, Premixes</span> etc.</h4>
              <p className="text-white text-sm">You get material directly from Manufacturer</p>
            </div>

            {/* Chef Less Kitchen */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-600 rounded-full flex items-center justify-center border-4 border-red-500">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">👨‍🍳</span>
                </div>
              </div>
              <h3 className="text-red-400 font-bold text-lg mb-2"><span className="text-orange-500">Chef Less</span></h3>
              <h4 className="text-red-400 font-bold text-lg mb-4"><span className="text-orange-500">Kitchen</span> Model</h4>
              <p className="text-white text-sm">Chefs, professionals and highly trained staff NOT required</p>
            </div>

            {/* Low Investment */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-600 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">💰</span>
                </div>
              </div>
              <h3 className="text-green-400 font-bold text-lg mb-2">Low <span className="text-orange-500">Investment</span></h3>
              <h4 className="text-green-400 font-bold text-lg mb-4">High <span className="text-orange-500">Returns</span></h4>
              <p className="text-white text-sm">Most Easy & Affordable Setup<br/>0% Wastage- Less Inventory, More Dishes with Unique taste</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 100% Creative Freedom */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-purple-600 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🧠</span>
                </div>
              </div>
              <h3 className="text-purple-400 font-bold text-lg mb-2">100%</h3>
              <h4 className="text-purple-400 font-bold text-lg mb-4"><span className="text-orange-500">Creative Freedom</span></h4>
              <p className="text-white text-sm">No Restrictions, Design your Cafe as per your Budget & your choice of Interior- Furniture</p>
            </div>

            {/* Pocket Friendly Menu */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-orange-600 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📱</span>
                </div>
              </div>
              <h3 className="text-orange-500 font-bold text-lg mb-2"><span className="text-orange-500">Pocket Friendly</span> Menu</h3>
              <h4 className="text-orange-500 font-bold text-lg mb-4">Menu <span className="text-orange-500">Freedom</span></h4>
              <p className="text-white text-sm">80+ Variety of Pure Vegetarian Food. Well researched Menu & Recipe.<br/>We give you freedom for menu customization</p>
            </div>

            {/* FREE Digital Marketing */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-600 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">💻</span>
                </div>
              </div>
              <h3 className="text-yellow-400 font-bold text-lg mb-2">FREE</h3>
              <h4 className="text-yellow-400 font-bold text-lg mb-4"><span className="text-orange-500">Digital Marketing</span></h4>
              <p className="text-white text-sm">We run a marketing Campaign for your outlet to reach 2-2.5 Lakh People</p>
            </div>

            {/* Tech Enabled System */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-cyan-600 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">⚙️</span>
                </div>
              </div>
              <h3 className="text-cyan-400 font-bold text-lg mb-2"><span className="text-orange-500">Tech Enabled</span> System</h3>
              <h4 className="text-cyan-400 font-bold text-lg mb-4">End to End <span className="text-orange-500">Support</span></h4>
              <p className="text-white text-sm">Digital Ordering System, Management, Inventory Etc. with Brand Guidance & Training</p>
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
                answer: "The total investment ranges from $25,000 to $75,000 depending on the package you choose, including franchise fee, equipment, and initial inventory."
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

      {/* Investment Information Section */}
      <section className="py-20 bg-zevro-maroon-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Investment & Returns
            </h2>
            <p className="text-xl text-gray-300">
              Start your profitable ZEVRO franchise with minimal investment and maximum returns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-green-100">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Low Investment</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">₹2-5 Lakhs</p>
              <p className="text-gray-700">Complete setup with equipment, training, and initial inventory</p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">High Returns</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">25-35%</p>
              <p className="text-gray-700">Expected ROI within 12-18 months of operation</p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Quick Setup</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">15-30 Days</p>
              <p className="text-gray-700">From agreement to grand opening with full support</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;
