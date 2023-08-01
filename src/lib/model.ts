import {
  EnumFilterConditional,
  EnumFilterOperators,
  FilterTypes,
  RelationTypeOperator,
} from "./constants";

export type FilterConditional = keyof typeof EnumFilterConditional;

export type FilterOperatores = keyof typeof EnumFilterOperators;

export type FilterModelConditional<Model> = {
  [x in FilterConditional]?: FilterModel<Model>;
};

export type FilterModel<Model> =
  | FilterModelConditional<Model>
  | {
      [x in keyof Model]?: Model[x] extends string
        ? {
            [x in keyof (typeof RelationTypeOperator)["Text"]]?:
              | (typeof RelationTypeOperator)["Text"][x]
              | FilterModelConditional<Model>;
          }
        : Model[x] extends number
        ? {
            [x in keyof (typeof RelationTypeOperator)["Number"]]?:
              | (typeof RelationTypeOperator)["Number"][x]
              | FilterModelConditional<Model>;
          }
        : Model[x] extends Date
        ? {
            [x in keyof (typeof RelationTypeOperator)["Date"]]?:
              | (typeof RelationTypeOperator)["Date"][x]
              | FilterModelConditional<Model>;
          }
        : Model[x] extends Array<any>
        ? {
            [x in keyof (typeof RelationTypeOperator)["List"]]?:
              | (typeof RelationTypeOperator)["List"][x]
              | FilterModelConditional<Model>;
          }
        : Model[x] extends boolean
        ? {
            [x in keyof (typeof RelationTypeOperator)["Boolean"]]?:
              | (typeof RelationTypeOperator)["Boolean"][x]
              | FilterModelConditional<Model>;
          }
        : any;
    };
