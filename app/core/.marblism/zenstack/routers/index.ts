/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createPrinterRouter from "./Printer.router";
import createReviewRouter from "./Review.router";
import createPrintOrderRouter from "./PrintOrder.router";
import createMessageRouter from "./Message.router";
import createPwaSubscriptionRouter from "./PwaSubscription.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PrinterClientType } from "./Printer.router";
import { ClientType as ReviewClientType } from "./Review.router";
import { ClientType as PrintOrderClientType } from "./PrintOrder.router";
import { ClientType as MessageClientType } from "./Message.router";
import { ClientType as PwaSubscriptionClientType } from "./PwaSubscription.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        printer: createPrinterRouter(router, procedure),
        review: createReviewRouter(router, procedure),
        printOrder: createPrintOrderRouter(router, procedure),
        message: createMessageRouter(router, procedure),
        pwaSubscription: createPwaSubscriptionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    printer: PrinterClientType<AppRouter>;
    review: ReviewClientType<AppRouter>;
    printOrder: PrintOrderClientType<AppRouter>;
    message: MessageClientType<AppRouter>;
    pwaSubscription: PwaSubscriptionClientType<AppRouter>;
}
