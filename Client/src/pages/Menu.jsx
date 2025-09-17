import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'snacks', name: 'Soya Snacks' },
    { id: 'meals', name: 'Ready Meals' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const products = [
    {
      id: 1,
      name: 'Crispy Soya Nuggets',
      category: 'snacks',
      price: '₹149',
      image: '/api/placeholder/300/200',
      description: 'Deliciously seasoned soya nuggets with a perfect crispy texture. High in protein and completely plant-based.',
      ingredients: ['Soya protein', 'Natural spices', 'Herbs', 'Organic flour'],
      nutrition: { protein: '25g', calories: '180', fat: '8g', carbs: '12g' }
    },
    {
      id: 2,
      name: 'Soya Burger Patty',
      category: 'meals',
      price: '₹199',
      image: '/api/placeholder/300/200',
      description: 'Juicy and flavorful burger patty made from premium soya protein. Perfect for healthy burgers.',
      ingredients: ['Soya chunks', 'Vegetables', 'Natural herbs', 'Binding agents'],
      nutrition: { protein: '22g', calories: '220', fat: '10g', carbs: '15g' }
    },
    {
      id: 3,
      name: 'Soya Milk Original',
      category: 'beverages',
      price: '₹89',
      image: '/api/placeholder/300/200',
      description: 'Fresh and creamy soya milk made from organic soybeans. Rich in protein and calcium.',
      ingredients: ['Organic soybeans', 'Purified water', 'Natural stabilizers'],
      nutrition: { protein: '8g', calories: '80', fat: '4g', carbs: '6g' }
    },
    {
      id: 4,
      name: 'Soya Keema',
      category: 'meals',
      price: '₹179',
      image: '/api/placeholder/300/200',
      description: 'Traditional keema made with textured soya protein. Perfect for curries and parathas.',
      ingredients: ['Textured soya protein', 'Onions', 'Tomatoes', 'Indian spices'],
      nutrition: { protein: '28g', calories: '200', fat: '6g', carbs: '10g' }
    },
    {
      id: 5,
      name: 'Chocolate Soya Pudding',
      category: 'desserts',
      price: '₹129',
      image: '/api/placeholder/300/200',
      description: 'Rich and creamy chocolate pudding made with soya milk. A guilt-free dessert option.',
      ingredients: ['Soya milk', 'Cocoa powder', 'Natural sweeteners', 'Vanilla extract'],
      nutrition: { protein: '6g', calories: '150', fat: '5g', carbs: '20g' }
    },
    {
      id: 6,
      name: 'Soya Tikka Bites',
      category: 'snacks',
      price: '₹169',
      image: '/api/placeholder/300/200',
      description: 'Marinated soya chunks grilled to perfection with authentic Indian spices.',
      ingredients: ['Soya chunks', 'Yogurt marinade', 'Tandoori spices', 'Bell peppers'],
      nutrition: { protein: '24g', calories: '190', fat: '7g', carbs: '8g' }
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zevro-maroon-950 via-zevro-maroon-900 to-zevro-maroon-800">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-zevro-flame-400">Menu</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our range of delicious, nutritious, and sustainable plant-based soya products.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zevro-flame-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-zevro-flame-100 hover:text-zevro-flame-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} hover className="overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="w-full h-48 bg-gradient-to-br from-zevro-flame-100 to-zevro-gold-100 flex items-center justify-center">
                    <span className="text-4xl">🥗</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-zevro-maroon-900">{product.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-3">{product.description}</p>
                  <div className="text-center">
                    <Button 
                      variant="primary" 
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        const contactSection = document.getElementById('contact-section');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.href = '/contact#contact-section';
                        }
                      }}
                    >
                      Get Franchise
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zevro-maroon-900 mb-4">
              Nutritional Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our soya products are packed with essential nutrients for a healthy lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-zevro-flame-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-lg font-semibold text-zevro-maroon-900 mb-2">High Protein</h3>
              <p className="text-gray-600">Complete amino acid profile for muscle health</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-zevro-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-lg font-semibold text-zevro-maroon-900 mb-2">Heart Healthy</h3>
              <p className="text-gray-600">Zero cholesterol and low saturated fat</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-lg font-semibold text-zevro-maroon-900 mb-2">Rich in Fiber</h3>
              <p className="text-gray-600">Supports digestive health and satiety</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🦴</span>
              </div>
              <h3 className="text-lg font-semibold text-zevro-maroon-900 mb-2">Calcium Rich</h3>
              <p className="text-gray-600">Essential for strong bones and teeth</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zevro-maroon-900 to-zevro-maroon-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Try ZEVRO?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the taste and nutrition of our premium soya products today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg"
             onClick={() => {
              const contactSection = document.getElementById('contact-section');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/contact#contact-section';
              }
            }}
            >
              Find Store Near You
            </Button>
            <Button variant="outline" size="lg" className="border-zevro-gold-400 text-zevro-gold-400 hover:bg-zevro-gold-400 hover:text-zevro-maroon-900" onClick={() => window.location.href = '/contact'}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title={selectedProduct?.name}
        size="lg"
      >
        {selectedProduct && (
          <div className="space-y-6">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-zevro-flame-100 to-zevro-gold-100 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🥗</span>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-zevro-maroon-900">{selectedProduct.name}</h3>
                <span className="text-2xl font-bold text-zevro-flame-600">{selectedProduct.price}</span>
              </div>
              <p className="text-gray-700 mb-6">{selectedProduct.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-zevro-maroon-900 mb-3">Ingredients</h4>
                <ul className="space-y-1">
                  {selectedProduct.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-zevro-flame-500 rounded-full mr-2"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-zevro-maroon-900 mb-3">Nutrition (per serving)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Protein:</span>
                    <span className="font-medium">{selectedProduct.nutrition.protein}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Calories:</span>
                    <span className="font-medium">{selectedProduct.nutrition.calories}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fat:</span>
                    <span className="font-medium">{selectedProduct.nutrition.fat}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carbs:</span>
                    <span className="font-medium">{selectedProduct.nutrition.carbs}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="primary" size="lg" className="flex-1">
                Order Now
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Add to Cart
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Menu;
