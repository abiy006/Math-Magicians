import { React, useState, useEffect } from 'react';
import Loading from '../states/loading';
import Error from '../states/error';

function useQuoteToDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: {
            'X-Api-Key': 'bZtsR7emPk09dEUktmPB4w==aVR2uOe9pn1VWfaS',
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch quotes');
        }
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
}

function Quote() {
  const { data, loading, error } = useQuoteToDisplay();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="quote-container">
      <div className="the-quote">
        &ldquo;
        {data[0].quote}
        &ldquo;
      </div>
      <div className="the-author">
        {' '}
        -
        {' '}
        {data[0].author}
      </div>
      <div className="the-catagory">
        {data[0].category}
      </div>
    </div>
  );
}

export default Quote;
