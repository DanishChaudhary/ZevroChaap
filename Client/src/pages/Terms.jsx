import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Terms = () => {
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
            <span className="text-zevro-gold-400">Terms</span>{' '}
            <span className="text-zevro-flame-400">of Service</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Please read these terms carefully before using our services or joining our franchise network.
          </p>
          <div className="text-sm text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Last updated: September 2024
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the ZEVRO Chaap website, services, or engaging with our co-branding franchise opportunities, you accept and agree to be bound by the terms and provision of this agreement. ZEVRO operates India's first co-branding franchise model for healthy soya-based chaap products. If you do not agree to abide by the above, please do not use this service.
              </p>
            </Card>

            {/* Use License */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">Use License</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Permission is granted to temporarily download one copy of the materials on ZEVRO Chaap's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p className="text-gray-700">
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by ZEVRO Chaap at any time.
                </p>
              </div>
            </Card>

            {/* Franchise Terms */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">Franchise Terms</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-zevro-maroon-800">Franchise Opportunities</h3>
                <p className="text-gray-700 mb-4">
                  ZEVRO Chaap offers co-branding franchise opportunities with a unique model that allows restaurants to keep their existing name while adding our chaap menu. Our franchise opportunities are subject to separate franchise agreements. By expressing interest in our franchise program:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>You acknowledge that franchise opportunities are subject to availability and qualification</li>
                  <li>All franchise agreements are governed by separate legal documents</li>
                  <li>Investment requirements and terms are subject to change</li>
                  <li>Franchise disclosure documents will be provided as required by law</li>
                </ul>
              </div>
            </Card>

            {/* User Responsibilities */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">User Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide accurate and truthful information</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in any harmful or disruptive activities</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Notify us of any unauthorized use of your account</li>
              </ul>
            </Card>

            {/* Disclaimer */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                The materials on ZEVRO's website are provided on an 'as is' basis. ZEVRO makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </Card>

            {/* Limitations */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall ZEVRO or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ZEVRO's website, even if ZEVRO or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </Card>

            {/* Privacy Policy */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">Privacy Policy</h2>
              <p className="text-gray-700">
                Your privacy is important to us. Please review our{' '}
                <Link to="/privacy-policy" className="text-zevro-flame-600 hover:text-zevro-flame-700 font-medium">
                  Privacy Policy
                </Link>, which also governs your use of our services, to understand our practices.
              </p>
            </Card>

            {/* Governing Law */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which ZEVRO operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </Card>

            {/* Modifications */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                ZEVRO may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service. We recommend checking this page periodically for any changes.
              </p>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-gradient-to-br from-zevro-flame-50 to-zevro-gold-50 border-zevro-flame-200">
              <h2 className="text-2xl font-bold text-zevro-maroon-900 mb-6">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>franchise@zevrochaap.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-zevro-flame-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 74568 88607</span>
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

export default Terms;
