import Comment from './Comment'

const COMMENT = {
  name: 'Gabriel Alves',
  createdAt: '2020-01-01T12:34:56Z',
  body: 'This is my first comment'
}

export const generated = () => {
  return <Comment comment={COMMENT} />
}

export default { title: 'Components/Comment' }
