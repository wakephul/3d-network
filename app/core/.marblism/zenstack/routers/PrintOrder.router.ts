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

        createMany: procedure.input($Schema.PrintOrderInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).printOrder.createMany(input as any))),

        create: procedure.input($Schema.PrintOrderInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).printOrder.create(input as any))),

        deleteMany: procedure.input($Schema.PrintOrderInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).printOrder.deleteMany(input as any))),

        delete: procedure.input($Schema.PrintOrderInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).printOrder.delete(input as any))),

        findFirst: procedure.input($Schema.PrintOrderInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).printOrder.findFirst(input as any))),

        findMany: procedure.input($Schema.PrintOrderInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).printOrder.findMany(input as any))),

        findUnique: procedure.input($Schema.PrintOrderInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).printOrder.findUnique(input as any))),

        updateMany: procedure.input($Schema.PrintOrderInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).printOrder.updateMany(input as any))),

        update: procedure.input($Schema.PrintOrderInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).printOrder.update(input as any))),

        count: procedure.input($Schema.PrintOrderInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).printOrder.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PrintOrderCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrintOrderCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrintOrderCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrintOrderCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PrintOrderCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrintOrderCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PrintOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PrintOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrintOrderCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrintOrderCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PrintOrderGetPayload<T>, Context>) => Promise<Prisma.PrintOrderGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PrintOrderDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrintOrderDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrintOrderDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrintOrderDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PrintOrderDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrintOrderDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PrintOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PrintOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrintOrderDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrintOrderDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PrintOrderGetPayload<T>, Context>) => Promise<Prisma.PrintOrderGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PrintOrderFindFirstArgs, TData = Prisma.PrintOrderGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PrintOrderFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PrintOrderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PrintOrderFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PrintOrderFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PrintOrderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PrintOrderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PrintOrderFindManyArgs, TData = Array<Prisma.PrintOrderGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PrintOrderFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PrintOrderGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PrintOrderFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PrintOrderFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PrintOrderGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PrintOrderGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PrintOrderFindUniqueArgs, TData = Prisma.PrintOrderGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PrintOrderFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PrintOrderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PrintOrderFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PrintOrderFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PrintOrderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PrintOrderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PrintOrderUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrintOrderUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrintOrderUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrintOrderUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PrintOrderUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrintOrderUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PrintOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PrintOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrintOrderUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrintOrderUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PrintOrderGetPayload<T>, Context>) => Promise<Prisma.PrintOrderGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PrintOrderCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PrintOrderCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PrintOrderCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PrintOrderCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PrintOrderCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PrintOrderCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PrintOrderCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PrintOrderCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
