import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'
import Pfp from '../../public/pfp.png'
import Dots from '../../public/3dots.png'
import Post1 from '../../public/post1.png'
import Post2 from '../../public/post2.png'
import Post3 from '../../public/post3.jpg'
import Post1dark from '../../public/post1dark.png'
import Post2dark from '../../public/post2dark.png'
import Post3dark from '../../public/post3dark.jpg'
import Sidebar from '../assets/Sidebar'
import PostPreview from '../assets/PostPreview'
import Footer from '../assets/Footer'

function Profile() {
  const [userFollowed, setUserFollowed] = useState(false)
  const [taggedClicked, setTaggedClicked] = useState(false)

  return (
    <>
      <Sidebar/>

      <main>
        <article>
          <img className='pfp' src={Pfp} width='16%'></img>
          <div className='infocontainer'>
            <div className='row1'>
              <p className='topname'>jackson.pavkov</p>
              <button className='followbutton'
              onClick={() => setUserFollowed((userFollowed) => !userFollowed)}
              onMouseOver={{backgroundColor: userFollowed ? "ButtonFace" : "rgb(46, 99, 231)"}}
              style={{backgroundColor: userFollowed ? "ButtonFace" : "rgb(51, 145, 239)", 
              color: userFollowed ? "black" : "white",
              width: userFollowed ? "120px" : "80px"}}>{userFollowed ? "Following" : "Follow"}</button>
              <button className='messagebutton'>Message</button>
              <img src={Dots} width='6.5%'></img>
            </div>
            <div className='row2'>
              <p className='rowtext'><strong>3</strong> posts</p>
              <p className='rowtext'><strong>{userFollowed ? "308" : "307"}</strong> followers</p>
              <p className='rowtext'><strong>1,024</strong> following</p>
            </div>
            <div className='bio'>
              <p className='biotext'><strong>Jackson Pavkov</strong><br></br>
              unc '28; Charlotte, NC; MTH Snare; Comp Sci + Econ</p>
            </div>
          </div>
        </article>
        <div className='postbar'>
          <button className='postbartext'
          onClick={() => setTaggedClicked((taggedClicked) => false)}
          style={{borderTop: taggedClicked ? '0px' : '1px solid black', color: taggedClicked ? 'darkgray' : 'black'}}>POSTS</button>
          <button className='postbartext'
          onClick={() => setTaggedClicked((taggedClicked) => true)}
          style={{borderTop: taggedClicked ? '1px solid black' : '0px', color: taggedClicked ? 'black' : 'darkgray'}}>TAGGED</button>
        </div>
        <div className='postcontainer'>
          <Link to='/publix' style={{textDecoration: 'none'}}>
            <PostPreview check={taggedClicked} image={Post1} image2={Post1dark} likes='143' messages='18'/>
          </Link>
          <Link to='/school' style={{textDecoration: 'none'}}>
            <PostPreview check={taggedClicked} image={Post2} image2={Post2dark} likes='112' messages='22'/>
          </Link>
          <Link to='/unc' style={{textDecoration: 'none'}}>
            <PostPreview check={taggedClicked} image={Post3} image2={Post3dark} likes='108' messages='15'/>
          </Link>
        </div>
        <Footer/>
      </main>
    </>
  )
}

export default Profile