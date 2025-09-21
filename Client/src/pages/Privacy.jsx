import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zevro-maroon-950 via-zevro-maroon-900 to-zevro-maroon-800">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-zevro-flame-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-zevro-gold-400 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-zevro-flame-600 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            <span className="text-zevro-gold-400">Privacy</span>{' '}
            <span className="text-zevro-flame-400">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <div className="text-sm text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Last updated: September 2025
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                ZEVRO Chaap ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with our co-branding franchise opportunities. We are India's first co-branding franchise model for healthy soya-based chaap products. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </Card>

            {/* Information We Collect */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-zevro-maroon-800 mb-3">Personal Information</h3>
                  <p className="text-gray-700 mb-3">We may collect personal information that you provide to us, including:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Franchise inquiry details and business information</li>
                    <li>Payment and billing information for franchise fees</li>
                    <li>Communication preferences and feedback</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-zevro-maroon-800 mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-700 mb-3">When you visit our website, we may automatically collect:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>IP address and browser information</li>
                    <li>Device information and operating system</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* How We Use Information */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Process and respond to franchise inquiries</li>
                <li>Provide customer support and communicate with you</li>
                <li>Improve our website, products, and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Analyze website usage and optimize user experience</li>
              </ul>
            </Card>

            {/* Information Sharing */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>With trusted service providers who assist in our operations</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </Card>

            {/* Data Security */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </Card>

            {/* Your Rights */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete data</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing activities</li>
                <li>Data portability</li>
                <li>Objection to processing for marketing purposes</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-gradient-to-br from-zevro-flame-50 to-zevro-gold-50 border-zevro-flame-200">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-zevro-flame-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@zevrochaap.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-zevro-flame-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 7456888607</span>
                </div>
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-zevro-flame-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="text-zevro-flame-600 font-semibold mb-1">📍 Corporate Office</div>
                    <div className="mb-2">Noida, Uttar Pradesh</div>
                    <div className="text-zevro-flame-600 font-semibold mb-1">📦 Central Supply Warehouse</div>
                    <div>Bada Bazar, Muslim Chaudhriyan, Seohara, Uttar Pradesh</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link to="/">
              <Button variant="primary" size="lg">
                Back to Home
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18m-9-9l9 9-9 9" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
