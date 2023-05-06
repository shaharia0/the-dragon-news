import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../hooks/useTitle';

const Category = () => {
  const {id} = useParams();
  const categoryNews = useLoaderData();
  useTitle('Home')
  return (
    <div>
     {
      id &&  <h2>This is a category : {categoryNews.length}</h2>
     }
      {
        categoryNews.map(news => <NewsCard
        key={news._id}
        news={news}
        ></NewsCard>)
      }
    </div>
  );
};

export default Category;