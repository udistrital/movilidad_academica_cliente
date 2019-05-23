import { Injectable } from '@angular/core';
import { IAppState } from '../app.state';
import { Store } from '@ngrx/store';
import { REDUCER_LIST } from '../reducer.constants';
@Injectable()
export class ListService {

  constructor(
    private store: Store < IAppState > ) {

  }

  private addList(type: string, object: Array < any > ) {
    this.store.dispatch({
      type: type,
      payload: object,
    });
  }
}
