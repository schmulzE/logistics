import { posts } from"../data/post";
import Pagination from '../components/Pagination';

export type PostProps = {
  id: string,
  img: string, 
  date: string,
  category: string,
  title: string,
  text: string
}


const Blog = () => {
  return (
    <div className='py-32'>
      <Pagination data={posts} pageLimit={8} dataLimit={3} />
    </div>
  )
}

export default Blog