import React, { useEffect } from 'react';

function DataFetcher({ onDataFetched }) {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((json) => onDataFetched(json))
      .catch((err) => console.error(err));
  }, [onDataFetched]);

  return null;
}

export default DataFetcher;