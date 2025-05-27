import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';
import Navbar from './NavBar';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showType, setShowType] = useState('table');
  const API_URL = import.meta.env.VITE_API_URL;

  console.log('API_URL:', API_URL);

  useEffect(() => {
    if (!API_URL) return;

    setLoading(true);

    axios
      .get(`${API_URL}/ping`)
      .then(() => axios.get(API_URL))
      .then((res) => {
        setBooks(res.data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching books:', err);
        setLoading(false);
      });
  }, [API_URL]);

  return (
    <div className="container-fluid min-vh-100 bg-parchment text-ink font-japanese p-4">
      <Navbar showType={showType} setShowType={setShowType} />
      <div className="mt-4">
        {loading ? (
          <div className="text-center">
            <Spinner />
            <p className="mt-2 text-muted small">Waking up the server... please wait</p>
          </div>
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
