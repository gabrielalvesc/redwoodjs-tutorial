import type { FindCommentQuery, FindCommentQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCommentQuery($id: Int!) {
    comment: comment(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCommentQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  comment,
}: CellSuccessProps<FindCommentQuery, FindCommentQueryVariables>) => {
  return <div>{JSON.stringify(comment)}</div>
}
