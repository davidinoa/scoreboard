import * as PlayerActionTypes from '../actiontypes/player';

const initialState = [
  { name: 'David Inoa', score: 17, id: 1 },
  { name: 'Efrain Marquez', score: 13, id: 2 },
  { name: 'Joe Neckles', score: 14, id: 3 }
];
const currentId = 3;

export default function Player(state = initialState, action) {
  switch(action.type) {
    case PlayerActionTypes.ADD_PLAYER;
      return [
        ...state,
        {
          name: action.name,
          score: 0,
          id: ++currentId
        }
      ];

    case PlayerActionTypes.REMOVE_PLAYER;
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case PlayerActionTypes.UPDATE_PLAYER_SCORE;
      return state.map((player, index) => {
        if (index === action.index) {
          return {
            ...player,
            score: player.score + action.score
          };
        }
        return player;
      });

    default:
      return state;     
  }
}