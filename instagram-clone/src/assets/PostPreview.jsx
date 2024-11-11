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
                    <p className='posttext' style={{visibility: beingHovered ? "visible" : "hidden"}}>♥ {props.likes}</p>
                    <p className='posttext' style={{visibility: beingHovered ? "visible" : "hidden"}}>🗨️ {props.messages}</p>
                </div>
            </div>
        </>
    )
}

export default PostPreview