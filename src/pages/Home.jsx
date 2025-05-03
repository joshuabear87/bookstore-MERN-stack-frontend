import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';
import Navbar from './NavBar';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Start as true to show spinner on load
  const [showType, setShowType] = useState('table');
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/books`)
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [API_URL]);

  return (
    <div className="container-fluid min-vh-100 bg-parchment text-ink font-japanese p-4">
      <Navbar showType={showType} setShowType={setShowType} />
      <div className="mt-4">
        {loading ? (
          <Spinner />
        ) : books.length === 0 ? (
          <p className="text-center text-muted">No books available. Add one to get started.</p>
        ) : showType === 'table' ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
