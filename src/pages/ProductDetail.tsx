import { useParams } from 'wouter';
import { getProductById } from '@/lib/utils';
import ProductDetail, { ProductDetailData } from '@/components/ProductDetail';
import { useEffect, useState } from 'react';

const ProductDetailPage = () => {
  const [product, setProduct] = useState<ProductDetailData>();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const productData = await getProductById(id);
        setProduct(productData);
      };
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = (productId: string, size: string, quantity: number) => {
    // Add to cart implementation
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ProductDetail 
        product={product} 
        onAddToCart={handleAddToCart} 
      />
    </div>
  );
};

export default ProductDetailPage;