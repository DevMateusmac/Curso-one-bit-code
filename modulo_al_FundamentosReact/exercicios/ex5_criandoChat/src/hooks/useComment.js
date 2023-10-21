//as anotações sobre esse código estão no notion, principalmente a parte da data que ficou horrenda.


// import { useState } from "react";

// export default function useComment(){
//   const [counter, setCounter] = useState(1)
//   const [comments, setComments] = useState(() => {

//     const storedComments = localStorage.getItem('ex4-comments')
//     if(!storedComments) return []
//     const commentSection = JSON.parse(storedComments)
//     return commentSection
//   })

//   const addComment = ({email, comment}) => {
//     const getData = new Date()
//     const getDay = getData.getDate()
//     const getMonth = getData.getMonth()
//     const getYear = getData.getFullYear()
//     const getHour = getData.getHours()
//     const getMinute = getData.getMinutes()
//     const getSeconds = getData.getSeconds()
//     const commentDate = `${getDay}/${getMonth}/${getYear} ${getHour}:${getMinute}:${getSeconds}`
//     const commentToAdd = {counter, commentDate, email, comment}

//     setCounter((currentCounter) => currentCounter + 1)

//     setComments (state => {
//       const newState = [...state, commentToAdd]
//       localStorage.setItem("ex4-comments", JSON.stringify(newState))
//       return newState
//     })
//   }

//   const removeComment= (id) => {
//     setComments(state => {
//       const newState = state.filter(comment => comment.counter !== id)
//       localStorage.setItem("ex4-comments", JSON.stringify(newState))
//       return newState
//     })
//   }

//   return {comments, addComment, removeComment}
// }
