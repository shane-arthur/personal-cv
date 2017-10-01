
export const thunk = store => {
  const dispatch = store.dispatch;
  const getState = store.getState;

  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    switch (action.type) {
      /*case SET_SELECTED_PICTURE: {
        store.dispatch(setSelectedPicture(action));
        break;
      }
      case CAST_PICTURE_VOTE_selector: {
        sendVoteToRemote(action.data.pageId, action.data.pictureId, action.data.voteCount, action.data.socket);
        break;
      }
      case ADD_REMOVE_PICTURES: {
        break;
      }*/
      
      default:
        break;
    }
    return next(action);
  };
};
