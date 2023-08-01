import { FilterConditional, FilterModel, FilterOperatores } from "./model";
import {
  EnumFilterConditional,
  EnumFilterOperators,
  FilterTypes,
  RelationTypeOperator,
} from "./constants";

class PrismaFilterController<Model> {
  filter(args: FilterModel<Model>) {}
}

export { PrismaFilterController };
