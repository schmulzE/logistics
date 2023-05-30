import React from 'react'
import { Link } from 'react-router-dom'
import { PostProps } from '../pages/Blog';
import { AiOutlinePlus } from 'react-icons/ai'

const PostList = ({posts}:{posts : PostProps[]}) => {
  console.log(posts)
  return (
    <>
    {posts.map((post) => (
      <li key={post.id} className='my-32'>
        <Link to='#'>
          <img src={post.img} />
        </Link>
        <div id="links" className='flex mt-8'>
        <Link to={'#'}>
          <p className="text-gray mr-3">{post.date}</p>
        </Link>
        <span className="text-gray">/</span>
        <Link to={'#'}>
          <p className="text-gray ml-3">{post.category}</p>
        </Link>
        </div>
        <h1 className="mt-4 mb-7 text-4xl font-bold">{post.title}</h1>
        <p className="my-3 text-gray-dark">{post.text}</p>

        <Link to='' className='cursor-none flex a'>
          <div className='text-xl bg-[#39ff14] rounded-full w-12 h-12 cursor-none mt-4'>
            <AiOutlinePlus className='inline mt-3.5 ml-3.5 glyphicon'/>
          </div>
          <p className='mt-5 ml-5  text-sm font-medium place-self-center'>Read more <br/>about this case</p>
        </Link>
      </li>
     ))}
     </>
  )

}

const Post = ({posts}:{posts: PostProps[]}) => {
  console.log(posts)
  return(
  <ul className='mx-auto w-4/5 '>
    <PostList posts={posts}/>
    <hr className='my-16 text-gray'/>
  </ul>
  )
}

export default Post