import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    category: categoryFilter || 'all',
    size: 'all',
    color: 'all',
    priceRange: 'all',
  });

  useEffect(() => {
    let filtered = productsData;

    // Category filter
    if (filters.category !== 'all') {
      if (filters.category === 'new') {
        filtered = filtered.filter((p) => p.badge === 'New');
      } else {
        filtered = filtered.filter((p) => p.category.toLowerCase() === filters.category.toLowerCase());
      }
    }

    // Size filter
    if (filters.size !== 'all') {
      filtered = filtered.filter((p) => p.size.includes(filters.size));
    }

    // Color filter
    if (filters.color !== 'all') {
      filtered = filtered.filter((p) => 
        p.color.toLowerCase().includes(filters.color.toLowerCase())
      );
    }

    // Price range filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        filtered = filtered.filter((p) => p.price >= min && p.price <= max);
      } else {
        filtered = filtered.filter((p) => p.price >= min);
      }
    }

    setProducts(filtered);
  }, [filters]);

  useEffect(() => {
    if (categoryFilter) {
      setFilters((prev) => ({ ...prev, category: categoryFilter }));
    }
  }, [categoryFilter]);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['White', 'Black', 'Navy Blue', 'Grey', 'Floral', 'Pastel Pink', 'Blue', 'Cream', 'Charcoal'];
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under ₹600', value: '0-600' },
    { label: '₹600 - ₹1000', value: '600-1000' },
    { label: '₹1000 - ₹1500', value: '1000-1500' },
    { label: 'Over ₹1500', value: '1500-9999' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-dark mb-4">
            Shop
          </h1>
          <p className="text-lg text-neutral-dark/60">
            Discover our complete collection
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-neutral-light p-6 rounded-lg sticky top-24"
            >
              <h2 className="text-xl font-bold mb-6">Filters</h2>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Category</h3>
                <div className="space-y-2">
                  {['all', 'men', 'women', 'new'].map((cat) => (
                    <label key={cat} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={filters.category === cat}
                        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                        className="mr-2"
                      />
                      <span className="capitalize">{cat === 'all' ? 'All' : cat === 'new' ? 'New Arrivals' : cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['all', ...sizes].map((size) => (
                    <button
                      key={size}
                      onClick={() => setFilters({ ...filters, size })}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        filters.size === size
                          ? 'bg-primary text-white'
                          : 'bg-white text-neutral-dark hover:bg-primary hover:text-white'
                      }`}
                    >
                      {size === 'all' ? 'All' : size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Color</h3>
                <select
                  value={filters.color}
                  onChange={(e) => setFilters({ ...filters, color: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-neutral-dark/20 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Colors</option>
                  {colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.value}
                        checked={filters.priceRange === range.value}
                        onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                        className="mr-2"
                      />
                      <span>{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => setFilters({ category: 'all', size: 'all', color: 'all', priceRange: 'all' })}
                className="w-full bg-neutral-dark text-white py-2 rounded-lg font-semibold hover:bg-primary transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-neutral-dark/60">
                Showing {products.length} product{products.length !== 1 ? 's' : ''}
              </p>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-xl text-neutral-dark/60 mb-4">
                  No products found matching your filters.
                </p>
                <button
                  onClick={() => setFilters({ category: 'all', size: 'all', color: 'all', priceRange: 'all' })}
                  className="text-primary font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

