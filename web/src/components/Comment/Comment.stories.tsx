import Comment from './Comment'

const COMMENT = {
  id: 1,
  name: 'Gabriel Alves',
  createdAt: '2020-01-01T12:34:56Z',
  body: 'This is my first comment',
  postId: 1,
}

export const defaultView = () => {
  return (
    <div
      className="m-4"
    >
      <Comment comment={COMMENT} />
    </div>
  )
}

export const moderatorView = () => {

  mockCurrentUser({
    roles: 'moderator',
    id: 1,
    email: 'moderator@moderator.com'
  })

  return (
    <div
      className="m-4"
    >
      <Comment comment={COMMENT} />
    </div>
  )
}

export default { title: 'Components/Comment' }
