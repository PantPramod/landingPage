import './Blog.css';

const Blog = () => {
  return <div className='blog'>
             <div className='blog__container1'>
                <h2>Blog Posts</h2>
                <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto   nobis ex aperiam cumque reprehenderit consequuntur.</p>
             </div>    
             <div className='blog__container2'>
                 <div className='blog__container2__box'>
                     <img src="https://untree.co/demos/impact/images/post_2.jpg"/>

                     <div className='blog__container2__box__content'>
                     <div className='dateComment'>
                         <span>May 27, 2021 </span><span>• 12 Comments</span>
                     </div>
                     <h2>
                     <a href="#">Important of getting a notifications</a>
                     </h2>
                     <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</p>
                     <p className='seemore'>See More  {` >`}</p>
                     </div>
                 </div>
                 <div className='blog__container2__box'>
                     <img src="https://untree.co/demos/impact/images/post_3.jpg"/>

                     <div className='blog__container2__box__content'>
                     <div className='dateComment'>
                         <span>May 27, 2021 </span><span>• 12 Comments</span>
                     </div>
                     <h2>
                     <a href="#">Important of getting a notifications</a>
                     </h2>
                     <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</p>
                     <p className='seemore'>See More  {`>`}</p>
                     </div>
                 </div>
                 
                 <div className='blog__container2__box'>
                     <img src="https://untree.co/demos/impact/images/post_4.jpg"/>

                     <div className='blog__container2__box__content'>
                     <div className='dateComment'>
                         <span>May 27, 2021 </span><span>• 12 Comments</span>
                     </div>
                     <h2>
                     <a href="#">Important of getting a notifications</a>
                     </h2>
                     <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</p>
                     <p className='seemore'>See More  {`>`}</p>
                     </div>
                 </div>
                 
             </div>

                  
  </div>;
};

export default Blog;
