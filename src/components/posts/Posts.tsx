
const posts = [
  {
    id: 1,
    name: "Jack Randall",
    img: "https://images.pexels.com/photos/16024276/pexels-photo-16024276/free-photo-of-portrait-of-woman-with-purple-orchids-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, repellendus?",
    liked: true,
    numberLike: 10,
    comments: [
      {
        id: 1,
        name: 'John Henry',
        img: "https://images.pexels.com/photos/16024276/pexels-photo-16024276/free-photo-of-portrait-of-woman-with-purple-orchids-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime pariatur at alias similique vitae blanditiis porro quidem accusamus dolore dicta?'
      },
      {
        id: 2,
        name: 'John Henry',
        img: "https://images.pexels.com/photos/16024276/pexels-photo-16024276/free-photo-of-portrait-of-woman-with-purple-orchids-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime pariatur at alias similique vitae blanditiis porro quidem accusamus dolore dicta?'
      }
    ]
  }
]

const Posts = () => {
  return (
    <div className="posts">
      {posts.map(post => (
        <div className="post">
          <div className="user">
            <div className="user-info">
              <img src={post.img} alt="" />
              <span>{post.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts