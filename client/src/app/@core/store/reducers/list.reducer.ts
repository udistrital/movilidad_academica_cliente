import { REDUCER_LIST } from '../reducer.constants';

export class ListReducer {
  constructor() {
  }

  static ListReducerPais(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.Pais:
        return [...state, action.payload];
      default:
        return state;
      }
}

}
