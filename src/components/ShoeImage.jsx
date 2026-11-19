import { useState } from 'react';

const FALLBACK_IMAGE = 'https://placehold.co/600x400?text=Sneaker';

function ShoeImage({ src, alt, className, loading = 'lazy' }) {
  const [imageSrc, setImageSrc] = useState(src);

  function useFallback() {
    setImageSrc(FALLBACK_IMAGE);
  }

  return (
    <img
      className={className}
      src={imageSrc}
      alt={alt}
      loading={loading}
      onError={useFallback}
    />
  );
}

export default ShoeImage;
