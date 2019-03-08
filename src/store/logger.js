const logger = ({ getState, dispatch }) => next => action => {
    console.log(action);
    next(action);
    console.log(action);
}