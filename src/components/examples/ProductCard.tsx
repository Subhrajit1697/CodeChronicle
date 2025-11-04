import ProductCard from '../ProductCard';
import productImage from '@assets/generated_images/Black_cocktail_dress_85fd198d.png';

export default function ProductCardExample() {
  const mockProduct = {
    id: '1',
    name: 'Elegant Black Cocktail Dress',
    price: 189,
    originalPrice: 249,
    image: productImage,
    category: 'Dresses'
  };

  return (
    <div className="w-80">
      <ProductCard product={mockProduct} onQuickView={(p) => console.log('Quick view:', p)} />
    </div>
  );
}
