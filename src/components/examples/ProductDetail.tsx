import ProductDetail, { type ProductDetailData } from '../ProductDetail';
import dressImage from '@assets/generated_images/Woman_in_mauve_dress_75837bf2.png';

export default function ProductDetailExample() {
  const mockProduct: ProductDetailData = {
    id: '1',
    name: 'Flowing Mauve Silk Midi Dress',
    price: 289,
    originalPrice: 359,
    images: [dressImage, dressImage, dressImage, dressImage],
    category: 'Dresses',
    description: 'A stunning silk midi dress featuring a flowing silhouette and elegant draping. Perfect for special occasions or elevated everyday wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    materials: '100% Premium Silk'
  };

  return (
    <ProductDetail 
      product={mockProduct} 
      onAddToCart={(id, size, qty) => console.log('Add to cart:', id, size, qty)}
    />
  );
}
