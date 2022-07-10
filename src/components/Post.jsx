
const Post = (props) => {
    const {title, body, id,} = props.props;

    return(
        <>
            <div className="post" >
                <h2 className="post-title">{title}</h2>
                <p className="post-text">{body}</p>
            </div>
        </>
    )
}

export {Post}