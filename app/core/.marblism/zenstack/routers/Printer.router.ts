/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PrinterInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).printer.createMany(input as any))),

        create: procedure.input($Schema.PrinterInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).printer.create(input as any))),

        deleteMany: procedure.input($Schema.PrinterInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).printer.deleteMany(input as any))),

        delete: procedure.input($Schema.PrinterInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).printer.delete(input as any))),

        findFirst: procedure.input($Schema.PrinterInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).printer.findFirst(input as any))),

        findMany: procedure.input($Schema.PrinterInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).printer.findMany(input as any))),

        findUnique: procedure.input($Schema.PrinterInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).printer.findUnique(input as any))),

        updateMany: procedure.input($Schema.PrinterInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).printer.updateMany(input as any))),

        update: procedure.input($Schema.PrinterInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).printer.update(input as any))),

        count: procedure.input($Schema.PrinterInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).printer.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PrinterCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrinterCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrinterCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrinterCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PrinterCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrinterCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PrinterGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PrinterGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrinterCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrinterCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PrinterGetPayload<T>, Context>) => Promise<Prisma.PrinterGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PrinterDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrinterDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrinterDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrinterDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PrinterDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrinterDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PrinterGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PrinterGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrinterDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrinterDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PrinterGetPayload<T>, Context>) => Promise<Prisma.PrinterGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PrinterFindFirstArgs, TData = Prisma.PrinterGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PrinterFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PrinterGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PrinterFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PrinterFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PrinterGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PrinterGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PrinterFindManyArgs, TData = Array<Prisma.PrinterGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PrinterFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PrinterGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PrinterFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PrinterFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PrinterGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PrinterGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PrinterFindUniqueArgs, TData = Prisma.PrinterGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PrinterFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PrinterGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PrinterFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PrinterFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PrinterGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PrinterGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PrinterUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrinterUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrinterUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrinterUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PrinterUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrinterUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PrinterGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PrinterGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrinterUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrinterUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PrinterGetPayload<T>, Context>) => Promise<Prisma.PrinterGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PrinterCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PrinterCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PrinterCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PrinterCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PrinterCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PrinterCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PrinterCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PrinterCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
