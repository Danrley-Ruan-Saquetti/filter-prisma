export enum EnumFilterOperators {
  "Equal" = "=",
  "Different" = "!=",
  "StartsWith" = "%$",
  "EndsWith" = "$%",
  "Filled" = "!!$",
  "NotFilled" = "!$",
  "Contained" = "$,$",
  "NotContained" = "!$,$",
  "GreaterThen" = "$>%",
  "GreaterOrEqualThan" = "$>=%",
  "LessThan" = "$<%",
  "LessOrEqualThan" = "$<=%",
  "Between" = "%>$<%",
}

export const FilterTypes = {
  Text: "",
  Number: 0,
  Boolean: true,
  Date: new Date(),
  List: [] as any[],
};

export const RelationTypeOperator = {
  Text: {
    Equal: FilterTypes.Text,
    Different: FilterTypes.Text,
    StartsWith: FilterTypes.Text,
    EndsWith: FilterTypes.Text,
    Filled: FilterTypes.Boolean,
    NotFilled: FilterTypes.Boolean,
    Contained: FilterTypes.Text,
    NotContained: FilterTypes.Text,
  },
  Number: {
    Equal: FilterTypes.Number,
    Different: FilterTypes.Number,
    Filled: FilterTypes.Boolean,
    NotFilled: FilterTypes.Boolean,
    GreaterThen: FilterTypes.Number,
    GreaterOrEqualThan: FilterTypes.Number,
    LessThan: FilterTypes.Number,
    LessOrEqualThan: FilterTypes.Number,
    Contained: FilterTypes.Number,
    NotContained: FilterTypes.Number,
  },
  Boolean: {
    Equal: FilterTypes.Boolean,
    Different: FilterTypes.Boolean,
    Filled: FilterTypes.Boolean,
    NotFilled: FilterTypes.Boolean,
  },
  Date: {
    Equal: FilterTypes.Date,
    Different: FilterTypes.Date,
    Filled: FilterTypes.Boolean,
    NotFilled: FilterTypes.Boolean,
    GreaterThen: FilterTypes.Date,
    GreaterOrEqualThan: FilterTypes.Date,
    LessThan: FilterTypes.Date,
    LessOrEqualThan: FilterTypes.Date,
    Between: FilterTypes.Date,
  },
  List: {
    Filled: FilterTypes.Boolean,
    NotFilled: FilterTypes.Boolean,
    Contained: FilterTypes.List,
    NotContained: FilterTypes.List,
  },
};

export enum EnumFilterConditional {
  OR,
  AND,
}
