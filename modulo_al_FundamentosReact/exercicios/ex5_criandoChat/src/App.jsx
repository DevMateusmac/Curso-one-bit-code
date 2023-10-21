import { useState } from "react";

export default function App(){
  const [author, setAuthor] = useState("")  
  const [content, setContent] = useState("")  
  const [comments, setComments] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date()
    }

    setComments((state) => [newComment, ...state])
    setAuthor("")
    setContent("")
  }

  return (
    <div id="app">
      <h2>Seção de comentários</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input 
          type="text" 
          id="author" 
          required
          value={author}
          onChange={(ev) => setAuthor(ev.target.value)}
        />
        <label htmlFor="content">Comentário</label>
        <textarea 
          id="content" 
          cols="30" 
          rows="10"
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
        ></textarea>
        <button type="submit">Enviar comentário</button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0 ? (comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.author}</h3>
            <span>Em {comment.createdAt.toLocaleString()}</span>
            <p>{comment.content}</p>
          </div>
        ))
        ) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </section>
    </div>
  )
}

// A minha resolução funcionou corretamente, com algumas coisas diferentes da do professor, mas funcionou, as demais anotações estarão no notion


// import { useState } from "react"
// import useComment from "./hooks/useComment"

// export default function App() {
//   const {comments, addComment, removeComment} = useComment()
//   const [email, setEmail] = useState("")
//   const [comment, setComment] = useState("")

//   const btnSubmit = (ev) => {
//     ev.preventDefault()
//     addComment({email, comment})
//     setEmail("")
//     setComment("")
//   }

//   return (
//     <>
//       <div className="container">
//         <h3>Seção de comentários</h3>
//         <form onSubmit={btnSubmit}>
//           <div className="emailSection">
//             <label htmlFor="userEmail">Email</label>
//             <input type="text" value={email} onChange={(ev) => setEmail(ev.target.value)}/>
//           </div>
//           <div className="getComment">
//             <label htmlFor="comment">Comentário</label>
//             <textarea name="comment" id="comment" cols="30" rows="6" value={comment} onChange={(ev) => setComment(ev.target.value)}></textarea>
//           </div>
//           <button type="submit">Enviar comentário</button>
//         </form>
//         <hr />

//         <div className="commentSection">
//           {comments.length > 0 ? comments.map((comment) => (
//             <div key={comment.counter}>
//               <h4>{comment.email}</h4>
//               <p>Em {comment.commentDate}</p>
//               <p>{comment.comment}</p>
//               <button onClick={() => removeComment(comment.counter)}>Remover comentário</button>
//             </div>
//           )) : (
//             <p>Seja o primeiro a comentar!</p>
//           )}
//         </div>
//       </div>
//     </>
//   )
// }