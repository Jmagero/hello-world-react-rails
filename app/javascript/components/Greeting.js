import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../src/api/api'


const Greeting = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  useEffect(() => {
      dispatch(getMessages())
  }, [])

  if (posts.length === 0) { return <div>loading...</div>}

  console.log(posts)

  return (
    <div>
      <h1>Greetings</h1>
      <p>This is our greetings.</p>
    </div>
  )
}

export default Greeting;

