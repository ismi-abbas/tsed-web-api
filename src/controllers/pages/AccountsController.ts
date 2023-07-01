import { Controller, Inject } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { AccountModel, AccountsRepository } from "@tsed/prisma";
import { Get, Post, Returns, Summary } from "@tsed/schema";

@Controller("/account")
export class AccountsController {
  @Inject()
  protected service: AccountsRepository;

  @Get("/")
  @Summary("Get all accounts")
  @Returns(200, Array).Of(AccountModel)
  getAccounts(): Promise<AccountModel[]> {
    return this.service.findMany();
  }

  @Post("/")
  @Summary("Add an account")
  @Returns(200, AccountModel)
  addAccount(@BodyParams() body: { name: string; type: string; balance: number }): Promise<AccountModel> {
    return this.service.create({
      data: {
        name: body.name,
        type: body.type,
        balance: body.balance,
        updatedAt: new Date()
      }
    });
  }
}
