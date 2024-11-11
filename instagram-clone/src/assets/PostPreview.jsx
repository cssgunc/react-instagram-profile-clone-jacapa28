import { useState } from 'react'
import './PostPreview.css'

function PostPreview(props) {
    const [beingHovered, setBeingHovered] = useState(false)

    return (
        <>
            <div style={{visibility: props.check ? "hidden" : "visible"}} className='container'
            onMouseOver={() => setBeingHovered((beingHovered) => true)}
            onMouseOut={() => setBeingHovered((beingHovered) => false)}>
                <img src={beingHovered ? props.image2 : props.image} width='100%' height='100%'></img>
                <div className='others'>
                    <p className='posttext' style={{visibility: beingHovered ? "visible" : "hidden"}}></p>
                    <i className='posticon' class='fa-solid fa-heart' style={{visibility: beingHovered ? "visible" : "hidden", color: 'white', marginRight: '7px'}}></i>
                    <p className='posttext' style={{visibility: beingHovered ? "visible" : "hidden"}}>{props.likes}</p>
                    <i className='posticon' class='fa-solid fa-comment' style={{visibility: beingHovered ? "visible" : "hidden", color: 'white', marginRight: '7px'}}></i>
                    <p className='posttext' style={{visibility: beingHovered ? "visible" : "hidden"}}>{props.messages}</p>
                </div>
            </div>
        </>
    )
}

export default PostPreview