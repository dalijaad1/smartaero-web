import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../components/Shop/ProductList';
import ProductDetail from '../components/Shop/ProductDetail';
import Cart from '../components/Shop/Cart';
import Checkout from '../components/Shop/Checkout';
import UserDashboard from '../components/Shop/UserDashboard';

interface ShopPageProps {
  isDarkMode: boolean;
}

const ShopPage: React.FC<ShopPageProps> = ({ isDarkMode }) => {
  return (
    <main className="pt-20">
      <Routes>
        <Route path="/" element={<ProductList isDarkMode={isDarkMode} />} />
        <Route path="/product/:id" element={<ProductDetail isDarkMode={isDarkMode} />} />
        <Route path="/cart" element={<Cart isDarkMode={isDarkMode} />} />
        <Route path="/checkout" element={<Checkout isDarkMode={isDarkMode} />} />
        <Route path="/dashboard/*" element={<UserDashboard isDarkMode={isDarkMode} />} />
      </Routes>
    </main>
  );
};

export default ShopPage;