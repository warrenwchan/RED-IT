
export const UP_VOTE = 'UP_VOTE';

export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const upVote = (id) => ({
     type: UP_VOTE, id });

export const deleteMessage = (id) => ({
    type: DELETE_MESSAGE, id });
