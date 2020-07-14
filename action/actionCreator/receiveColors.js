import { RECEIVE_COLORS } from '../actionTypes';

export  default (colors) => ({
    type: RECEIVE_COLORS,
    data: colors
});
