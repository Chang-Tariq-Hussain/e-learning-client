import { Play } from 'lucide-react'; // Import the Play icon from Lucide
import './course-card.scss';

export interface CourseCardProps {
  imageUrl: string;
  price: string | number;
  rating: string | number;
  instructor: string;
  title: string;
  description: string;
}

export default function CourseCard({ imageUrl, price, rating, instructor, title, description }: CourseCardProps) {
  return (
    <div className='course-card-container'>
      <div className="image-container">
        <img src={imageUrl} alt={title} />
        <div className="play-icon-overlay">
          <Play size={48} color="#fff" /> {/* Lucide Play icon */}
        </div>
      </div>
      <small>{instructor}</small>
      <h3>{title}</h3>
      <p>{description?.length > 80 ? description.slice(0, 80) + '...' : description}</p>
      <div className="card-footer">
        <div className="rating">{rating}</div>
        <strong className="price">{price}</strong>
      </div>
    </div>
  );
}