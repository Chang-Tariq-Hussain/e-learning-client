import Banner from '../banner/Banner'
import LanguageSlider from '../../../components/layout/language-slider/LanguageSlider'
import Courses from '../courses/Courses';

export default function CoursesPage() {
  return (
    <div className='courses-container'>
        <Banner />
        <LanguageSlider/>
        <Courses heading={'All Courses'}/>
    </div>
  )
}
