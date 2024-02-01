 
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] =useState(0);

  const handleAddToBookmark = blog =>{
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, reading_time) =>{
    // console.log('marking as read', reading_time);
    const newReadingTime = readingTime + reading_time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
     setBookmarks(remainingBookmarks);
  }
  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handleAddToBookmark ={handleAddToBookmark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
