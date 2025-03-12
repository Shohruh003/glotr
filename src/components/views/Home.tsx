import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks/useStores';
import { Container } from '@mui/material';
import PostCard from './MainComponent/PostCard';
import { IPost } from '../../types/types';
import ProductCard from './MainComponent/ProductCard';
import Header from './MainComponent/Header';
import Loader from '../common/Loader';

const Home: FC = observer(() => {
  const { productStore, postStore } = useStores();

  useEffect(() => {
    productStore.fetchProducts();
    postStore.fetchPosts();
  },[]);

  if (productStore.loading || postStore.loading) {
    return (
      <Loader onLoad={true}/>
    );
  }

  return (
    <>
      <Header />

      <Container maxWidth="md">

        {productStore.products.map((product) => (
          <ProductCard 
          key={product.id} 
          product={product} />
        ))}

        {postStore.posts.map((post: IPost) => (
          <PostCard
            key={post.id}
            post={post} 
            onEdit={() => postStore.updatePost(post.id, post)} 
            onDelete={() => postStore.deletePost(post.id)} 
          />
        ))}

      </Container>
    </>
  );
});

export default Home;