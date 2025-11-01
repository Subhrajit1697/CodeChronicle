import FeaturedCollection from '../FeaturedCollection';
import featuredImage from '@assets/generated_images/Woman_in_mauve_dress_75837bf2.png';

export default function FeaturedCollectionExample() {
  return (
    <FeaturedCollection
      image={featuredImage}
      title="Spring Essentials"
      subtitle="New Collection"
      description="Discover our carefully curated selection of spring essentials. From flowing dresses to elegant accessories, each piece is designed to elevate your wardrobe with timeless sophistication."
    />
  );
}
