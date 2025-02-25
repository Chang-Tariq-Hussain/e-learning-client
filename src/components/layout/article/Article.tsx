import { Dot } from 'lucide-react';
import './article.scss'
interface ArticleProps {
    articleImage: string;
    author: string;
    date: string;
    title: string;
    description: string;
    tags: string[];
    layout: string;
}

export default function Article({ articleImage, author, date, title, description, tags, layout }: ArticleProps) {
    return (
        <div className='article-container' style={layout==='vertical' ? {flexDirection: 'column'} : {flexDirection:'row'}}>
            <div className='article-left'>
                <img src={articleImage} alt={title} />
            </div>
            <div>
            <div className='article-right'>

            <small>{author} <Dot/> {date}</small>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='tags'>
                {tags.map(tag => (
                    <span key={tag} className='tag'>{tag}</span>
                ))}
            </div>
            </div>
            </div>
        </div>
    )
}
