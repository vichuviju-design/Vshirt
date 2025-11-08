import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import categoriesData from '../data/categories.json';
import productsData from '../data/products.json';

const Home = () => {
  // Get trending products (first 6)
  const trendingProducts = productsData.slice(0, 6);

  return (
    <div>
      <Hero />

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-neutral-dark/60 max-w-2xl mx-auto">
              Discover our curated collections for men and women
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoriesData.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <CategoryCard
                  category={category.name}
                  image={category.image}
                  link={category.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Collection */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Trending Now
            </h2>
            <p className="text-lg text-neutral-dark/60 max-w-2xl mx-auto">
              Explore our most popular styles this season
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Sale Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-blue">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Summer Sale
            </h2>
            <p className="text-2xl mb-8 opacity-90">
              Up to 50% Off on Selected Items
            </p>
            <motion.a
              href="/shop"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg"
            >
              Shop Sale
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;

