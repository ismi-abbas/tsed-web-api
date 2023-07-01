import { Controller } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Get, Post, Summary } from "@tsed/schema";

@Controller("/budget")
export class BudgetController {
  @Get("/")
  @Summary("Get all budgets")
  get() {
    return "budget controller";
  }

  @Post("/add/{id}")
  add(@BodyParams("id") id: string): string {
    return `add budget controller for ${id}`;
  }
}
