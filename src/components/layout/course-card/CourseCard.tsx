import './course-card.scss'

export interface CourseCardProps {
    imageUrl: string;
    price: string | number;
    rating: string | number;
    instructor: string;
    title: string;
    description: string;
  }
  
export default function CourseCard({imageUrl, price, rating, instructor, title, description}:CourseCardProps) {
  return (
    <div className='course-card-container'>
      <img src={imageUrl} alt="" />
      <small>{instructor}</small>
      <h3>{title}</h3>
      <p>{description?.length > 80 ? description.slice(0, 80) + '...': description}</p>
      <div className="card-footer">
        <div className="rating">{rating}</div>
        <strong className="price">{price}</strong>
      </div>
    </div>
  )
}
