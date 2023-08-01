import { User } from "@prisma/client";
import { expect, test, describe, it } from "vitest";
import { PrismaFilterController } from "../lib";

describe("Filter Controller", () => {
  it("Model operation", () => {
    const filterController = new PrismaFilterController<User>();

    filterController.filter({});
  });
});
