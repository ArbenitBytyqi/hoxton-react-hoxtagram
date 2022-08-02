export function Article ({images,
    comments,}){
    return(
        <article className="image-card">
            <h2 className="title">{images.title}</h2>
            <img src={images.} className="image" />
            <div className="likes-section">
              <span className="likes">{images.likes}</span>
              <button className="like-button">♥</button>
            </div>
            {comments.map((comments) => images.id === comment.imageId)}
          </article>
    )
}