import { ImageGridProp, ImageProp } from '../types';

const ImageGrid: React.FC<ImageGridProp> = ({ images }) => {
  return (
    <div className='image-grid'>
      {images &&
        images.map((image: ImageProp) => (
          <div key={image.id} className='image-grid__item'>
            <img loading='lazy' src={image.src.tiny} alt={image.alt} className='image-grid__img' />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
