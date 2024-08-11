import { useState, useEffect } from 'react';
import axios from 'axios';

export type ImageProp = {
  id: string;
  download_url: string;
  author: string;
};
const ImageGrid = () => {
  const [images, setImages] = useState<ImageProp[]>([]);

  const getImages = async () => {
    try {
      const response = await axios.get<ImageProp[]>('https://picsum.photos/v2/list?limit=9');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  useEffect(() => {
    getImages();
  }, []);
  return (
    <div className='image-grid'>
      {images &&
        images.map((image: ImageProp) => (
          <div key={image.id} className='image-grid__item'>
            <img loading='lazy' src={image.download_url} alt={image.author} className='image-grid__img' />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
