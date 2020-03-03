import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = '[Shopping List] ADD_INGREDIENT';
export const ADD_INGREDIENTS = '[Shopping List] ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = '[Shopping List] UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = '[Shopping List] DELETE_INGREDIENT';
export const START_EDIT = '[Shopping List] START_EDIT';
export const STOP_EDIT = '[Shopping List] STOP_EDIT';

export class AddIngredient implements Action {
   readonly type = ADD_INGREDIENT;

   constructor(public payload: Ingredient) {};
}

export class AddIngredients implements Action {
   readonly type = ADD_INGREDIENTS;

   constructor(public payload: Ingredient[]) {};
}

export class UpdateIngredient implements Action {
   readonly type = UPDATE_INGREDIENT;

   constructor(public payload: Ingredient) {};
}

export class DeleteIngredient implements Action {
   readonly type = DELETE_INGREDIENT;
}

export class StartEdit implements Action {
   readonly type = START_EDIT;

   constructor(public payload: number) {}
}

export class StopEdit implements Action {
   readonly type = STOP_EDIT;
}
export type ShoppingListActions = 
         AddIngredient | 
         AddIngredients | 
         UpdateIngredient | 
         DeleteIngredient |
         StartEdit |
         StopEdit;