import type { QueryResolvers, CommentResolvers } from 'types/graphql'
import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'


interface CreateCommentArgs {
  input: Prisma.CommentCreateInput
}

export const createComment = ({ input }: CreateCommentArgs) => {
  return db.comment.create({
    data: input
  })
}

export const comments = ({postId}: Required<Pick<Prisma.CommentWhereInput, 'postId'>>) => {
  return db.comment.findMany({ where: { postId } })
}

export const comment = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const deleteComment = ({ id }: Prisma.CommentWhereUniqueInput ) => {
  requireAuth({ roles: 'moderator' })
  return db.comment.delete({
    where: { id }
  })
}

export const Comment: CommentResolvers = {
  post: (_obj, { root }) =>
    db.comment.findUnique({ where: { id: root.id } }).post(),
}
