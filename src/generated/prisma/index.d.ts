
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Round
 * 
 */
export type Round = $Result.DefaultSelection<Prisma.$RoundPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Score
 * 
 */
export type Score = $Result.DefaultSelection<Prisma.$ScorePayload>
/**
 * Model PanelistCode
 * 
 */
export type PanelistCode = $Result.DefaultSelection<Prisma.$PanelistCodePayload>
/**
 * Model ParticipantCode
 * 
 */
export type ParticipantCode = $Result.DefaultSelection<Prisma.$ParticipantCodePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ORGANIZER: 'ORGANIZER',
  USER: 'USER',
  PANELIST: 'PANELIST'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.round`: Exposes CRUD operations for the **Round** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rounds
    * const rounds = await prisma.round.findMany()
    * ```
    */
  get round(): Prisma.RoundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.score`: Exposes CRUD operations for the **Score** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scores
    * const scores = await prisma.score.findMany()
    * ```
    */
  get score(): Prisma.ScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.panelistCode`: Exposes CRUD operations for the **PanelistCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PanelistCodes
    * const panelistCodes = await prisma.panelistCode.findMany()
    * ```
    */
  get panelistCode(): Prisma.PanelistCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participantCode`: Exposes CRUD operations for the **ParticipantCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipantCodes
    * const participantCodes = await prisma.participantCode.findMany()
    * ```
    */
  get participantCode(): Prisma.ParticipantCodeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Event: 'Event',
    Round: 'Round',
    Team: 'Team',
    Score: 'Score',
    PanelistCode: 'PanelistCode',
    ParticipantCode: 'ParticipantCode'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "event" | "round" | "team" | "score" | "panelistCode" | "participantCode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Round: {
        payload: Prisma.$RoundPayload<ExtArgs>
        fields: Prisma.RoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findFirst: {
            args: Prisma.RoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findMany: {
            args: Prisma.RoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          create: {
            args: Prisma.RoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          createMany: {
            args: Prisma.RoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          delete: {
            args: Prisma.RoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          update: {
            args: Prisma.RoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          deleteMany: {
            args: Prisma.RoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          upsert: {
            args: Prisma.RoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          aggregate: {
            args: Prisma.RoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRound>
          }
          groupBy: {
            args: Prisma.RoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoundCountArgs<ExtArgs>
            result: $Utils.Optional<RoundCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Score: {
        payload: Prisma.$ScorePayload<ExtArgs>
        fields: Prisma.ScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findFirst: {
            args: Prisma.ScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findMany: {
            args: Prisma.ScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          create: {
            args: Prisma.ScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          createMany: {
            args: Prisma.ScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          delete: {
            args: Prisma.ScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          update: {
            args: Prisma.ScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          deleteMany: {
            args: Prisma.ScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          upsert: {
            args: Prisma.ScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          aggregate: {
            args: Prisma.ScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScore>
          }
          groupBy: {
            args: Prisma.ScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreCountArgs<ExtArgs>
            result: $Utils.Optional<ScoreCountAggregateOutputType> | number
          }
        }
      }
      PanelistCode: {
        payload: Prisma.$PanelistCodePayload<ExtArgs>
        fields: Prisma.PanelistCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PanelistCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelistCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PanelistCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelistCodePayload>
          }
          findFirst: {
            args: Prisma.PanelistCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelistCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PanelistCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelistCodePayload>
          }
          findMany: {
            args: Prisma.PanelistCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelistCodePayload>[]
          }
          create: {
            args: Prisma.PanelistCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelistCodePayload>
          }
          createMany: {
            args: Prisma.PanelistCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PanelistCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelistCodePayload>[]
          }
          delete: {
            args: Prisma.PanelistCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelistCodePayload>
          }
          update: {
            args: Prisma.PanelistCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelistCodePayload>
          }
          deleteMany: {
            args: Prisma.PanelistCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PanelistCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PanelistCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelistCodePayload>[]
          }
          upsert: {
            args: Prisma.PanelistCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelistCodePayload>
          }
          aggregate: {
            args: Prisma.PanelistCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePanelistCode>
          }
          groupBy: {
            args: Prisma.PanelistCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PanelistCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PanelistCodeCountArgs<ExtArgs>
            result: $Utils.Optional<PanelistCodeCountAggregateOutputType> | number
          }
        }
      }
      ParticipantCode: {
        payload: Prisma.$ParticipantCodePayload<ExtArgs>
        fields: Prisma.ParticipantCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantCodePayload>
          }
          findFirst: {
            args: Prisma.ParticipantCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantCodePayload>
          }
          findMany: {
            args: Prisma.ParticipantCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantCodePayload>[]
          }
          create: {
            args: Prisma.ParticipantCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantCodePayload>
          }
          createMany: {
            args: Prisma.ParticipantCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantCodePayload>[]
          }
          delete: {
            args: Prisma.ParticipantCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantCodePayload>
          }
          update: {
            args: Prisma.ParticipantCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantCodePayload>
          }
          deleteMany: {
            args: Prisma.ParticipantCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantCodePayload>[]
          }
          upsert: {
            args: Prisma.ParticipantCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantCodePayload>
          }
          aggregate: {
            args: Prisma.ParticipantCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipantCode>
          }
          groupBy: {
            args: Prisma.ParticipantCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCodeCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCodeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    event?: EventOmit
    round?: RoundOmit
    team?: TeamOmit
    score?: ScoreOmit
    panelistCode?: PanelistCodeOmit
    participantCode?: ParticipantCodeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    organizedEvents: number
    scores: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizedEvents?: boolean | UserCountOutputTypeCountOrganizedEventsArgs
    scores?: boolean | UserCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    rounds: number
    teams: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rounds?: boolean | EventCountOutputTypeCountRoundsArgs
    teams?: boolean | EventCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * Count Type RoundCountOutputType
   */

  export type RoundCountOutputType = {
    scores: number
  }

  export type RoundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | RoundCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundCountOutputType
     */
    select?: RoundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    participants: number
    scores: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | TeamCountOutputTypeCountParticipantsArgs
    scores?: boolean | TeamCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    isPublic: boolean | null
    storageUrl: string | null
    teamId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    isPublic: boolean | null
    storageUrl: string | null
    teamId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    isPublic: number
    storageUrl: number
    teamId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isPublic?: true
    storageUrl?: true
    teamId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isPublic?: true
    storageUrl?: true
    teamId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isPublic?: true
    storageUrl?: true
    teamId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.Role
    isPublic: boolean
    storageUrl: string | null
    teamId: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isPublic?: boolean
    storageUrl?: boolean
    teamId?: boolean
    organizedEvents?: boolean | User$organizedEventsArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    scores?: boolean | User$scoresArgs<ExtArgs>
    PanelistCode?: boolean | User$PanelistCodeArgs<ExtArgs>
    ParticipantCode?: boolean | User$ParticipantCodeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isPublic?: boolean
    storageUrl?: boolean
    teamId?: boolean
    team?: boolean | User$teamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isPublic?: boolean
    storageUrl?: boolean
    teamId?: boolean
    team?: boolean | User$teamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isPublic?: boolean
    storageUrl?: boolean
    teamId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "isPublic" | "storageUrl" | "teamId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizedEvents?: boolean | User$organizedEventsArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    scores?: boolean | User$scoresArgs<ExtArgs>
    PanelistCode?: boolean | User$PanelistCodeArgs<ExtArgs>
    ParticipantCode?: boolean | User$ParticipantCodeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | User$teamArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | User$teamArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organizedEvents: Prisma.$EventPayload<ExtArgs>[]
      team: Prisma.$TeamPayload<ExtArgs> | null
      scores: Prisma.$ScorePayload<ExtArgs>[]
      PanelistCode: Prisma.$PanelistCodePayload<ExtArgs> | null
      ParticipantCode: Prisma.$ParticipantCodePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
      isPublic: boolean
      storageUrl: string | null
      teamId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizedEvents<T extends User$organizedEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$organizedEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    team<T extends User$teamArgs<ExtArgs> = {}>(args?: Subset<T, User$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    scores<T extends User$scoresArgs<ExtArgs> = {}>(args?: Subset<T, User$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PanelistCode<T extends User$PanelistCodeArgs<ExtArgs> = {}>(args?: Subset<T, User$PanelistCodeArgs<ExtArgs>>): Prisma__PanelistCodeClient<$Result.GetResult<Prisma.$PanelistCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ParticipantCode<T extends User$ParticipantCodeArgs<ExtArgs> = {}>(args?: Subset<T, User$ParticipantCodeArgs<ExtArgs>>): Prisma__ParticipantCodeClient<$Result.GetResult<Prisma.$ParticipantCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isPublic: FieldRef<"User", 'Boolean'>
    readonly storageUrl: FieldRef<"User", 'String'>
    readonly teamId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.organizedEvents
   */
  export type User$organizedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.team
   */
  export type User$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * User.scores
   */
  export type User$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * User.PanelistCode
   */
  export type User$PanelistCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeInclude<ExtArgs> | null
    where?: PanelistCodeWhereInput
  }

  /**
   * User.ParticipantCode
   */
  export type User$ParticipantCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeInclude<ExtArgs> | null
    where?: ParticipantCodeWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    organizerId: number | null
  }

  export type EventSumAggregateOutputType = {
    organizerId: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    organizerId: number | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    organizerId: number | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    organizerId: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    organizerId?: true
  }

  export type EventSumAggregateInputType = {
    organizerId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    organizerId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    organizerId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    organizerId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    organizerId: number
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    organizerId?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    rounds?: boolean | Event$roundsArgs<ExtArgs>
    teams?: boolean | Event$teamsArgs<ExtArgs>
    panelistCode?: boolean | Event$panelistCodeArgs<ExtArgs>
    participantCode?: boolean | Event$participantCodeArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    organizerId?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    organizerId?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    organizerId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "organizerId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    rounds?: boolean | Event$roundsArgs<ExtArgs>
    teams?: boolean | Event$teamsArgs<ExtArgs>
    panelistCode?: boolean | Event$panelistCodeArgs<ExtArgs>
    participantCode?: boolean | Event$participantCodeArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      organizer: Prisma.$UserPayload<ExtArgs>
      rounds: Prisma.$RoundPayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
      panelistCode: Prisma.$PanelistCodePayload<ExtArgs> | null
      participantCode: Prisma.$ParticipantCodePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      organizerId: number
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rounds<T extends Event$roundsArgs<ExtArgs> = {}>(args?: Subset<T, Event$roundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends Event$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Event$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    panelistCode<T extends Event$panelistCodeArgs<ExtArgs> = {}>(args?: Subset<T, Event$panelistCodeArgs<ExtArgs>>): Prisma__PanelistCodeClient<$Result.GetResult<Prisma.$PanelistCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participantCode<T extends Event$participantCodeArgs<ExtArgs> = {}>(args?: Subset<T, Event$participantCodeArgs<ExtArgs>>): Prisma__ParticipantCodeClient<$Result.GetResult<Prisma.$ParticipantCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly organizerId: FieldRef<"Event", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.rounds
   */
  export type Event$roundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    cursor?: RoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Event.teams
   */
  export type Event$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Event.panelistCode
   */
  export type Event$panelistCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeInclude<ExtArgs> | null
    where?: PanelistCodeWhereInput
  }

  /**
   * Event.participantCode
   */
  export type Event$participantCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeInclude<ExtArgs> | null
    where?: ParticipantCodeWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Round
   */

  export type AggregateRound = {
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  export type RoundAvgAggregateOutputType = {
    order: number | null
  }

  export type RoundSumAggregateOutputType = {
    order: number | null
  }

  export type RoundMinAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    eventId: string | null
  }

  export type RoundMaxAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    eventId: string | null
  }

  export type RoundCountAggregateOutputType = {
    id: number
    name: number
    order: number
    eventId: number
    _all: number
  }


  export type RoundAvgAggregateInputType = {
    order?: true
  }

  export type RoundSumAggregateInputType = {
    order?: true
  }

  export type RoundMinAggregateInputType = {
    id?: true
    name?: true
    order?: true
    eventId?: true
  }

  export type RoundMaxAggregateInputType = {
    id?: true
    name?: true
    order?: true
    eventId?: true
  }

  export type RoundCountAggregateInputType = {
    id?: true
    name?: true
    order?: true
    eventId?: true
    _all?: true
  }

  export type RoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Round to aggregate.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rounds
    **/
    _count?: true | RoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundMaxAggregateInputType
  }

  export type GetRoundAggregateType<T extends RoundAggregateArgs> = {
        [P in keyof T & keyof AggregateRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRound[P]>
      : GetScalarType<T[P], AggregateRound[P]>
  }




  export type RoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithAggregationInput | RoundOrderByWithAggregationInput[]
    by: RoundScalarFieldEnum[] | RoundScalarFieldEnum
    having?: RoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundCountAggregateInputType | true
    _avg?: RoundAvgAggregateInputType
    _sum?: RoundSumAggregateInputType
    _min?: RoundMinAggregateInputType
    _max?: RoundMaxAggregateInputType
  }

  export type RoundGroupByOutputType = {
    id: string
    name: string
    order: number
    eventId: string
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  type GetRoundGroupByPayload<T extends RoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundGroupByOutputType[P]>
            : GetScalarType<T[P], RoundGroupByOutputType[P]>
        }
      >
    >


  export type RoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    scores?: boolean | Round$scoresArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectScalar = {
    id?: boolean
    name?: boolean
    order?: boolean
    eventId?: boolean
  }

  export type RoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "order" | "eventId", ExtArgs["result"]["round"]>
  export type RoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    scores?: boolean | Round$scoresArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type RoundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $RoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Round"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      scores: Prisma.$ScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      order: number
      eventId: string
    }, ExtArgs["result"]["round"]>
    composites: {}
  }

  type RoundGetPayload<S extends boolean | null | undefined | RoundDefaultArgs> = $Result.GetResult<Prisma.$RoundPayload, S>

  type RoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoundCountAggregateInputType | true
    }

  export interface RoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Round'], meta: { name: 'Round' } }
    /**
     * Find zero or one Round that matches the filter.
     * @param {RoundFindUniqueArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoundFindUniqueArgs>(args: SelectSubset<T, RoundFindUniqueArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Round that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoundFindUniqueOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoundFindUniqueOrThrowArgs>(args: SelectSubset<T, RoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoundFindFirstArgs>(args?: SelectSubset<T, RoundFindFirstArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoundFindFirstOrThrowArgs>(args?: SelectSubset<T, RoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rounds
     * const rounds = await prisma.round.findMany()
     * 
     * // Get first 10 Rounds
     * const rounds = await prisma.round.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundWithIdOnly = await prisma.round.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoundFindManyArgs>(args?: SelectSubset<T, RoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Round.
     * @param {RoundCreateArgs} args - Arguments to create a Round.
     * @example
     * // Create one Round
     * const Round = await prisma.round.create({
     *   data: {
     *     // ... data to create a Round
     *   }
     * })
     * 
     */
    create<T extends RoundCreateArgs>(args: SelectSubset<T, RoundCreateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rounds.
     * @param {RoundCreateManyArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoundCreateManyArgs>(args?: SelectSubset<T, RoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rounds and returns the data saved in the database.
     * @param {RoundCreateManyAndReturnArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoundCreateManyAndReturnArgs>(args?: SelectSubset<T, RoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Round.
     * @param {RoundDeleteArgs} args - Arguments to delete one Round.
     * @example
     * // Delete one Round
     * const Round = await prisma.round.delete({
     *   where: {
     *     // ... filter to delete one Round
     *   }
     * })
     * 
     */
    delete<T extends RoundDeleteArgs>(args: SelectSubset<T, RoundDeleteArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Round.
     * @param {RoundUpdateArgs} args - Arguments to update one Round.
     * @example
     * // Update one Round
     * const round = await prisma.round.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoundUpdateArgs>(args: SelectSubset<T, RoundUpdateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rounds.
     * @param {RoundDeleteManyArgs} args - Arguments to filter Rounds to delete.
     * @example
     * // Delete a few Rounds
     * const { count } = await prisma.round.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoundDeleteManyArgs>(args?: SelectSubset<T, RoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoundUpdateManyArgs>(args: SelectSubset<T, RoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds and returns the data updated in the database.
     * @param {RoundUpdateManyAndReturnArgs} args - Arguments to update many Rounds.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoundUpdateManyAndReturnArgs>(args: SelectSubset<T, RoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Round.
     * @param {RoundUpsertArgs} args - Arguments to update or create a Round.
     * @example
     * // Update or create a Round
     * const round = await prisma.round.upsert({
     *   create: {
     *     // ... data to create a Round
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Round we want to update
     *   }
     * })
     */
    upsert<T extends RoundUpsertArgs>(args: SelectSubset<T, RoundUpsertArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundCountArgs} args - Arguments to filter Rounds to count.
     * @example
     * // Count the number of Rounds
     * const count = await prisma.round.count({
     *   where: {
     *     // ... the filter for the Rounds we want to count
     *   }
     * })
    **/
    count<T extends RoundCountArgs>(
      args?: Subset<T, RoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoundAggregateArgs>(args: Subset<T, RoundAggregateArgs>): Prisma.PrismaPromise<GetRoundAggregateType<T>>

    /**
     * Group by Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundGroupByArgs['orderBy'] }
        : { orderBy?: RoundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Round model
   */
  readonly fields: RoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Round.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scores<T extends Round$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Round$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Round model
   */
  interface RoundFieldRefs {
    readonly id: FieldRef<"Round", 'String'>
    readonly name: FieldRef<"Round", 'String'>
    readonly order: FieldRef<"Round", 'Int'>
    readonly eventId: FieldRef<"Round", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Round findUnique
   */
  export type RoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findUniqueOrThrow
   */
  export type RoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findFirst
   */
  export type RoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findFirstOrThrow
   */
  export type RoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findMany
   */
  export type RoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Rounds to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round create
   */
  export type RoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to create a Round.
     */
    data: XOR<RoundCreateInput, RoundUncheckedCreateInput>
  }

  /**
   * Round createMany
   */
  export type RoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Round createManyAndReturn
   */
  export type RoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Round update
   */
  export type RoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to update a Round.
     */
    data: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
    /**
     * Choose, which Round to update.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round updateMany
   */
  export type RoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
  }

  /**
   * Round updateManyAndReturn
   */
  export type RoundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Round upsert
   */
  export type RoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The filter to search for the Round to update in case it exists.
     */
    where: RoundWhereUniqueInput
    /**
     * In case the Round found by the `where` argument doesn't exist, create a new Round with this data.
     */
    create: XOR<RoundCreateInput, RoundUncheckedCreateInput>
    /**
     * In case the Round was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
  }

  /**
   * Round delete
   */
  export type RoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter which Round to delete.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round deleteMany
   */
  export type RoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rounds to delete
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to delete.
     */
    limit?: number
  }

  /**
   * Round.scores
   */
  export type Round$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Round without action
   */
  export type RoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    eventId: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    eventId: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    eventId: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    eventId?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    eventId?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    eventId?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    eventId: string
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    participants?: boolean | Team$participantsArgs<ExtArgs>
    scores?: boolean | Team$scoresArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    eventId?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "eventId", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    participants?: boolean | Team$participantsArgs<ExtArgs>
    scores?: boolean | Team$scoresArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      participants: Prisma.$UserPayload<ExtArgs>[]
      scores: Prisma.$ScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      eventId: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Team$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Team$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scores<T extends Team$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Team$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly eventId: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.participants
   */
  export type Team$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Team.scores
   */
  export type Team$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Score
   */

  export type AggregateScore = {
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  export type ScoreAvgAggregateOutputType = {
    marks: number | null
    panelistId: number | null
  }

  export type ScoreSumAggregateOutputType = {
    marks: number | null
    panelistId: number | null
  }

  export type ScoreMinAggregateOutputType = {
    id: string | null
    marks: number | null
    remarks: string | null
    roundId: string | null
    panelistId: number | null
    teamId: string | null
  }

  export type ScoreMaxAggregateOutputType = {
    id: string | null
    marks: number | null
    remarks: string | null
    roundId: string | null
    panelistId: number | null
    teamId: string | null
  }

  export type ScoreCountAggregateOutputType = {
    id: number
    marks: number
    remarks: number
    roundId: number
    panelistId: number
    teamId: number
    _all: number
  }


  export type ScoreAvgAggregateInputType = {
    marks?: true
    panelistId?: true
  }

  export type ScoreSumAggregateInputType = {
    marks?: true
    panelistId?: true
  }

  export type ScoreMinAggregateInputType = {
    id?: true
    marks?: true
    remarks?: true
    roundId?: true
    panelistId?: true
    teamId?: true
  }

  export type ScoreMaxAggregateInputType = {
    id?: true
    marks?: true
    remarks?: true
    roundId?: true
    panelistId?: true
    teamId?: true
  }

  export type ScoreCountAggregateInputType = {
    id?: true
    marks?: true
    remarks?: true
    roundId?: true
    panelistId?: true
    teamId?: true
    _all?: true
  }

  export type ScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Score to aggregate.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scores
    **/
    _count?: true | ScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreMaxAggregateInputType
  }

  export type GetScoreAggregateType<T extends ScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScore[P]>
      : GetScalarType<T[P], AggregateScore[P]>
  }




  export type ScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithAggregationInput | ScoreOrderByWithAggregationInput[]
    by: ScoreScalarFieldEnum[] | ScoreScalarFieldEnum
    having?: ScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreCountAggregateInputType | true
    _avg?: ScoreAvgAggregateInputType
    _sum?: ScoreSumAggregateInputType
    _min?: ScoreMinAggregateInputType
    _max?: ScoreMaxAggregateInputType
  }

  export type ScoreGroupByOutputType = {
    id: string
    marks: number
    remarks: string | null
    roundId: string
    panelistId: number
    teamId: string
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  type GetScoreGroupByPayload<T extends ScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreGroupByOutputType[P]>
        }
      >
    >


  export type ScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marks?: boolean
    remarks?: boolean
    roundId?: boolean
    panelistId?: boolean
    teamId?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    panelist?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marks?: boolean
    remarks?: boolean
    roundId?: boolean
    panelistId?: boolean
    teamId?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    panelist?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marks?: boolean
    remarks?: boolean
    roundId?: boolean
    panelistId?: boolean
    teamId?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    panelist?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectScalar = {
    id?: boolean
    marks?: boolean
    remarks?: boolean
    roundId?: boolean
    panelistId?: boolean
    teamId?: boolean
  }

  export type ScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marks" | "remarks" | "roundId" | "panelistId" | "teamId", ExtArgs["result"]["score"]>
  export type ScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    panelist?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type ScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    panelist?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type ScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    panelist?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $ScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Score"
    objects: {
      round: Prisma.$RoundPayload<ExtArgs>
      panelist: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      marks: number
      remarks: string | null
      roundId: string
      panelistId: number
      teamId: string
    }, ExtArgs["result"]["score"]>
    composites: {}
  }

  type ScoreGetPayload<S extends boolean | null | undefined | ScoreDefaultArgs> = $Result.GetResult<Prisma.$ScorePayload, S>

  type ScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoreCountAggregateInputType | true
    }

  export interface ScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Score'], meta: { name: 'Score' } }
    /**
     * Find zero or one Score that matches the filter.
     * @param {ScoreFindUniqueArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreFindUniqueArgs>(args: SelectSubset<T, ScoreFindUniqueArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Score that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreFindUniqueOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Score that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreFindFirstArgs>(args?: SelectSubset<T, ScoreFindFirstArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Score that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scores
     * const scores = await prisma.score.findMany()
     * 
     * // Get first 10 Scores
     * const scores = await prisma.score.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreWithIdOnly = await prisma.score.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoreFindManyArgs>(args?: SelectSubset<T, ScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Score.
     * @param {ScoreCreateArgs} args - Arguments to create a Score.
     * @example
     * // Create one Score
     * const Score = await prisma.score.create({
     *   data: {
     *     // ... data to create a Score
     *   }
     * })
     * 
     */
    create<T extends ScoreCreateArgs>(args: SelectSubset<T, ScoreCreateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scores.
     * @param {ScoreCreateManyArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoreCreateManyArgs>(args?: SelectSubset<T, ScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scores and returns the data saved in the database.
     * @param {ScoreCreateManyAndReturnArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Score.
     * @param {ScoreDeleteArgs} args - Arguments to delete one Score.
     * @example
     * // Delete one Score
     * const Score = await prisma.score.delete({
     *   where: {
     *     // ... filter to delete one Score
     *   }
     * })
     * 
     */
    delete<T extends ScoreDeleteArgs>(args: SelectSubset<T, ScoreDeleteArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Score.
     * @param {ScoreUpdateArgs} args - Arguments to update one Score.
     * @example
     * // Update one Score
     * const score = await prisma.score.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoreUpdateArgs>(args: SelectSubset<T, ScoreUpdateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scores.
     * @param {ScoreDeleteManyArgs} args - Arguments to filter Scores to delete.
     * @example
     * // Delete a few Scores
     * const { count } = await prisma.score.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoreDeleteManyArgs>(args?: SelectSubset<T, ScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoreUpdateManyArgs>(args: SelectSubset<T, ScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores and returns the data updated in the database.
     * @param {ScoreUpdateManyAndReturnArgs} args - Arguments to update many Scores.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, ScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Score.
     * @param {ScoreUpsertArgs} args - Arguments to update or create a Score.
     * @example
     * // Update or create a Score
     * const score = await prisma.score.upsert({
     *   create: {
     *     // ... data to create a Score
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Score we want to update
     *   }
     * })
     */
    upsert<T extends ScoreUpsertArgs>(args: SelectSubset<T, ScoreUpsertArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreCountArgs} args - Arguments to filter Scores to count.
     * @example
     * // Count the number of Scores
     * const count = await prisma.score.count({
     *   where: {
     *     // ... the filter for the Scores we want to count
     *   }
     * })
    **/
    count<T extends ScoreCountArgs>(
      args?: Subset<T, ScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScoreAggregateArgs>(args: Subset<T, ScoreAggregateArgs>): Prisma.PrismaPromise<GetScoreAggregateType<T>>

    /**
     * Group by Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreGroupByArgs['orderBy'] }
        : { orderBy?: ScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Score model
   */
  readonly fields: ScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Score.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    round<T extends RoundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoundDefaultArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    panelist<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Score model
   */
  interface ScoreFieldRefs {
    readonly id: FieldRef<"Score", 'String'>
    readonly marks: FieldRef<"Score", 'Int'>
    readonly remarks: FieldRef<"Score", 'String'>
    readonly roundId: FieldRef<"Score", 'String'>
    readonly panelistId: FieldRef<"Score", 'Int'>
    readonly teamId: FieldRef<"Score", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Score findUnique
   */
  export type ScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findUniqueOrThrow
   */
  export type ScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findFirst
   */
  export type ScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findFirstOrThrow
   */
  export type ScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findMany
   */
  export type ScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Scores to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score create
   */
  export type ScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Score.
     */
    data: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
  }

  /**
   * Score createMany
   */
  export type ScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Score createManyAndReturn
   */
  export type ScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Score update
   */
  export type ScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Score.
     */
    data: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
    /**
     * Choose, which Score to update.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score updateMany
   */
  export type ScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to update.
     */
    limit?: number
  }

  /**
   * Score updateManyAndReturn
   */
  export type ScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Score upsert
   */
  export type ScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Score to update in case it exists.
     */
    where: ScoreWhereUniqueInput
    /**
     * In case the Score found by the `where` argument doesn't exist, create a new Score with this data.
     */
    create: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
    /**
     * In case the Score was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
  }

  /**
   * Score delete
   */
  export type ScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter which Score to delete.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score deleteMany
   */
  export type ScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scores to delete
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to delete.
     */
    limit?: number
  }

  /**
   * Score without action
   */
  export type ScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
  }


  /**
   * Model PanelistCode
   */

  export type AggregatePanelistCode = {
    _count: PanelistCodeCountAggregateOutputType | null
    _avg: PanelistCodeAvgAggregateOutputType | null
    _sum: PanelistCodeSumAggregateOutputType | null
    _min: PanelistCodeMinAggregateOutputType | null
    _max: PanelistCodeMaxAggregateOutputType | null
  }

  export type PanelistCodeAvgAggregateOutputType = {
    userId: number | null
  }

  export type PanelistCodeSumAggregateOutputType = {
    userId: number | null
  }

  export type PanelistCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    eventId: string | null
    userId: number | null
  }

  export type PanelistCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    eventId: string | null
    userId: number | null
  }

  export type PanelistCodeCountAggregateOutputType = {
    id: number
    code: number
    eventId: number
    userId: number
    _all: number
  }


  export type PanelistCodeAvgAggregateInputType = {
    userId?: true
  }

  export type PanelistCodeSumAggregateInputType = {
    userId?: true
  }

  export type PanelistCodeMinAggregateInputType = {
    id?: true
    code?: true
    eventId?: true
    userId?: true
  }

  export type PanelistCodeMaxAggregateInputType = {
    id?: true
    code?: true
    eventId?: true
    userId?: true
  }

  export type PanelistCodeCountAggregateInputType = {
    id?: true
    code?: true
    eventId?: true
    userId?: true
    _all?: true
  }

  export type PanelistCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PanelistCode to aggregate.
     */
    where?: PanelistCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelistCodes to fetch.
     */
    orderBy?: PanelistCodeOrderByWithRelationInput | PanelistCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PanelistCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelistCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelistCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PanelistCodes
    **/
    _count?: true | PanelistCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PanelistCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PanelistCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PanelistCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PanelistCodeMaxAggregateInputType
  }

  export type GetPanelistCodeAggregateType<T extends PanelistCodeAggregateArgs> = {
        [P in keyof T & keyof AggregatePanelistCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePanelistCode[P]>
      : GetScalarType<T[P], AggregatePanelistCode[P]>
  }




  export type PanelistCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanelistCodeWhereInput
    orderBy?: PanelistCodeOrderByWithAggregationInput | PanelistCodeOrderByWithAggregationInput[]
    by: PanelistCodeScalarFieldEnum[] | PanelistCodeScalarFieldEnum
    having?: PanelistCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PanelistCodeCountAggregateInputType | true
    _avg?: PanelistCodeAvgAggregateInputType
    _sum?: PanelistCodeSumAggregateInputType
    _min?: PanelistCodeMinAggregateInputType
    _max?: PanelistCodeMaxAggregateInputType
  }

  export type PanelistCodeGroupByOutputType = {
    id: string
    code: string
    eventId: string
    userId: number
    _count: PanelistCodeCountAggregateOutputType | null
    _avg: PanelistCodeAvgAggregateOutputType | null
    _sum: PanelistCodeSumAggregateOutputType | null
    _min: PanelistCodeMinAggregateOutputType | null
    _max: PanelistCodeMaxAggregateOutputType | null
  }

  type GetPanelistCodeGroupByPayload<T extends PanelistCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PanelistCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PanelistCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PanelistCodeGroupByOutputType[P]>
            : GetScalarType<T[P], PanelistCodeGroupByOutputType[P]>
        }
      >
    >


  export type PanelistCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panelistCode"]>

  export type PanelistCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panelistCode"]>

  export type PanelistCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panelistCode"]>

  export type PanelistCodeSelectScalar = {
    id?: boolean
    code?: boolean
    eventId?: boolean
    userId?: boolean
  }

  export type PanelistCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "eventId" | "userId", ExtArgs["result"]["panelistCode"]>
  export type PanelistCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PanelistCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PanelistCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PanelistCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PanelistCode"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      eventId: string
      userId: number
    }, ExtArgs["result"]["panelistCode"]>
    composites: {}
  }

  type PanelistCodeGetPayload<S extends boolean | null | undefined | PanelistCodeDefaultArgs> = $Result.GetResult<Prisma.$PanelistCodePayload, S>

  type PanelistCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PanelistCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PanelistCodeCountAggregateInputType | true
    }

  export interface PanelistCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PanelistCode'], meta: { name: 'PanelistCode' } }
    /**
     * Find zero or one PanelistCode that matches the filter.
     * @param {PanelistCodeFindUniqueArgs} args - Arguments to find a PanelistCode
     * @example
     * // Get one PanelistCode
     * const panelistCode = await prisma.panelistCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PanelistCodeFindUniqueArgs>(args: SelectSubset<T, PanelistCodeFindUniqueArgs<ExtArgs>>): Prisma__PanelistCodeClient<$Result.GetResult<Prisma.$PanelistCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PanelistCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PanelistCodeFindUniqueOrThrowArgs} args - Arguments to find a PanelistCode
     * @example
     * // Get one PanelistCode
     * const panelistCode = await prisma.panelistCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PanelistCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, PanelistCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PanelistCodeClient<$Result.GetResult<Prisma.$PanelistCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PanelistCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelistCodeFindFirstArgs} args - Arguments to find a PanelistCode
     * @example
     * // Get one PanelistCode
     * const panelistCode = await prisma.panelistCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PanelistCodeFindFirstArgs>(args?: SelectSubset<T, PanelistCodeFindFirstArgs<ExtArgs>>): Prisma__PanelistCodeClient<$Result.GetResult<Prisma.$PanelistCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PanelistCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelistCodeFindFirstOrThrowArgs} args - Arguments to find a PanelistCode
     * @example
     * // Get one PanelistCode
     * const panelistCode = await prisma.panelistCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PanelistCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, PanelistCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PanelistCodeClient<$Result.GetResult<Prisma.$PanelistCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PanelistCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelistCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PanelistCodes
     * const panelistCodes = await prisma.panelistCode.findMany()
     * 
     * // Get first 10 PanelistCodes
     * const panelistCodes = await prisma.panelistCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const panelistCodeWithIdOnly = await prisma.panelistCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PanelistCodeFindManyArgs>(args?: SelectSubset<T, PanelistCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelistCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PanelistCode.
     * @param {PanelistCodeCreateArgs} args - Arguments to create a PanelistCode.
     * @example
     * // Create one PanelistCode
     * const PanelistCode = await prisma.panelistCode.create({
     *   data: {
     *     // ... data to create a PanelistCode
     *   }
     * })
     * 
     */
    create<T extends PanelistCodeCreateArgs>(args: SelectSubset<T, PanelistCodeCreateArgs<ExtArgs>>): Prisma__PanelistCodeClient<$Result.GetResult<Prisma.$PanelistCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PanelistCodes.
     * @param {PanelistCodeCreateManyArgs} args - Arguments to create many PanelistCodes.
     * @example
     * // Create many PanelistCodes
     * const panelistCode = await prisma.panelistCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PanelistCodeCreateManyArgs>(args?: SelectSubset<T, PanelistCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PanelistCodes and returns the data saved in the database.
     * @param {PanelistCodeCreateManyAndReturnArgs} args - Arguments to create many PanelistCodes.
     * @example
     * // Create many PanelistCodes
     * const panelistCode = await prisma.panelistCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PanelistCodes and only return the `id`
     * const panelistCodeWithIdOnly = await prisma.panelistCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PanelistCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, PanelistCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelistCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PanelistCode.
     * @param {PanelistCodeDeleteArgs} args - Arguments to delete one PanelistCode.
     * @example
     * // Delete one PanelistCode
     * const PanelistCode = await prisma.panelistCode.delete({
     *   where: {
     *     // ... filter to delete one PanelistCode
     *   }
     * })
     * 
     */
    delete<T extends PanelistCodeDeleteArgs>(args: SelectSubset<T, PanelistCodeDeleteArgs<ExtArgs>>): Prisma__PanelistCodeClient<$Result.GetResult<Prisma.$PanelistCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PanelistCode.
     * @param {PanelistCodeUpdateArgs} args - Arguments to update one PanelistCode.
     * @example
     * // Update one PanelistCode
     * const panelistCode = await prisma.panelistCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PanelistCodeUpdateArgs>(args: SelectSubset<T, PanelistCodeUpdateArgs<ExtArgs>>): Prisma__PanelistCodeClient<$Result.GetResult<Prisma.$PanelistCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PanelistCodes.
     * @param {PanelistCodeDeleteManyArgs} args - Arguments to filter PanelistCodes to delete.
     * @example
     * // Delete a few PanelistCodes
     * const { count } = await prisma.panelistCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PanelistCodeDeleteManyArgs>(args?: SelectSubset<T, PanelistCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PanelistCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelistCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PanelistCodes
     * const panelistCode = await prisma.panelistCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PanelistCodeUpdateManyArgs>(args: SelectSubset<T, PanelistCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PanelistCodes and returns the data updated in the database.
     * @param {PanelistCodeUpdateManyAndReturnArgs} args - Arguments to update many PanelistCodes.
     * @example
     * // Update many PanelistCodes
     * const panelistCode = await prisma.panelistCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PanelistCodes and only return the `id`
     * const panelistCodeWithIdOnly = await prisma.panelistCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PanelistCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, PanelistCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelistCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PanelistCode.
     * @param {PanelistCodeUpsertArgs} args - Arguments to update or create a PanelistCode.
     * @example
     * // Update or create a PanelistCode
     * const panelistCode = await prisma.panelistCode.upsert({
     *   create: {
     *     // ... data to create a PanelistCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PanelistCode we want to update
     *   }
     * })
     */
    upsert<T extends PanelistCodeUpsertArgs>(args: SelectSubset<T, PanelistCodeUpsertArgs<ExtArgs>>): Prisma__PanelistCodeClient<$Result.GetResult<Prisma.$PanelistCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PanelistCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelistCodeCountArgs} args - Arguments to filter PanelistCodes to count.
     * @example
     * // Count the number of PanelistCodes
     * const count = await prisma.panelistCode.count({
     *   where: {
     *     // ... the filter for the PanelistCodes we want to count
     *   }
     * })
    **/
    count<T extends PanelistCodeCountArgs>(
      args?: Subset<T, PanelistCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PanelistCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PanelistCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelistCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PanelistCodeAggregateArgs>(args: Subset<T, PanelistCodeAggregateArgs>): Prisma.PrismaPromise<GetPanelistCodeAggregateType<T>>

    /**
     * Group by PanelistCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelistCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PanelistCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PanelistCodeGroupByArgs['orderBy'] }
        : { orderBy?: PanelistCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PanelistCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPanelistCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PanelistCode model
   */
  readonly fields: PanelistCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PanelistCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PanelistCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PanelistCode model
   */
  interface PanelistCodeFieldRefs {
    readonly id: FieldRef<"PanelistCode", 'String'>
    readonly code: FieldRef<"PanelistCode", 'String'>
    readonly eventId: FieldRef<"PanelistCode", 'String'>
    readonly userId: FieldRef<"PanelistCode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PanelistCode findUnique
   */
  export type PanelistCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeInclude<ExtArgs> | null
    /**
     * Filter, which PanelistCode to fetch.
     */
    where: PanelistCodeWhereUniqueInput
  }

  /**
   * PanelistCode findUniqueOrThrow
   */
  export type PanelistCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeInclude<ExtArgs> | null
    /**
     * Filter, which PanelistCode to fetch.
     */
    where: PanelistCodeWhereUniqueInput
  }

  /**
   * PanelistCode findFirst
   */
  export type PanelistCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeInclude<ExtArgs> | null
    /**
     * Filter, which PanelistCode to fetch.
     */
    where?: PanelistCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelistCodes to fetch.
     */
    orderBy?: PanelistCodeOrderByWithRelationInput | PanelistCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PanelistCodes.
     */
    cursor?: PanelistCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelistCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelistCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PanelistCodes.
     */
    distinct?: PanelistCodeScalarFieldEnum | PanelistCodeScalarFieldEnum[]
  }

  /**
   * PanelistCode findFirstOrThrow
   */
  export type PanelistCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeInclude<ExtArgs> | null
    /**
     * Filter, which PanelistCode to fetch.
     */
    where?: PanelistCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelistCodes to fetch.
     */
    orderBy?: PanelistCodeOrderByWithRelationInput | PanelistCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PanelistCodes.
     */
    cursor?: PanelistCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelistCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelistCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PanelistCodes.
     */
    distinct?: PanelistCodeScalarFieldEnum | PanelistCodeScalarFieldEnum[]
  }

  /**
   * PanelistCode findMany
   */
  export type PanelistCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeInclude<ExtArgs> | null
    /**
     * Filter, which PanelistCodes to fetch.
     */
    where?: PanelistCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelistCodes to fetch.
     */
    orderBy?: PanelistCodeOrderByWithRelationInput | PanelistCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PanelistCodes.
     */
    cursor?: PanelistCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelistCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelistCodes.
     */
    skip?: number
    distinct?: PanelistCodeScalarFieldEnum | PanelistCodeScalarFieldEnum[]
  }

  /**
   * PanelistCode create
   */
  export type PanelistCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a PanelistCode.
     */
    data: XOR<PanelistCodeCreateInput, PanelistCodeUncheckedCreateInput>
  }

  /**
   * PanelistCode createMany
   */
  export type PanelistCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PanelistCodes.
     */
    data: PanelistCodeCreateManyInput | PanelistCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PanelistCode createManyAndReturn
   */
  export type PanelistCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * The data used to create many PanelistCodes.
     */
    data: PanelistCodeCreateManyInput | PanelistCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PanelistCode update
   */
  export type PanelistCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a PanelistCode.
     */
    data: XOR<PanelistCodeUpdateInput, PanelistCodeUncheckedUpdateInput>
    /**
     * Choose, which PanelistCode to update.
     */
    where: PanelistCodeWhereUniqueInput
  }

  /**
   * PanelistCode updateMany
   */
  export type PanelistCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PanelistCodes.
     */
    data: XOR<PanelistCodeUpdateManyMutationInput, PanelistCodeUncheckedUpdateManyInput>
    /**
     * Filter which PanelistCodes to update
     */
    where?: PanelistCodeWhereInput
    /**
     * Limit how many PanelistCodes to update.
     */
    limit?: number
  }

  /**
   * PanelistCode updateManyAndReturn
   */
  export type PanelistCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * The data used to update PanelistCodes.
     */
    data: XOR<PanelistCodeUpdateManyMutationInput, PanelistCodeUncheckedUpdateManyInput>
    /**
     * Filter which PanelistCodes to update
     */
    where?: PanelistCodeWhereInput
    /**
     * Limit how many PanelistCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PanelistCode upsert
   */
  export type PanelistCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the PanelistCode to update in case it exists.
     */
    where: PanelistCodeWhereUniqueInput
    /**
     * In case the PanelistCode found by the `where` argument doesn't exist, create a new PanelistCode with this data.
     */
    create: XOR<PanelistCodeCreateInput, PanelistCodeUncheckedCreateInput>
    /**
     * In case the PanelistCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PanelistCodeUpdateInput, PanelistCodeUncheckedUpdateInput>
  }

  /**
   * PanelistCode delete
   */
  export type PanelistCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeInclude<ExtArgs> | null
    /**
     * Filter which PanelistCode to delete.
     */
    where: PanelistCodeWhereUniqueInput
  }

  /**
   * PanelistCode deleteMany
   */
  export type PanelistCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PanelistCodes to delete
     */
    where?: PanelistCodeWhereInput
    /**
     * Limit how many PanelistCodes to delete.
     */
    limit?: number
  }

  /**
   * PanelistCode without action
   */
  export type PanelistCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelistCode
     */
    select?: PanelistCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanelistCode
     */
    omit?: PanelistCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelistCodeInclude<ExtArgs> | null
  }


  /**
   * Model ParticipantCode
   */

  export type AggregateParticipantCode = {
    _count: ParticipantCodeCountAggregateOutputType | null
    _avg: ParticipantCodeAvgAggregateOutputType | null
    _sum: ParticipantCodeSumAggregateOutputType | null
    _min: ParticipantCodeMinAggregateOutputType | null
    _max: ParticipantCodeMaxAggregateOutputType | null
  }

  export type ParticipantCodeAvgAggregateOutputType = {
    userId: number | null
  }

  export type ParticipantCodeSumAggregateOutputType = {
    userId: number | null
  }

  export type ParticipantCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    eventId: string | null
    userId: number | null
  }

  export type ParticipantCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    eventId: string | null
    userId: number | null
  }

  export type ParticipantCodeCountAggregateOutputType = {
    id: number
    code: number
    eventId: number
    userId: number
    _all: number
  }


  export type ParticipantCodeAvgAggregateInputType = {
    userId?: true
  }

  export type ParticipantCodeSumAggregateInputType = {
    userId?: true
  }

  export type ParticipantCodeMinAggregateInputType = {
    id?: true
    code?: true
    eventId?: true
    userId?: true
  }

  export type ParticipantCodeMaxAggregateInputType = {
    id?: true
    code?: true
    eventId?: true
    userId?: true
  }

  export type ParticipantCodeCountAggregateInputType = {
    id?: true
    code?: true
    eventId?: true
    userId?: true
    _all?: true
  }

  export type ParticipantCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantCode to aggregate.
     */
    where?: ParticipantCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantCodes to fetch.
     */
    orderBy?: ParticipantCodeOrderByWithRelationInput | ParticipantCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipantCodes
    **/
    _count?: true | ParticipantCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantCodeMaxAggregateInputType
  }

  export type GetParticipantCodeAggregateType<T extends ParticipantCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipantCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipantCode[P]>
      : GetScalarType<T[P], AggregateParticipantCode[P]>
  }




  export type ParticipantCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantCodeWhereInput
    orderBy?: ParticipantCodeOrderByWithAggregationInput | ParticipantCodeOrderByWithAggregationInput[]
    by: ParticipantCodeScalarFieldEnum[] | ParticipantCodeScalarFieldEnum
    having?: ParticipantCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCodeCountAggregateInputType | true
    _avg?: ParticipantCodeAvgAggregateInputType
    _sum?: ParticipantCodeSumAggregateInputType
    _min?: ParticipantCodeMinAggregateInputType
    _max?: ParticipantCodeMaxAggregateInputType
  }

  export type ParticipantCodeGroupByOutputType = {
    id: string
    code: string
    eventId: string
    userId: number
    _count: ParticipantCodeCountAggregateOutputType | null
    _avg: ParticipantCodeAvgAggregateOutputType | null
    _sum: ParticipantCodeSumAggregateOutputType | null
    _min: ParticipantCodeMinAggregateOutputType | null
    _max: ParticipantCodeMaxAggregateOutputType | null
  }

  type GetParticipantCodeGroupByPayload<T extends ParticipantCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantCodeGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantCodeGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantCode"]>

  export type ParticipantCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantCode"]>

  export type ParticipantCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantCode"]>

  export type ParticipantCodeSelectScalar = {
    id?: boolean
    code?: boolean
    eventId?: boolean
    userId?: boolean
  }

  export type ParticipantCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "eventId" | "userId", ExtArgs["result"]["participantCode"]>
  export type ParticipantCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParticipantCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParticipantCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParticipantCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipantCode"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      eventId: string
      userId: number
    }, ExtArgs["result"]["participantCode"]>
    composites: {}
  }

  type ParticipantCodeGetPayload<S extends boolean | null | undefined | ParticipantCodeDefaultArgs> = $Result.GetResult<Prisma.$ParticipantCodePayload, S>

  type ParticipantCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCodeCountAggregateInputType | true
    }

  export interface ParticipantCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipantCode'], meta: { name: 'ParticipantCode' } }
    /**
     * Find zero or one ParticipantCode that matches the filter.
     * @param {ParticipantCodeFindUniqueArgs} args - Arguments to find a ParticipantCode
     * @example
     * // Get one ParticipantCode
     * const participantCode = await prisma.participantCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantCodeFindUniqueArgs>(args: SelectSubset<T, ParticipantCodeFindUniqueArgs<ExtArgs>>): Prisma__ParticipantCodeClient<$Result.GetResult<Prisma.$ParticipantCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipantCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantCodeFindUniqueOrThrowArgs} args - Arguments to find a ParticipantCode
     * @example
     * // Get one ParticipantCode
     * const participantCode = await prisma.participantCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantCodeClient<$Result.GetResult<Prisma.$ParticipantCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCodeFindFirstArgs} args - Arguments to find a ParticipantCode
     * @example
     * // Get one ParticipantCode
     * const participantCode = await prisma.participantCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantCodeFindFirstArgs>(args?: SelectSubset<T, ParticipantCodeFindFirstArgs<ExtArgs>>): Prisma__ParticipantCodeClient<$Result.GetResult<Prisma.$ParticipantCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCodeFindFirstOrThrowArgs} args - Arguments to find a ParticipantCode
     * @example
     * // Get one ParticipantCode
     * const participantCode = await prisma.participantCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantCodeClient<$Result.GetResult<Prisma.$ParticipantCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipantCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipantCodes
     * const participantCodes = await prisma.participantCode.findMany()
     * 
     * // Get first 10 ParticipantCodes
     * const participantCodes = await prisma.participantCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantCodeWithIdOnly = await prisma.participantCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantCodeFindManyArgs>(args?: SelectSubset<T, ParticipantCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipantCode.
     * @param {ParticipantCodeCreateArgs} args - Arguments to create a ParticipantCode.
     * @example
     * // Create one ParticipantCode
     * const ParticipantCode = await prisma.participantCode.create({
     *   data: {
     *     // ... data to create a ParticipantCode
     *   }
     * })
     * 
     */
    create<T extends ParticipantCodeCreateArgs>(args: SelectSubset<T, ParticipantCodeCreateArgs<ExtArgs>>): Prisma__ParticipantCodeClient<$Result.GetResult<Prisma.$ParticipantCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipantCodes.
     * @param {ParticipantCodeCreateManyArgs} args - Arguments to create many ParticipantCodes.
     * @example
     * // Create many ParticipantCodes
     * const participantCode = await prisma.participantCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantCodeCreateManyArgs>(args?: SelectSubset<T, ParticipantCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipantCodes and returns the data saved in the database.
     * @param {ParticipantCodeCreateManyAndReturnArgs} args - Arguments to create many ParticipantCodes.
     * @example
     * // Create many ParticipantCodes
     * const participantCode = await prisma.participantCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipantCodes and only return the `id`
     * const participantCodeWithIdOnly = await prisma.participantCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipantCode.
     * @param {ParticipantCodeDeleteArgs} args - Arguments to delete one ParticipantCode.
     * @example
     * // Delete one ParticipantCode
     * const ParticipantCode = await prisma.participantCode.delete({
     *   where: {
     *     // ... filter to delete one ParticipantCode
     *   }
     * })
     * 
     */
    delete<T extends ParticipantCodeDeleteArgs>(args: SelectSubset<T, ParticipantCodeDeleteArgs<ExtArgs>>): Prisma__ParticipantCodeClient<$Result.GetResult<Prisma.$ParticipantCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipantCode.
     * @param {ParticipantCodeUpdateArgs} args - Arguments to update one ParticipantCode.
     * @example
     * // Update one ParticipantCode
     * const participantCode = await prisma.participantCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantCodeUpdateArgs>(args: SelectSubset<T, ParticipantCodeUpdateArgs<ExtArgs>>): Prisma__ParticipantCodeClient<$Result.GetResult<Prisma.$ParticipantCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipantCodes.
     * @param {ParticipantCodeDeleteManyArgs} args - Arguments to filter ParticipantCodes to delete.
     * @example
     * // Delete a few ParticipantCodes
     * const { count } = await prisma.participantCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantCodeDeleteManyArgs>(args?: SelectSubset<T, ParticipantCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipantCodes
     * const participantCode = await prisma.participantCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantCodeUpdateManyArgs>(args: SelectSubset<T, ParticipantCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantCodes and returns the data updated in the database.
     * @param {ParticipantCodeUpdateManyAndReturnArgs} args - Arguments to update many ParticipantCodes.
     * @example
     * // Update many ParticipantCodes
     * const participantCode = await prisma.participantCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipantCodes and only return the `id`
     * const participantCodeWithIdOnly = await prisma.participantCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipantCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipantCode.
     * @param {ParticipantCodeUpsertArgs} args - Arguments to update or create a ParticipantCode.
     * @example
     * // Update or create a ParticipantCode
     * const participantCode = await prisma.participantCode.upsert({
     *   create: {
     *     // ... data to create a ParticipantCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipantCode we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantCodeUpsertArgs>(args: SelectSubset<T, ParticipantCodeUpsertArgs<ExtArgs>>): Prisma__ParticipantCodeClient<$Result.GetResult<Prisma.$ParticipantCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipantCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCodeCountArgs} args - Arguments to filter ParticipantCodes to count.
     * @example
     * // Count the number of ParticipantCodes
     * const count = await prisma.participantCode.count({
     *   where: {
     *     // ... the filter for the ParticipantCodes we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCodeCountArgs>(
      args?: Subset<T, ParticipantCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipantCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipantCodeAggregateArgs>(args: Subset<T, ParticipantCodeAggregateArgs>): Prisma.PrismaPromise<GetParticipantCodeAggregateType<T>>

    /**
     * Group by ParticipantCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipantCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantCodeGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipantCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipantCode model
   */
  readonly fields: ParticipantCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipantCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParticipantCode model
   */
  interface ParticipantCodeFieldRefs {
    readonly id: FieldRef<"ParticipantCode", 'String'>
    readonly code: FieldRef<"ParticipantCode", 'String'>
    readonly eventId: FieldRef<"ParticipantCode", 'String'>
    readonly userId: FieldRef<"ParticipantCode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ParticipantCode findUnique
   */
  export type ParticipantCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantCode to fetch.
     */
    where: ParticipantCodeWhereUniqueInput
  }

  /**
   * ParticipantCode findUniqueOrThrow
   */
  export type ParticipantCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantCode to fetch.
     */
    where: ParticipantCodeWhereUniqueInput
  }

  /**
   * ParticipantCode findFirst
   */
  export type ParticipantCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantCode to fetch.
     */
    where?: ParticipantCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantCodes to fetch.
     */
    orderBy?: ParticipantCodeOrderByWithRelationInput | ParticipantCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantCodes.
     */
    cursor?: ParticipantCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantCodes.
     */
    distinct?: ParticipantCodeScalarFieldEnum | ParticipantCodeScalarFieldEnum[]
  }

  /**
   * ParticipantCode findFirstOrThrow
   */
  export type ParticipantCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantCode to fetch.
     */
    where?: ParticipantCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantCodes to fetch.
     */
    orderBy?: ParticipantCodeOrderByWithRelationInput | ParticipantCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantCodes.
     */
    cursor?: ParticipantCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantCodes.
     */
    distinct?: ParticipantCodeScalarFieldEnum | ParticipantCodeScalarFieldEnum[]
  }

  /**
   * ParticipantCode findMany
   */
  export type ParticipantCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantCodes to fetch.
     */
    where?: ParticipantCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantCodes to fetch.
     */
    orderBy?: ParticipantCodeOrderByWithRelationInput | ParticipantCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipantCodes.
     */
    cursor?: ParticipantCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantCodes.
     */
    skip?: number
    distinct?: ParticipantCodeScalarFieldEnum | ParticipantCodeScalarFieldEnum[]
  }

  /**
   * ParticipantCode create
   */
  export type ParticipantCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a ParticipantCode.
     */
    data: XOR<ParticipantCodeCreateInput, ParticipantCodeUncheckedCreateInput>
  }

  /**
   * ParticipantCode createMany
   */
  export type ParticipantCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipantCodes.
     */
    data: ParticipantCodeCreateManyInput | ParticipantCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipantCode createManyAndReturn
   */
  export type ParticipantCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * The data used to create many ParticipantCodes.
     */
    data: ParticipantCodeCreateManyInput | ParticipantCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantCode update
   */
  export type ParticipantCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a ParticipantCode.
     */
    data: XOR<ParticipantCodeUpdateInput, ParticipantCodeUncheckedUpdateInput>
    /**
     * Choose, which ParticipantCode to update.
     */
    where: ParticipantCodeWhereUniqueInput
  }

  /**
   * ParticipantCode updateMany
   */
  export type ParticipantCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipantCodes.
     */
    data: XOR<ParticipantCodeUpdateManyMutationInput, ParticipantCodeUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantCodes to update
     */
    where?: ParticipantCodeWhereInput
    /**
     * Limit how many ParticipantCodes to update.
     */
    limit?: number
  }

  /**
   * ParticipantCode updateManyAndReturn
   */
  export type ParticipantCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * The data used to update ParticipantCodes.
     */
    data: XOR<ParticipantCodeUpdateManyMutationInput, ParticipantCodeUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantCodes to update
     */
    where?: ParticipantCodeWhereInput
    /**
     * Limit how many ParticipantCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantCode upsert
   */
  export type ParticipantCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the ParticipantCode to update in case it exists.
     */
    where: ParticipantCodeWhereUniqueInput
    /**
     * In case the ParticipantCode found by the `where` argument doesn't exist, create a new ParticipantCode with this data.
     */
    create: XOR<ParticipantCodeCreateInput, ParticipantCodeUncheckedCreateInput>
    /**
     * In case the ParticipantCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantCodeUpdateInput, ParticipantCodeUncheckedUpdateInput>
  }

  /**
   * ParticipantCode delete
   */
  export type ParticipantCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeInclude<ExtArgs> | null
    /**
     * Filter which ParticipantCode to delete.
     */
    where: ParticipantCodeWhereUniqueInput
  }

  /**
   * ParticipantCode deleteMany
   */
  export type ParticipantCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantCodes to delete
     */
    where?: ParticipantCodeWhereInput
    /**
     * Limit how many ParticipantCodes to delete.
     */
    limit?: number
  }

  /**
   * ParticipantCode without action
   */
  export type ParticipantCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCode
     */
    select?: ParticipantCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantCode
     */
    omit?: ParticipantCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantCodeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    isPublic: 'isPublic',
    storageUrl: 'storageUrl',
    teamId: 'teamId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    organizerId: 'organizerId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const RoundScalarFieldEnum: {
    id: 'id',
    name: 'name',
    order: 'order',
    eventId: 'eventId'
  };

  export type RoundScalarFieldEnum = (typeof RoundScalarFieldEnum)[keyof typeof RoundScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    eventId: 'eventId'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const ScoreScalarFieldEnum: {
    id: 'id',
    marks: 'marks',
    remarks: 'remarks',
    roundId: 'roundId',
    panelistId: 'panelistId',
    teamId: 'teamId'
  };

  export type ScoreScalarFieldEnum = (typeof ScoreScalarFieldEnum)[keyof typeof ScoreScalarFieldEnum]


  export const PanelistCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    eventId: 'eventId',
    userId: 'userId'
  };

  export type PanelistCodeScalarFieldEnum = (typeof PanelistCodeScalarFieldEnum)[keyof typeof PanelistCodeScalarFieldEnum]


  export const ParticipantCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    eventId: 'eventId',
    userId: 'userId'
  };

  export type ParticipantCodeScalarFieldEnum = (typeof ParticipantCodeScalarFieldEnum)[keyof typeof ParticipantCodeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isPublic?: BoolFilter<"User"> | boolean
    storageUrl?: StringNullableFilter<"User"> | string | null
    teamId?: StringNullableFilter<"User"> | string | null
    organizedEvents?: EventListRelationFilter
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    scores?: ScoreListRelationFilter
    PanelistCode?: XOR<PanelistCodeNullableScalarRelationFilter, PanelistCodeWhereInput> | null
    ParticipantCode?: XOR<ParticipantCodeNullableScalarRelationFilter, ParticipantCodeWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isPublic?: SortOrder
    storageUrl?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    organizedEvents?: EventOrderByRelationAggregateInput
    team?: TeamOrderByWithRelationInput
    scores?: ScoreOrderByRelationAggregateInput
    PanelistCode?: PanelistCodeOrderByWithRelationInput
    ParticipantCode?: ParticipantCodeOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isPublic?: BoolFilter<"User"> | boolean
    storageUrl?: StringNullableFilter<"User"> | string | null
    teamId?: StringNullableFilter<"User"> | string | null
    organizedEvents?: EventListRelationFilter
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    scores?: ScoreListRelationFilter
    PanelistCode?: XOR<PanelistCodeNullableScalarRelationFilter, PanelistCodeWhereInput> | null
    ParticipantCode?: XOR<ParticipantCodeNullableScalarRelationFilter, ParticipantCodeWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isPublic?: SortOrder
    storageUrl?: SortOrderInput | SortOrder
    teamId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isPublic?: BoolWithAggregatesFilter<"User"> | boolean
    storageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    teamId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    organizerId?: IntFilter<"Event"> | number
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    rounds?: RoundListRelationFilter
    teams?: TeamListRelationFilter
    panelistCode?: XOR<PanelistCodeNullableScalarRelationFilter, PanelistCodeWhereInput> | null
    participantCode?: XOR<ParticipantCodeNullableScalarRelationFilter, ParticipantCodeWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    organizerId?: SortOrder
    organizer?: UserOrderByWithRelationInput
    rounds?: RoundOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
    panelistCode?: PanelistCodeOrderByWithRelationInput
    participantCode?: ParticipantCodeOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    organizerId?: IntFilter<"Event"> | number
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    rounds?: RoundListRelationFilter
    teams?: TeamListRelationFilter
    panelistCode?: XOR<PanelistCodeNullableScalarRelationFilter, PanelistCodeWhereInput> | null
    participantCode?: XOR<ParticipantCodeNullableScalarRelationFilter, ParticipantCodeWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    organizerId?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    organizerId?: IntWithAggregatesFilter<"Event"> | number
  }

  export type RoundWhereInput = {
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    id?: StringFilter<"Round"> | string
    name?: StringFilter<"Round"> | string
    order?: IntFilter<"Round"> | number
    eventId?: StringFilter<"Round"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    scores?: ScoreListRelationFilter
  }

  export type RoundOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    eventId?: SortOrder
    event?: EventOrderByWithRelationInput
    scores?: ScoreOrderByRelationAggregateInput
  }

  export type RoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    name?: StringFilter<"Round"> | string
    order?: IntFilter<"Round"> | number
    eventId?: StringFilter<"Round"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    scores?: ScoreListRelationFilter
  }, "id">

  export type RoundOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    eventId?: SortOrder
    _count?: RoundCountOrderByAggregateInput
    _avg?: RoundAvgOrderByAggregateInput
    _max?: RoundMaxOrderByAggregateInput
    _min?: RoundMinOrderByAggregateInput
    _sum?: RoundSumOrderByAggregateInput
  }

  export type RoundScalarWhereWithAggregatesInput = {
    AND?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    OR?: RoundScalarWhereWithAggregatesInput[]
    NOT?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Round"> | string
    name?: StringWithAggregatesFilter<"Round"> | string
    order?: IntWithAggregatesFilter<"Round"> | number
    eventId?: StringWithAggregatesFilter<"Round"> | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    eventId?: StringFilter<"Team"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    participants?: UserListRelationFilter
    scores?: ScoreListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    eventId?: SortOrder
    event?: EventOrderByWithRelationInput
    participants?: UserOrderByRelationAggregateInput
    scores?: ScoreOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    eventId?: StringFilter<"Team"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    participants?: UserListRelationFilter
    scores?: ScoreListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    eventId?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    eventId?: StringWithAggregatesFilter<"Team"> | string
  }

  export type ScoreWhereInput = {
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    id?: StringFilter<"Score"> | string
    marks?: IntFilter<"Score"> | number
    remarks?: StringNullableFilter<"Score"> | string | null
    roundId?: StringFilter<"Score"> | string
    panelistId?: IntFilter<"Score"> | number
    teamId?: StringFilter<"Score"> | string
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
    panelist?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type ScoreOrderByWithRelationInput = {
    id?: SortOrder
    marks?: SortOrder
    remarks?: SortOrderInput | SortOrder
    roundId?: SortOrder
    panelistId?: SortOrder
    teamId?: SortOrder
    round?: RoundOrderByWithRelationInput
    panelist?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type ScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    marks?: IntFilter<"Score"> | number
    remarks?: StringNullableFilter<"Score"> | string | null
    roundId?: StringFilter<"Score"> | string
    panelistId?: IntFilter<"Score"> | number
    teamId?: StringFilter<"Score"> | string
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
    panelist?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id">

  export type ScoreOrderByWithAggregationInput = {
    id?: SortOrder
    marks?: SortOrder
    remarks?: SortOrderInput | SortOrder
    roundId?: SortOrder
    panelistId?: SortOrder
    teamId?: SortOrder
    _count?: ScoreCountOrderByAggregateInput
    _avg?: ScoreAvgOrderByAggregateInput
    _max?: ScoreMaxOrderByAggregateInput
    _min?: ScoreMinOrderByAggregateInput
    _sum?: ScoreSumOrderByAggregateInput
  }

  export type ScoreScalarWhereWithAggregatesInput = {
    AND?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    OR?: ScoreScalarWhereWithAggregatesInput[]
    NOT?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Score"> | string
    marks?: IntWithAggregatesFilter<"Score"> | number
    remarks?: StringNullableWithAggregatesFilter<"Score"> | string | null
    roundId?: StringWithAggregatesFilter<"Score"> | string
    panelistId?: IntWithAggregatesFilter<"Score"> | number
    teamId?: StringWithAggregatesFilter<"Score"> | string
  }

  export type PanelistCodeWhereInput = {
    AND?: PanelistCodeWhereInput | PanelistCodeWhereInput[]
    OR?: PanelistCodeWhereInput[]
    NOT?: PanelistCodeWhereInput | PanelistCodeWhereInput[]
    id?: StringFilter<"PanelistCode"> | string
    code?: StringFilter<"PanelistCode"> | string
    eventId?: StringFilter<"PanelistCode"> | string
    userId?: IntFilter<"PanelistCode"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PanelistCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PanelistCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    eventId?: string
    userId?: number
    AND?: PanelistCodeWhereInput | PanelistCodeWhereInput[]
    OR?: PanelistCodeWhereInput[]
    NOT?: PanelistCodeWhereInput | PanelistCodeWhereInput[]
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "code" | "eventId" | "userId">

  export type PanelistCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    _count?: PanelistCodeCountOrderByAggregateInput
    _avg?: PanelistCodeAvgOrderByAggregateInput
    _max?: PanelistCodeMaxOrderByAggregateInput
    _min?: PanelistCodeMinOrderByAggregateInput
    _sum?: PanelistCodeSumOrderByAggregateInput
  }

  export type PanelistCodeScalarWhereWithAggregatesInput = {
    AND?: PanelistCodeScalarWhereWithAggregatesInput | PanelistCodeScalarWhereWithAggregatesInput[]
    OR?: PanelistCodeScalarWhereWithAggregatesInput[]
    NOT?: PanelistCodeScalarWhereWithAggregatesInput | PanelistCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PanelistCode"> | string
    code?: StringWithAggregatesFilter<"PanelistCode"> | string
    eventId?: StringWithAggregatesFilter<"PanelistCode"> | string
    userId?: IntWithAggregatesFilter<"PanelistCode"> | number
  }

  export type ParticipantCodeWhereInput = {
    AND?: ParticipantCodeWhereInput | ParticipantCodeWhereInput[]
    OR?: ParticipantCodeWhereInput[]
    NOT?: ParticipantCodeWhereInput | ParticipantCodeWhereInput[]
    id?: StringFilter<"ParticipantCode"> | string
    code?: StringFilter<"ParticipantCode"> | string
    eventId?: StringFilter<"ParticipantCode"> | string
    userId?: IntFilter<"ParticipantCode"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ParticipantCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ParticipantCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    eventId?: string
    userId?: number
    AND?: ParticipantCodeWhereInput | ParticipantCodeWhereInput[]
    OR?: ParticipantCodeWhereInput[]
    NOT?: ParticipantCodeWhereInput | ParticipantCodeWhereInput[]
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "code" | "eventId" | "userId">

  export type ParticipantCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    _count?: ParticipantCodeCountOrderByAggregateInput
    _avg?: ParticipantCodeAvgOrderByAggregateInput
    _max?: ParticipantCodeMaxOrderByAggregateInput
    _min?: ParticipantCodeMinOrderByAggregateInput
    _sum?: ParticipantCodeSumOrderByAggregateInput
  }

  export type ParticipantCodeScalarWhereWithAggregatesInput = {
    AND?: ParticipantCodeScalarWhereWithAggregatesInput | ParticipantCodeScalarWhereWithAggregatesInput[]
    OR?: ParticipantCodeScalarWhereWithAggregatesInput[]
    NOT?: ParticipantCodeScalarWhereWithAggregatesInput | ParticipantCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParticipantCode"> | string
    code?: StringWithAggregatesFilter<"ParticipantCode"> | string
    eventId?: StringWithAggregatesFilter<"ParticipantCode"> | string
    userId?: IntWithAggregatesFilter<"ParticipantCode"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    team?: TeamCreateNestedOneWithoutParticipantsInput
    scores?: ScoreCreateNestedManyWithoutPanelistInput
    PanelistCode?: PanelistCodeCreateNestedOneWithoutUserInput
    ParticipantCode?: ParticipantCodeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
    teamId?: string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    scores?: ScoreUncheckedCreateNestedManyWithoutPanelistInput
    PanelistCode?: PanelistCodeUncheckedCreateNestedOneWithoutUserInput
    ParticipantCode?: ParticipantCodeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    team?: TeamUpdateOneWithoutParticipantsNestedInput
    scores?: ScoreUpdateManyWithoutPanelistNestedInput
    PanelistCode?: PanelistCodeUpdateOneWithoutUserNestedInput
    ParticipantCode?: ParticipantCodeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutPanelistNestedInput
    PanelistCode?: PanelistCodeUncheckedUpdateOneWithoutUserNestedInput
    ParticipantCode?: ParticipantCodeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
    teamId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    rounds?: RoundCreateNestedManyWithoutEventInput
    teams?: TeamCreateNestedManyWithoutEventInput
    panelistCode?: PanelistCodeCreateNestedOneWithoutEventInput
    participantCode?: ParticipantCodeCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organizerId: number
    rounds?: RoundUncheckedCreateNestedManyWithoutEventInput
    teams?: TeamUncheckedCreateNestedManyWithoutEventInput
    panelistCode?: PanelistCodeUncheckedCreateNestedOneWithoutEventInput
    participantCode?: ParticipantCodeUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    rounds?: RoundUpdateManyWithoutEventNestedInput
    teams?: TeamUpdateManyWithoutEventNestedInput
    panelistCode?: PanelistCodeUpdateOneWithoutEventNestedInput
    participantCode?: ParticipantCodeUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: IntFieldUpdateOperationsInput | number
    rounds?: RoundUncheckedUpdateManyWithoutEventNestedInput
    teams?: TeamUncheckedUpdateManyWithoutEventNestedInput
    panelistCode?: PanelistCodeUncheckedUpdateOneWithoutEventNestedInput
    participantCode?: ParticipantCodeUncheckedUpdateOneWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organizerId: number
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: IntFieldUpdateOperationsInput | number
  }

  export type RoundCreateInput = {
    id?: string
    name: string
    order: number
    event: EventCreateNestedOneWithoutRoundsInput
    scores?: ScoreCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateInput = {
    id?: string
    name: string
    order: number
    eventId: string
    scores?: ScoreUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneRequiredWithoutRoundsNestedInput
    scores?: ScoreUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    scores?: ScoreUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundCreateManyInput = {
    id?: string
    name: string
    order: number
    eventId: string
  }

  export type RoundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RoundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    event: EventCreateNestedOneWithoutTeamsInput
    participants?: UserCreateNestedManyWithoutTeamInput
    scores?: ScoreCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    eventId: string
    participants?: UserUncheckedCreateNestedManyWithoutTeamInput
    scores?: ScoreUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutTeamsNestedInput
    participants?: UserUpdateManyWithoutTeamNestedInput
    scores?: ScoreUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    participants?: UserUncheckedUpdateManyWithoutTeamNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    eventId: string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreCreateInput = {
    id?: string
    marks: number
    remarks?: string | null
    round: RoundCreateNestedOneWithoutScoresInput
    panelist: UserCreateNestedOneWithoutScoresInput
    team: TeamCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateInput = {
    id?: string
    marks: number
    remarks?: string | null
    roundId: string
    panelistId: number
    teamId: string
  }

  export type ScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    round?: RoundUpdateOneRequiredWithoutScoresNestedInput
    panelist?: UserUpdateOneRequiredWithoutScoresNestedInput
    team?: TeamUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    roundId?: StringFieldUpdateOperationsInput | string
    panelistId?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreCreateManyInput = {
    id?: string
    marks: number
    remarks?: string | null
    roundId: string
    panelistId: number
    teamId: string
  }

  export type ScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    roundId?: StringFieldUpdateOperationsInput | string
    panelistId?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type PanelistCodeCreateInput = {
    id?: string
    code: string
    event: EventCreateNestedOneWithoutPanelistCodeInput
    user: UserCreateNestedOneWithoutPanelistCodeInput
  }

  export type PanelistCodeUncheckedCreateInput = {
    id?: string
    code: string
    eventId: string
    userId: number
  }

  export type PanelistCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutPanelistCodeNestedInput
    user?: UserUpdateOneRequiredWithoutPanelistCodeNestedInput
  }

  export type PanelistCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PanelistCodeCreateManyInput = {
    id?: string
    code: string
    eventId: string
    userId: number
  }

  export type PanelistCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type PanelistCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantCodeCreateInput = {
    id?: string
    code: string
    event: EventCreateNestedOneWithoutParticipantCodeInput
    user: UserCreateNestedOneWithoutParticipantCodeInput
  }

  export type ParticipantCodeUncheckedCreateInput = {
    id?: string
    code: string
    eventId: string
    userId: number
  }

  export type ParticipantCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutParticipantCodeNestedInput
    user?: UserUpdateOneRequiredWithoutParticipantCodeNestedInput
  }

  export type ParticipantCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantCodeCreateManyInput = {
    id?: string
    code: string
    eventId: string
    userId: number
  }

  export type ParticipantCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type ScoreListRelationFilter = {
    every?: ScoreWhereInput
    some?: ScoreWhereInput
    none?: ScoreWhereInput
  }

  export type PanelistCodeNullableScalarRelationFilter = {
    is?: PanelistCodeWhereInput | null
    isNot?: PanelistCodeWhereInput | null
  }

  export type ParticipantCodeNullableScalarRelationFilter = {
    is?: ParticipantCodeWhereInput | null
    isNot?: ParticipantCodeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isPublic?: SortOrder
    storageUrl?: SortOrder
    teamId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isPublic?: SortOrder
    storageUrl?: SortOrder
    teamId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isPublic?: SortOrder
    storageUrl?: SortOrder
    teamId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoundListRelationFilter = {
    every?: RoundWhereInput
    some?: RoundWhereInput
    none?: RoundWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type RoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    organizerId?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    organizerId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    organizerId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    organizerId?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    organizerId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type RoundCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    eventId?: SortOrder
  }

  export type RoundAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type RoundMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    eventId?: SortOrder
  }

  export type RoundMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    eventId?: SortOrder
  }

  export type RoundSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eventId?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eventId?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eventId?: SortOrder
  }

  export type RoundScalarRelationFilter = {
    is?: RoundWhereInput
    isNot?: RoundWhereInput
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type ScoreCountOrderByAggregateInput = {
    id?: SortOrder
    marks?: SortOrder
    remarks?: SortOrder
    roundId?: SortOrder
    panelistId?: SortOrder
    teamId?: SortOrder
  }

  export type ScoreAvgOrderByAggregateInput = {
    marks?: SortOrder
    panelistId?: SortOrder
  }

  export type ScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    marks?: SortOrder
    remarks?: SortOrder
    roundId?: SortOrder
    panelistId?: SortOrder
    teamId?: SortOrder
  }

  export type ScoreMinOrderByAggregateInput = {
    id?: SortOrder
    marks?: SortOrder
    remarks?: SortOrder
    roundId?: SortOrder
    panelistId?: SortOrder
    teamId?: SortOrder
  }

  export type ScoreSumOrderByAggregateInput = {
    marks?: SortOrder
    panelistId?: SortOrder
  }

  export type PanelistCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type PanelistCodeAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type PanelistCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type PanelistCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type PanelistCodeSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ParticipantCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type ParticipantCodeAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ParticipantCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type ParticipantCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type ParticipantCodeSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TeamCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<TeamCreateWithoutParticipantsInput, TeamUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutParticipantsInput
    connect?: TeamWhereUniqueInput
  }

  export type ScoreCreateNestedManyWithoutPanelistInput = {
    create?: XOR<ScoreCreateWithoutPanelistInput, ScoreUncheckedCreateWithoutPanelistInput> | ScoreCreateWithoutPanelistInput[] | ScoreUncheckedCreateWithoutPanelistInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutPanelistInput | ScoreCreateOrConnectWithoutPanelistInput[]
    createMany?: ScoreCreateManyPanelistInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type PanelistCodeCreateNestedOneWithoutUserInput = {
    create?: XOR<PanelistCodeCreateWithoutUserInput, PanelistCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: PanelistCodeCreateOrConnectWithoutUserInput
    connect?: PanelistCodeWhereUniqueInput
  }

  export type ParticipantCodeCreateNestedOneWithoutUserInput = {
    create?: XOR<ParticipantCodeCreateWithoutUserInput, ParticipantCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParticipantCodeCreateOrConnectWithoutUserInput
    connect?: ParticipantCodeWhereUniqueInput
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutPanelistInput = {
    create?: XOR<ScoreCreateWithoutPanelistInput, ScoreUncheckedCreateWithoutPanelistInput> | ScoreCreateWithoutPanelistInput[] | ScoreUncheckedCreateWithoutPanelistInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutPanelistInput | ScoreCreateOrConnectWithoutPanelistInput[]
    createMany?: ScoreCreateManyPanelistInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type PanelistCodeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PanelistCodeCreateWithoutUserInput, PanelistCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: PanelistCodeCreateOrConnectWithoutUserInput
    connect?: PanelistCodeWhereUniqueInput
  }

  export type ParticipantCodeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ParticipantCodeCreateWithoutUserInput, ParticipantCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParticipantCodeCreateOrConnectWithoutUserInput
    connect?: ParticipantCodeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TeamUpdateOneWithoutParticipantsNestedInput = {
    create?: XOR<TeamCreateWithoutParticipantsInput, TeamUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutParticipantsInput
    upsert?: TeamUpsertWithoutParticipantsInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutParticipantsInput, TeamUpdateWithoutParticipantsInput>, TeamUncheckedUpdateWithoutParticipantsInput>
  }

  export type ScoreUpdateManyWithoutPanelistNestedInput = {
    create?: XOR<ScoreCreateWithoutPanelistInput, ScoreUncheckedCreateWithoutPanelistInput> | ScoreCreateWithoutPanelistInput[] | ScoreUncheckedCreateWithoutPanelistInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutPanelistInput | ScoreCreateOrConnectWithoutPanelistInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutPanelistInput | ScoreUpsertWithWhereUniqueWithoutPanelistInput[]
    createMany?: ScoreCreateManyPanelistInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutPanelistInput | ScoreUpdateWithWhereUniqueWithoutPanelistInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutPanelistInput | ScoreUpdateManyWithWhereWithoutPanelistInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type PanelistCodeUpdateOneWithoutUserNestedInput = {
    create?: XOR<PanelistCodeCreateWithoutUserInput, PanelistCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: PanelistCodeCreateOrConnectWithoutUserInput
    upsert?: PanelistCodeUpsertWithoutUserInput
    disconnect?: PanelistCodeWhereInput | boolean
    delete?: PanelistCodeWhereInput | boolean
    connect?: PanelistCodeWhereUniqueInput
    update?: XOR<XOR<PanelistCodeUpdateToOneWithWhereWithoutUserInput, PanelistCodeUpdateWithoutUserInput>, PanelistCodeUncheckedUpdateWithoutUserInput>
  }

  export type ParticipantCodeUpdateOneWithoutUserNestedInput = {
    create?: XOR<ParticipantCodeCreateWithoutUserInput, ParticipantCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParticipantCodeCreateOrConnectWithoutUserInput
    upsert?: ParticipantCodeUpsertWithoutUserInput
    disconnect?: ParticipantCodeWhereInput | boolean
    delete?: ParticipantCodeWhereInput | boolean
    connect?: ParticipantCodeWhereUniqueInput
    update?: XOR<XOR<ParticipantCodeUpdateToOneWithWhereWithoutUserInput, ParticipantCodeUpdateWithoutUserInput>, ParticipantCodeUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutPanelistNestedInput = {
    create?: XOR<ScoreCreateWithoutPanelistInput, ScoreUncheckedCreateWithoutPanelistInput> | ScoreCreateWithoutPanelistInput[] | ScoreUncheckedCreateWithoutPanelistInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutPanelistInput | ScoreCreateOrConnectWithoutPanelistInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutPanelistInput | ScoreUpsertWithWhereUniqueWithoutPanelistInput[]
    createMany?: ScoreCreateManyPanelistInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutPanelistInput | ScoreUpdateWithWhereUniqueWithoutPanelistInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutPanelistInput | ScoreUpdateManyWithWhereWithoutPanelistInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type PanelistCodeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PanelistCodeCreateWithoutUserInput, PanelistCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: PanelistCodeCreateOrConnectWithoutUserInput
    upsert?: PanelistCodeUpsertWithoutUserInput
    disconnect?: PanelistCodeWhereInput | boolean
    delete?: PanelistCodeWhereInput | boolean
    connect?: PanelistCodeWhereUniqueInput
    update?: XOR<XOR<PanelistCodeUpdateToOneWithWhereWithoutUserInput, PanelistCodeUpdateWithoutUserInput>, PanelistCodeUncheckedUpdateWithoutUserInput>
  }

  export type ParticipantCodeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ParticipantCodeCreateWithoutUserInput, ParticipantCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParticipantCodeCreateOrConnectWithoutUserInput
    upsert?: ParticipantCodeUpsertWithoutUserInput
    disconnect?: ParticipantCodeWhereInput | boolean
    delete?: ParticipantCodeWhereInput | boolean
    connect?: ParticipantCodeWhereUniqueInput
    update?: XOR<XOR<ParticipantCodeUpdateToOneWithWhereWithoutUserInput, ParticipantCodeUpdateWithoutUserInput>, ParticipantCodeUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutOrganizedEventsInput = {
    create?: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizedEventsInput
    connect?: UserWhereUniqueInput
  }

  export type RoundCreateNestedManyWithoutEventInput = {
    create?: XOR<RoundCreateWithoutEventInput, RoundUncheckedCreateWithoutEventInput> | RoundCreateWithoutEventInput[] | RoundUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutEventInput | RoundCreateOrConnectWithoutEventInput[]
    createMany?: RoundCreateManyEventInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutEventInput = {
    create?: XOR<TeamCreateWithoutEventInput, TeamUncheckedCreateWithoutEventInput> | TeamCreateWithoutEventInput[] | TeamUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutEventInput | TeamCreateOrConnectWithoutEventInput[]
    createMany?: TeamCreateManyEventInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type PanelistCodeCreateNestedOneWithoutEventInput = {
    create?: XOR<PanelistCodeCreateWithoutEventInput, PanelistCodeUncheckedCreateWithoutEventInput>
    connectOrCreate?: PanelistCodeCreateOrConnectWithoutEventInput
    connect?: PanelistCodeWhereUniqueInput
  }

  export type ParticipantCodeCreateNestedOneWithoutEventInput = {
    create?: XOR<ParticipantCodeCreateWithoutEventInput, ParticipantCodeUncheckedCreateWithoutEventInput>
    connectOrCreate?: ParticipantCodeCreateOrConnectWithoutEventInput
    connect?: ParticipantCodeWhereUniqueInput
  }

  export type RoundUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<RoundCreateWithoutEventInput, RoundUncheckedCreateWithoutEventInput> | RoundCreateWithoutEventInput[] | RoundUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutEventInput | RoundCreateOrConnectWithoutEventInput[]
    createMany?: RoundCreateManyEventInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TeamCreateWithoutEventInput, TeamUncheckedCreateWithoutEventInput> | TeamCreateWithoutEventInput[] | TeamUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutEventInput | TeamCreateOrConnectWithoutEventInput[]
    createMany?: TeamCreateManyEventInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type PanelistCodeUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<PanelistCodeCreateWithoutEventInput, PanelistCodeUncheckedCreateWithoutEventInput>
    connectOrCreate?: PanelistCodeCreateOrConnectWithoutEventInput
    connect?: PanelistCodeWhereUniqueInput
  }

  export type ParticipantCodeUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<ParticipantCodeCreateWithoutEventInput, ParticipantCodeUncheckedCreateWithoutEventInput>
    connectOrCreate?: ParticipantCodeCreateOrConnectWithoutEventInput
    connect?: ParticipantCodeWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutOrganizedEventsNestedInput = {
    create?: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizedEventsInput
    upsert?: UserUpsertWithoutOrganizedEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizedEventsInput, UserUpdateWithoutOrganizedEventsInput>, UserUncheckedUpdateWithoutOrganizedEventsInput>
  }

  export type RoundUpdateManyWithoutEventNestedInput = {
    create?: XOR<RoundCreateWithoutEventInput, RoundUncheckedCreateWithoutEventInput> | RoundCreateWithoutEventInput[] | RoundUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutEventInput | RoundCreateOrConnectWithoutEventInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutEventInput | RoundUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: RoundCreateManyEventInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutEventInput | RoundUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutEventInput | RoundUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutEventNestedInput = {
    create?: XOR<TeamCreateWithoutEventInput, TeamUncheckedCreateWithoutEventInput> | TeamCreateWithoutEventInput[] | TeamUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutEventInput | TeamCreateOrConnectWithoutEventInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutEventInput | TeamUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TeamCreateManyEventInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutEventInput | TeamUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutEventInput | TeamUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type PanelistCodeUpdateOneWithoutEventNestedInput = {
    create?: XOR<PanelistCodeCreateWithoutEventInput, PanelistCodeUncheckedCreateWithoutEventInput>
    connectOrCreate?: PanelistCodeCreateOrConnectWithoutEventInput
    upsert?: PanelistCodeUpsertWithoutEventInput
    disconnect?: PanelistCodeWhereInput | boolean
    delete?: PanelistCodeWhereInput | boolean
    connect?: PanelistCodeWhereUniqueInput
    update?: XOR<XOR<PanelistCodeUpdateToOneWithWhereWithoutEventInput, PanelistCodeUpdateWithoutEventInput>, PanelistCodeUncheckedUpdateWithoutEventInput>
  }

  export type ParticipantCodeUpdateOneWithoutEventNestedInput = {
    create?: XOR<ParticipantCodeCreateWithoutEventInput, ParticipantCodeUncheckedCreateWithoutEventInput>
    connectOrCreate?: ParticipantCodeCreateOrConnectWithoutEventInput
    upsert?: ParticipantCodeUpsertWithoutEventInput
    disconnect?: ParticipantCodeWhereInput | boolean
    delete?: ParticipantCodeWhereInput | boolean
    connect?: ParticipantCodeWhereUniqueInput
    update?: XOR<XOR<ParticipantCodeUpdateToOneWithWhereWithoutEventInput, ParticipantCodeUpdateWithoutEventInput>, ParticipantCodeUncheckedUpdateWithoutEventInput>
  }

  export type RoundUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<RoundCreateWithoutEventInput, RoundUncheckedCreateWithoutEventInput> | RoundCreateWithoutEventInput[] | RoundUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutEventInput | RoundCreateOrConnectWithoutEventInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutEventInput | RoundUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: RoundCreateManyEventInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutEventInput | RoundUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutEventInput | RoundUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TeamCreateWithoutEventInput, TeamUncheckedCreateWithoutEventInput> | TeamCreateWithoutEventInput[] | TeamUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutEventInput | TeamCreateOrConnectWithoutEventInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutEventInput | TeamUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TeamCreateManyEventInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutEventInput | TeamUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutEventInput | TeamUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type PanelistCodeUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<PanelistCodeCreateWithoutEventInput, PanelistCodeUncheckedCreateWithoutEventInput>
    connectOrCreate?: PanelistCodeCreateOrConnectWithoutEventInput
    upsert?: PanelistCodeUpsertWithoutEventInput
    disconnect?: PanelistCodeWhereInput | boolean
    delete?: PanelistCodeWhereInput | boolean
    connect?: PanelistCodeWhereUniqueInput
    update?: XOR<XOR<PanelistCodeUpdateToOneWithWhereWithoutEventInput, PanelistCodeUpdateWithoutEventInput>, PanelistCodeUncheckedUpdateWithoutEventInput>
  }

  export type ParticipantCodeUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<ParticipantCodeCreateWithoutEventInput, ParticipantCodeUncheckedCreateWithoutEventInput>
    connectOrCreate?: ParticipantCodeCreateOrConnectWithoutEventInput
    upsert?: ParticipantCodeUpsertWithoutEventInput
    disconnect?: ParticipantCodeWhereInput | boolean
    delete?: ParticipantCodeWhereInput | boolean
    connect?: ParticipantCodeWhereUniqueInput
    update?: XOR<XOR<ParticipantCodeUpdateToOneWithWhereWithoutEventInput, ParticipantCodeUpdateWithoutEventInput>, ParticipantCodeUncheckedUpdateWithoutEventInput>
  }

  export type EventCreateNestedOneWithoutRoundsInput = {
    create?: XOR<EventCreateWithoutRoundsInput, EventUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRoundsInput
    connect?: EventWhereUniqueInput
  }

  export type ScoreCreateNestedManyWithoutRoundInput = {
    create?: XOR<ScoreCreateWithoutRoundInput, ScoreUncheckedCreateWithoutRoundInput> | ScoreCreateWithoutRoundInput[] | ScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutRoundInput | ScoreCreateOrConnectWithoutRoundInput[]
    createMany?: ScoreCreateManyRoundInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<ScoreCreateWithoutRoundInput, ScoreUncheckedCreateWithoutRoundInput> | ScoreCreateWithoutRoundInput[] | ScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutRoundInput | ScoreCreateOrConnectWithoutRoundInput[]
    createMany?: ScoreCreateManyRoundInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: XOR<EventCreateWithoutRoundsInput, EventUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRoundsInput
    upsert?: EventUpsertWithoutRoundsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutRoundsInput, EventUpdateWithoutRoundsInput>, EventUncheckedUpdateWithoutRoundsInput>
  }

  export type ScoreUpdateManyWithoutRoundNestedInput = {
    create?: XOR<ScoreCreateWithoutRoundInput, ScoreUncheckedCreateWithoutRoundInput> | ScoreCreateWithoutRoundInput[] | ScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutRoundInput | ScoreCreateOrConnectWithoutRoundInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutRoundInput | ScoreUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: ScoreCreateManyRoundInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutRoundInput | ScoreUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutRoundInput | ScoreUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<ScoreCreateWithoutRoundInput, ScoreUncheckedCreateWithoutRoundInput> | ScoreCreateWithoutRoundInput[] | ScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutRoundInput | ScoreCreateOrConnectWithoutRoundInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutRoundInput | ScoreUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: ScoreCreateManyRoundInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutRoundInput | ScoreUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutRoundInput | ScoreUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutTeamsInput = {
    create?: XOR<EventCreateWithoutTeamsInput, EventUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTeamsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ScoreCreateNestedManyWithoutTeamInput = {
    create?: XOR<ScoreCreateWithoutTeamInput, ScoreUncheckedCreateWithoutTeamInput> | ScoreCreateWithoutTeamInput[] | ScoreUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutTeamInput | ScoreCreateOrConnectWithoutTeamInput[]
    createMany?: ScoreCreateManyTeamInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ScoreCreateWithoutTeamInput, ScoreUncheckedCreateWithoutTeamInput> | ScoreCreateWithoutTeamInput[] | ScoreUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutTeamInput | ScoreCreateOrConnectWithoutTeamInput[]
    createMany?: ScoreCreateManyTeamInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<EventCreateWithoutTeamsInput, EventUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTeamsInput
    upsert?: EventUpsertWithoutTeamsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTeamsInput, EventUpdateWithoutTeamsInput>, EventUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ScoreUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ScoreCreateWithoutTeamInput, ScoreUncheckedCreateWithoutTeamInput> | ScoreCreateWithoutTeamInput[] | ScoreUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutTeamInput | ScoreCreateOrConnectWithoutTeamInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutTeamInput | ScoreUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ScoreCreateManyTeamInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutTeamInput | ScoreUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutTeamInput | ScoreUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ScoreCreateWithoutTeamInput, ScoreUncheckedCreateWithoutTeamInput> | ScoreCreateWithoutTeamInput[] | ScoreUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutTeamInput | ScoreCreateOrConnectWithoutTeamInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutTeamInput | ScoreUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ScoreCreateManyTeamInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutTeamInput | ScoreUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutTeamInput | ScoreUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type RoundCreateNestedOneWithoutScoresInput = {
    create?: XOR<RoundCreateWithoutScoresInput, RoundUncheckedCreateWithoutScoresInput>
    connectOrCreate?: RoundCreateOrConnectWithoutScoresInput
    connect?: RoundWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutScoresInput = {
    create?: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoresInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutScoresInput = {
    create?: XOR<TeamCreateWithoutScoresInput, TeamUncheckedCreateWithoutScoresInput>
    connectOrCreate?: TeamCreateOrConnectWithoutScoresInput
    connect?: TeamWhereUniqueInput
  }

  export type RoundUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<RoundCreateWithoutScoresInput, RoundUncheckedCreateWithoutScoresInput>
    connectOrCreate?: RoundCreateOrConnectWithoutScoresInput
    upsert?: RoundUpsertWithoutScoresInput
    connect?: RoundWhereUniqueInput
    update?: XOR<XOR<RoundUpdateToOneWithWhereWithoutScoresInput, RoundUpdateWithoutScoresInput>, RoundUncheckedUpdateWithoutScoresInput>
  }

  export type UserUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoresInput
    upsert?: UserUpsertWithoutScoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScoresInput, UserUpdateWithoutScoresInput>, UserUncheckedUpdateWithoutScoresInput>
  }

  export type TeamUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<TeamCreateWithoutScoresInput, TeamUncheckedCreateWithoutScoresInput>
    connectOrCreate?: TeamCreateOrConnectWithoutScoresInput
    upsert?: TeamUpsertWithoutScoresInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutScoresInput, TeamUpdateWithoutScoresInput>, TeamUncheckedUpdateWithoutScoresInput>
  }

  export type EventCreateNestedOneWithoutPanelistCodeInput = {
    create?: XOR<EventCreateWithoutPanelistCodeInput, EventUncheckedCreateWithoutPanelistCodeInput>
    connectOrCreate?: EventCreateOrConnectWithoutPanelistCodeInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPanelistCodeInput = {
    create?: XOR<UserCreateWithoutPanelistCodeInput, UserUncheckedCreateWithoutPanelistCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutPanelistCodeInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutPanelistCodeNestedInput = {
    create?: XOR<EventCreateWithoutPanelistCodeInput, EventUncheckedCreateWithoutPanelistCodeInput>
    connectOrCreate?: EventCreateOrConnectWithoutPanelistCodeInput
    upsert?: EventUpsertWithoutPanelistCodeInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutPanelistCodeInput, EventUpdateWithoutPanelistCodeInput>, EventUncheckedUpdateWithoutPanelistCodeInput>
  }

  export type UserUpdateOneRequiredWithoutPanelistCodeNestedInput = {
    create?: XOR<UserCreateWithoutPanelistCodeInput, UserUncheckedCreateWithoutPanelistCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutPanelistCodeInput
    upsert?: UserUpsertWithoutPanelistCodeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPanelistCodeInput, UserUpdateWithoutPanelistCodeInput>, UserUncheckedUpdateWithoutPanelistCodeInput>
  }

  export type EventCreateNestedOneWithoutParticipantCodeInput = {
    create?: XOR<EventCreateWithoutParticipantCodeInput, EventUncheckedCreateWithoutParticipantCodeInput>
    connectOrCreate?: EventCreateOrConnectWithoutParticipantCodeInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParticipantCodeInput = {
    create?: XOR<UserCreateWithoutParticipantCodeInput, UserUncheckedCreateWithoutParticipantCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantCodeInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutParticipantCodeNestedInput = {
    create?: XOR<EventCreateWithoutParticipantCodeInput, EventUncheckedCreateWithoutParticipantCodeInput>
    connectOrCreate?: EventCreateOrConnectWithoutParticipantCodeInput
    upsert?: EventUpsertWithoutParticipantCodeInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutParticipantCodeInput, EventUpdateWithoutParticipantCodeInput>, EventUncheckedUpdateWithoutParticipantCodeInput>
  }

  export type UserUpdateOneRequiredWithoutParticipantCodeNestedInput = {
    create?: XOR<UserCreateWithoutParticipantCodeInput, UserUncheckedCreateWithoutParticipantCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantCodeInput
    upsert?: UserUpsertWithoutParticipantCodeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipantCodeInput, UserUpdateWithoutParticipantCodeInput>, UserUncheckedUpdateWithoutParticipantCodeInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EventCreateWithoutOrganizerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    rounds?: RoundCreateNestedManyWithoutEventInput
    teams?: TeamCreateNestedManyWithoutEventInput
    panelistCode?: PanelistCodeCreateNestedOneWithoutEventInput
    participantCode?: ParticipantCodeCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    rounds?: RoundUncheckedCreateNestedManyWithoutEventInput
    teams?: TeamUncheckedCreateNestedManyWithoutEventInput
    panelistCode?: PanelistCodeUncheckedCreateNestedOneWithoutEventInput
    participantCode?: ParticipantCodeUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutParticipantsInput = {
    id?: string
    name: string
    event: EventCreateNestedOneWithoutTeamsInput
    scores?: ScoreCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutParticipantsInput = {
    id?: string
    name: string
    eventId: string
    scores?: ScoreUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutParticipantsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutParticipantsInput, TeamUncheckedCreateWithoutParticipantsInput>
  }

  export type ScoreCreateWithoutPanelistInput = {
    id?: string
    marks: number
    remarks?: string | null
    round: RoundCreateNestedOneWithoutScoresInput
    team: TeamCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateWithoutPanelistInput = {
    id?: string
    marks: number
    remarks?: string | null
    roundId: string
    teamId: string
  }

  export type ScoreCreateOrConnectWithoutPanelistInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutPanelistInput, ScoreUncheckedCreateWithoutPanelistInput>
  }

  export type ScoreCreateManyPanelistInputEnvelope = {
    data: ScoreCreateManyPanelistInput | ScoreCreateManyPanelistInput[]
    skipDuplicates?: boolean
  }

  export type PanelistCodeCreateWithoutUserInput = {
    id?: string
    code: string
    event: EventCreateNestedOneWithoutPanelistCodeInput
  }

  export type PanelistCodeUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    eventId: string
  }

  export type PanelistCodeCreateOrConnectWithoutUserInput = {
    where: PanelistCodeWhereUniqueInput
    create: XOR<PanelistCodeCreateWithoutUserInput, PanelistCodeUncheckedCreateWithoutUserInput>
  }

  export type ParticipantCodeCreateWithoutUserInput = {
    id?: string
    code: string
    event: EventCreateNestedOneWithoutParticipantCodeInput
  }

  export type ParticipantCodeUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    eventId: string
  }

  export type ParticipantCodeCreateOrConnectWithoutUserInput = {
    where: ParticipantCodeWhereUniqueInput
    create: XOR<ParticipantCodeCreateWithoutUserInput, ParticipantCodeUncheckedCreateWithoutUserInput>
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    organizerId?: IntFilter<"Event"> | number
  }

  export type TeamUpsertWithoutParticipantsInput = {
    update: XOR<TeamUpdateWithoutParticipantsInput, TeamUncheckedUpdateWithoutParticipantsInput>
    create: XOR<TeamCreateWithoutParticipantsInput, TeamUncheckedCreateWithoutParticipantsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutParticipantsInput, TeamUncheckedUpdateWithoutParticipantsInput>
  }

  export type TeamUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutTeamsNestedInput
    scores?: ScoreUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    scores?: ScoreUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type ScoreUpsertWithWhereUniqueWithoutPanelistInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutPanelistInput, ScoreUncheckedUpdateWithoutPanelistInput>
    create: XOR<ScoreCreateWithoutPanelistInput, ScoreUncheckedCreateWithoutPanelistInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutPanelistInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutPanelistInput, ScoreUncheckedUpdateWithoutPanelistInput>
  }

  export type ScoreUpdateManyWithWhereWithoutPanelistInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutPanelistInput>
  }

  export type ScoreScalarWhereInput = {
    AND?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    OR?: ScoreScalarWhereInput[]
    NOT?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    id?: StringFilter<"Score"> | string
    marks?: IntFilter<"Score"> | number
    remarks?: StringNullableFilter<"Score"> | string | null
    roundId?: StringFilter<"Score"> | string
    panelistId?: IntFilter<"Score"> | number
    teamId?: StringFilter<"Score"> | string
  }

  export type PanelistCodeUpsertWithoutUserInput = {
    update: XOR<PanelistCodeUpdateWithoutUserInput, PanelistCodeUncheckedUpdateWithoutUserInput>
    create: XOR<PanelistCodeCreateWithoutUserInput, PanelistCodeUncheckedCreateWithoutUserInput>
    where?: PanelistCodeWhereInput
  }

  export type PanelistCodeUpdateToOneWithWhereWithoutUserInput = {
    where?: PanelistCodeWhereInput
    data: XOR<PanelistCodeUpdateWithoutUserInput, PanelistCodeUncheckedUpdateWithoutUserInput>
  }

  export type PanelistCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutPanelistCodeNestedInput
  }

  export type PanelistCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantCodeUpsertWithoutUserInput = {
    update: XOR<ParticipantCodeUpdateWithoutUserInput, ParticipantCodeUncheckedUpdateWithoutUserInput>
    create: XOR<ParticipantCodeCreateWithoutUserInput, ParticipantCodeUncheckedCreateWithoutUserInput>
    where?: ParticipantCodeWhereInput
  }

  export type ParticipantCodeUpdateToOneWithWhereWithoutUserInput = {
    where?: ParticipantCodeWhereInput
    data: XOR<ParticipantCodeUpdateWithoutUserInput, ParticipantCodeUncheckedUpdateWithoutUserInput>
  }

  export type ParticipantCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutParticipantCodeNestedInput
  }

  export type ParticipantCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutOrganizedEventsInput = {
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
    team?: TeamCreateNestedOneWithoutParticipantsInput
    scores?: ScoreCreateNestedManyWithoutPanelistInput
    PanelistCode?: PanelistCodeCreateNestedOneWithoutUserInput
    ParticipantCode?: ParticipantCodeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizedEventsInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
    teamId?: string | null
    scores?: ScoreUncheckedCreateNestedManyWithoutPanelistInput
    PanelistCode?: PanelistCodeUncheckedCreateNestedOneWithoutUserInput
    ParticipantCode?: ParticipantCodeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
  }

  export type RoundCreateWithoutEventInput = {
    id?: string
    name: string
    order: number
    scores?: ScoreCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutEventInput = {
    id?: string
    name: string
    order: number
    scores?: ScoreUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutEventInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutEventInput, RoundUncheckedCreateWithoutEventInput>
  }

  export type RoundCreateManyEventInputEnvelope = {
    data: RoundCreateManyEventInput | RoundCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutEventInput = {
    id?: string
    name: string
    participants?: UserCreateNestedManyWithoutTeamInput
    scores?: ScoreCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutEventInput = {
    id?: string
    name: string
    participants?: UserUncheckedCreateNestedManyWithoutTeamInput
    scores?: ScoreUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutEventInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutEventInput, TeamUncheckedCreateWithoutEventInput>
  }

  export type TeamCreateManyEventInputEnvelope = {
    data: TeamCreateManyEventInput | TeamCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type PanelistCodeCreateWithoutEventInput = {
    id?: string
    code: string
    user: UserCreateNestedOneWithoutPanelistCodeInput
  }

  export type PanelistCodeUncheckedCreateWithoutEventInput = {
    id?: string
    code: string
    userId: number
  }

  export type PanelistCodeCreateOrConnectWithoutEventInput = {
    where: PanelistCodeWhereUniqueInput
    create: XOR<PanelistCodeCreateWithoutEventInput, PanelistCodeUncheckedCreateWithoutEventInput>
  }

  export type ParticipantCodeCreateWithoutEventInput = {
    id?: string
    code: string
    user: UserCreateNestedOneWithoutParticipantCodeInput
  }

  export type ParticipantCodeUncheckedCreateWithoutEventInput = {
    id?: string
    code: string
    userId: number
  }

  export type ParticipantCodeCreateOrConnectWithoutEventInput = {
    where: ParticipantCodeWhereUniqueInput
    create: XOR<ParticipantCodeCreateWithoutEventInput, ParticipantCodeUncheckedCreateWithoutEventInput>
  }

  export type UserUpsertWithoutOrganizedEventsInput = {
    update: XOR<UserUpdateWithoutOrganizedEventsInput, UserUncheckedUpdateWithoutOrganizedEventsInput>
    create: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizedEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizedEventsInput, UserUncheckedUpdateWithoutOrganizedEventsInput>
  }

  export type UserUpdateWithoutOrganizedEventsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    team?: TeamUpdateOneWithoutParticipantsNestedInput
    scores?: ScoreUpdateManyWithoutPanelistNestedInput
    PanelistCode?: PanelistCodeUpdateOneWithoutUserNestedInput
    ParticipantCode?: ParticipantCodeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizedEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    scores?: ScoreUncheckedUpdateManyWithoutPanelistNestedInput
    PanelistCode?: PanelistCodeUncheckedUpdateOneWithoutUserNestedInput
    ParticipantCode?: ParticipantCodeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RoundUpsertWithWhereUniqueWithoutEventInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutEventInput, RoundUncheckedUpdateWithoutEventInput>
    create: XOR<RoundCreateWithoutEventInput, RoundUncheckedCreateWithoutEventInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutEventInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutEventInput, RoundUncheckedUpdateWithoutEventInput>
  }

  export type RoundUpdateManyWithWhereWithoutEventInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutEventInput>
  }

  export type RoundScalarWhereInput = {
    AND?: RoundScalarWhereInput | RoundScalarWhereInput[]
    OR?: RoundScalarWhereInput[]
    NOT?: RoundScalarWhereInput | RoundScalarWhereInput[]
    id?: StringFilter<"Round"> | string
    name?: StringFilter<"Round"> | string
    order?: IntFilter<"Round"> | number
    eventId?: StringFilter<"Round"> | string
  }

  export type TeamUpsertWithWhereUniqueWithoutEventInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutEventInput, TeamUncheckedUpdateWithoutEventInput>
    create: XOR<TeamCreateWithoutEventInput, TeamUncheckedCreateWithoutEventInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutEventInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutEventInput, TeamUncheckedUpdateWithoutEventInput>
  }

  export type TeamUpdateManyWithWhereWithoutEventInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutEventInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    eventId?: StringFilter<"Team"> | string
  }

  export type PanelistCodeUpsertWithoutEventInput = {
    update: XOR<PanelistCodeUpdateWithoutEventInput, PanelistCodeUncheckedUpdateWithoutEventInput>
    create: XOR<PanelistCodeCreateWithoutEventInput, PanelistCodeUncheckedCreateWithoutEventInput>
    where?: PanelistCodeWhereInput
  }

  export type PanelistCodeUpdateToOneWithWhereWithoutEventInput = {
    where?: PanelistCodeWhereInput
    data: XOR<PanelistCodeUpdateWithoutEventInput, PanelistCodeUncheckedUpdateWithoutEventInput>
  }

  export type PanelistCodeUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPanelistCodeNestedInput
  }

  export type PanelistCodeUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantCodeUpsertWithoutEventInput = {
    update: XOR<ParticipantCodeUpdateWithoutEventInput, ParticipantCodeUncheckedUpdateWithoutEventInput>
    create: XOR<ParticipantCodeCreateWithoutEventInput, ParticipantCodeUncheckedCreateWithoutEventInput>
    where?: ParticipantCodeWhereInput
  }

  export type ParticipantCodeUpdateToOneWithWhereWithoutEventInput = {
    where?: ParticipantCodeWhereInput
    data: XOR<ParticipantCodeUpdateWithoutEventInput, ParticipantCodeUncheckedUpdateWithoutEventInput>
  }

  export type ParticipantCodeUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutParticipantCodeNestedInput
  }

  export type ParticipantCodeUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type EventCreateWithoutRoundsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    teams?: TeamCreateNestedManyWithoutEventInput
    panelistCode?: PanelistCodeCreateNestedOneWithoutEventInput
    participantCode?: ParticipantCodeCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutRoundsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organizerId: number
    teams?: TeamUncheckedCreateNestedManyWithoutEventInput
    panelistCode?: PanelistCodeUncheckedCreateNestedOneWithoutEventInput
    participantCode?: ParticipantCodeUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutRoundsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRoundsInput, EventUncheckedCreateWithoutRoundsInput>
  }

  export type ScoreCreateWithoutRoundInput = {
    id?: string
    marks: number
    remarks?: string | null
    panelist: UserCreateNestedOneWithoutScoresInput
    team: TeamCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateWithoutRoundInput = {
    id?: string
    marks: number
    remarks?: string | null
    panelistId: number
    teamId: string
  }

  export type ScoreCreateOrConnectWithoutRoundInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutRoundInput, ScoreUncheckedCreateWithoutRoundInput>
  }

  export type ScoreCreateManyRoundInputEnvelope = {
    data: ScoreCreateManyRoundInput | ScoreCreateManyRoundInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutRoundsInput = {
    update: XOR<EventUpdateWithoutRoundsInput, EventUncheckedUpdateWithoutRoundsInput>
    create: XOR<EventCreateWithoutRoundsInput, EventUncheckedCreateWithoutRoundsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutRoundsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutRoundsInput, EventUncheckedUpdateWithoutRoundsInput>
  }

  export type EventUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    teams?: TeamUpdateManyWithoutEventNestedInput
    panelistCode?: PanelistCodeUpdateOneWithoutEventNestedInput
    participantCode?: ParticipantCodeUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: IntFieldUpdateOperationsInput | number
    teams?: TeamUncheckedUpdateManyWithoutEventNestedInput
    panelistCode?: PanelistCodeUncheckedUpdateOneWithoutEventNestedInput
    participantCode?: ParticipantCodeUncheckedUpdateOneWithoutEventNestedInput
  }

  export type ScoreUpsertWithWhereUniqueWithoutRoundInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutRoundInput, ScoreUncheckedUpdateWithoutRoundInput>
    create: XOR<ScoreCreateWithoutRoundInput, ScoreUncheckedCreateWithoutRoundInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutRoundInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutRoundInput, ScoreUncheckedUpdateWithoutRoundInput>
  }

  export type ScoreUpdateManyWithWhereWithoutRoundInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutRoundInput>
  }

  export type EventCreateWithoutTeamsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    rounds?: RoundCreateNestedManyWithoutEventInput
    panelistCode?: PanelistCodeCreateNestedOneWithoutEventInput
    participantCode?: ParticipantCodeCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTeamsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organizerId: number
    rounds?: RoundUncheckedCreateNestedManyWithoutEventInput
    panelistCode?: PanelistCodeUncheckedCreateNestedOneWithoutEventInput
    participantCode?: ParticipantCodeUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTeamsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTeamsInput, EventUncheckedCreateWithoutTeamsInput>
  }

  export type UserCreateWithoutTeamInput = {
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    scores?: ScoreCreateNestedManyWithoutPanelistInput
    PanelistCode?: PanelistCodeCreateNestedOneWithoutUserInput
    ParticipantCode?: ParticipantCodeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    scores?: ScoreUncheckedCreateNestedManyWithoutPanelistInput
    PanelistCode?: PanelistCodeUncheckedCreateNestedOneWithoutUserInput
    ParticipantCode?: ParticipantCodeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserCreateManyTeamInputEnvelope = {
    data: UserCreateManyTeamInput | UserCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type ScoreCreateWithoutTeamInput = {
    id?: string
    marks: number
    remarks?: string | null
    round: RoundCreateNestedOneWithoutScoresInput
    panelist: UserCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateWithoutTeamInput = {
    id?: string
    marks: number
    remarks?: string | null
    roundId: string
    panelistId: number
  }

  export type ScoreCreateOrConnectWithoutTeamInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutTeamInput, ScoreUncheckedCreateWithoutTeamInput>
  }

  export type ScoreCreateManyTeamInputEnvelope = {
    data: ScoreCreateManyTeamInput | ScoreCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutTeamsInput = {
    update: XOR<EventUpdateWithoutTeamsInput, EventUncheckedUpdateWithoutTeamsInput>
    create: XOR<EventCreateWithoutTeamsInput, EventUncheckedCreateWithoutTeamsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTeamsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTeamsInput, EventUncheckedUpdateWithoutTeamsInput>
  }

  export type EventUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    rounds?: RoundUpdateManyWithoutEventNestedInput
    panelistCode?: PanelistCodeUpdateOneWithoutEventNestedInput
    participantCode?: ParticipantCodeUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: IntFieldUpdateOperationsInput | number
    rounds?: RoundUncheckedUpdateManyWithoutEventNestedInput
    panelistCode?: PanelistCodeUncheckedUpdateOneWithoutEventNestedInput
    participantCode?: ParticipantCodeUncheckedUpdateOneWithoutEventNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isPublic?: BoolFilter<"User"> | boolean
    storageUrl?: StringNullableFilter<"User"> | string | null
    teamId?: StringNullableFilter<"User"> | string | null
  }

  export type ScoreUpsertWithWhereUniqueWithoutTeamInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutTeamInput, ScoreUncheckedUpdateWithoutTeamInput>
    create: XOR<ScoreCreateWithoutTeamInput, ScoreUncheckedCreateWithoutTeamInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutTeamInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutTeamInput, ScoreUncheckedUpdateWithoutTeamInput>
  }

  export type ScoreUpdateManyWithWhereWithoutTeamInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutTeamInput>
  }

  export type RoundCreateWithoutScoresInput = {
    id?: string
    name: string
    order: number
    event: EventCreateNestedOneWithoutRoundsInput
  }

  export type RoundUncheckedCreateWithoutScoresInput = {
    id?: string
    name: string
    order: number
    eventId: string
  }

  export type RoundCreateOrConnectWithoutScoresInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutScoresInput, RoundUncheckedCreateWithoutScoresInput>
  }

  export type UserCreateWithoutScoresInput = {
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    team?: TeamCreateNestedOneWithoutParticipantsInput
    PanelistCode?: PanelistCodeCreateNestedOneWithoutUserInput
    ParticipantCode?: ParticipantCodeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutScoresInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
    teamId?: string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    PanelistCode?: PanelistCodeUncheckedCreateNestedOneWithoutUserInput
    ParticipantCode?: ParticipantCodeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutScoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
  }

  export type TeamCreateWithoutScoresInput = {
    id?: string
    name: string
    event: EventCreateNestedOneWithoutTeamsInput
    participants?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutScoresInput = {
    id?: string
    name: string
    eventId: string
    participants?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutScoresInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutScoresInput, TeamUncheckedCreateWithoutScoresInput>
  }

  export type RoundUpsertWithoutScoresInput = {
    update: XOR<RoundUpdateWithoutScoresInput, RoundUncheckedUpdateWithoutScoresInput>
    create: XOR<RoundCreateWithoutScoresInput, RoundUncheckedCreateWithoutScoresInput>
    where?: RoundWhereInput
  }

  export type RoundUpdateToOneWithWhereWithoutScoresInput = {
    where?: RoundWhereInput
    data: XOR<RoundUpdateWithoutScoresInput, RoundUncheckedUpdateWithoutScoresInput>
  }

  export type RoundUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneRequiredWithoutRoundsNestedInput
  }

  export type RoundUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutScoresInput = {
    update: XOR<UserUpdateWithoutScoresInput, UserUncheckedUpdateWithoutScoresInput>
    create: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScoresInput, UserUncheckedUpdateWithoutScoresInput>
  }

  export type UserUpdateWithoutScoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    team?: TeamUpdateOneWithoutParticipantsNestedInput
    PanelistCode?: PanelistCodeUpdateOneWithoutUserNestedInput
    ParticipantCode?: ParticipantCodeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutScoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    PanelistCode?: PanelistCodeUncheckedUpdateOneWithoutUserNestedInput
    ParticipantCode?: ParticipantCodeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TeamUpsertWithoutScoresInput = {
    update: XOR<TeamUpdateWithoutScoresInput, TeamUncheckedUpdateWithoutScoresInput>
    create: XOR<TeamCreateWithoutScoresInput, TeamUncheckedCreateWithoutScoresInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutScoresInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutScoresInput, TeamUncheckedUpdateWithoutScoresInput>
  }

  export type TeamUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutTeamsNestedInput
    participants?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    participants?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type EventCreateWithoutPanelistCodeInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    rounds?: RoundCreateNestedManyWithoutEventInput
    teams?: TeamCreateNestedManyWithoutEventInput
    participantCode?: ParticipantCodeCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutPanelistCodeInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organizerId: number
    rounds?: RoundUncheckedCreateNestedManyWithoutEventInput
    teams?: TeamUncheckedCreateNestedManyWithoutEventInput
    participantCode?: ParticipantCodeUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutPanelistCodeInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPanelistCodeInput, EventUncheckedCreateWithoutPanelistCodeInput>
  }

  export type UserCreateWithoutPanelistCodeInput = {
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    team?: TeamCreateNestedOneWithoutParticipantsInput
    scores?: ScoreCreateNestedManyWithoutPanelistInput
    ParticipantCode?: ParticipantCodeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPanelistCodeInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
    teamId?: string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    scores?: ScoreUncheckedCreateNestedManyWithoutPanelistInput
    ParticipantCode?: ParticipantCodeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPanelistCodeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPanelistCodeInput, UserUncheckedCreateWithoutPanelistCodeInput>
  }

  export type EventUpsertWithoutPanelistCodeInput = {
    update: XOR<EventUpdateWithoutPanelistCodeInput, EventUncheckedUpdateWithoutPanelistCodeInput>
    create: XOR<EventCreateWithoutPanelistCodeInput, EventUncheckedCreateWithoutPanelistCodeInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutPanelistCodeInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutPanelistCodeInput, EventUncheckedUpdateWithoutPanelistCodeInput>
  }

  export type EventUpdateWithoutPanelistCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    rounds?: RoundUpdateManyWithoutEventNestedInput
    teams?: TeamUpdateManyWithoutEventNestedInput
    participantCode?: ParticipantCodeUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutPanelistCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: IntFieldUpdateOperationsInput | number
    rounds?: RoundUncheckedUpdateManyWithoutEventNestedInput
    teams?: TeamUncheckedUpdateManyWithoutEventNestedInput
    participantCode?: ParticipantCodeUncheckedUpdateOneWithoutEventNestedInput
  }

  export type UserUpsertWithoutPanelistCodeInput = {
    update: XOR<UserUpdateWithoutPanelistCodeInput, UserUncheckedUpdateWithoutPanelistCodeInput>
    create: XOR<UserCreateWithoutPanelistCodeInput, UserUncheckedCreateWithoutPanelistCodeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPanelistCodeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPanelistCodeInput, UserUncheckedUpdateWithoutPanelistCodeInput>
  }

  export type UserUpdateWithoutPanelistCodeInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    team?: TeamUpdateOneWithoutParticipantsNestedInput
    scores?: ScoreUpdateManyWithoutPanelistNestedInput
    ParticipantCode?: ParticipantCodeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPanelistCodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutPanelistNestedInput
    ParticipantCode?: ParticipantCodeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type EventCreateWithoutParticipantCodeInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    rounds?: RoundCreateNestedManyWithoutEventInput
    teams?: TeamCreateNestedManyWithoutEventInput
    panelistCode?: PanelistCodeCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutParticipantCodeInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organizerId: number
    rounds?: RoundUncheckedCreateNestedManyWithoutEventInput
    teams?: TeamUncheckedCreateNestedManyWithoutEventInput
    panelistCode?: PanelistCodeUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutParticipantCodeInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutParticipantCodeInput, EventUncheckedCreateWithoutParticipantCodeInput>
  }

  export type UserCreateWithoutParticipantCodeInput = {
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    team?: TeamCreateNestedOneWithoutParticipantsInput
    scores?: ScoreCreateNestedManyWithoutPanelistInput
    PanelistCode?: PanelistCodeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipantCodeInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
    teamId?: string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    scores?: ScoreUncheckedCreateNestedManyWithoutPanelistInput
    PanelistCode?: PanelistCodeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipantCodeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipantCodeInput, UserUncheckedCreateWithoutParticipantCodeInput>
  }

  export type EventUpsertWithoutParticipantCodeInput = {
    update: XOR<EventUpdateWithoutParticipantCodeInput, EventUncheckedUpdateWithoutParticipantCodeInput>
    create: XOR<EventCreateWithoutParticipantCodeInput, EventUncheckedCreateWithoutParticipantCodeInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutParticipantCodeInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutParticipantCodeInput, EventUncheckedUpdateWithoutParticipantCodeInput>
  }

  export type EventUpdateWithoutParticipantCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    rounds?: RoundUpdateManyWithoutEventNestedInput
    teams?: TeamUpdateManyWithoutEventNestedInput
    panelistCode?: PanelistCodeUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutParticipantCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: IntFieldUpdateOperationsInput | number
    rounds?: RoundUncheckedUpdateManyWithoutEventNestedInput
    teams?: TeamUncheckedUpdateManyWithoutEventNestedInput
    panelistCode?: PanelistCodeUncheckedUpdateOneWithoutEventNestedInput
  }

  export type UserUpsertWithoutParticipantCodeInput = {
    update: XOR<UserUpdateWithoutParticipantCodeInput, UserUncheckedUpdateWithoutParticipantCodeInput>
    create: XOR<UserCreateWithoutParticipantCodeInput, UserUncheckedCreateWithoutParticipantCodeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipantCodeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipantCodeInput, UserUncheckedUpdateWithoutParticipantCodeInput>
  }

  export type UserUpdateWithoutParticipantCodeInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    team?: TeamUpdateOneWithoutParticipantsNestedInput
    scores?: ScoreUpdateManyWithoutPanelistNestedInput
    PanelistCode?: PanelistCodeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipantCodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutPanelistNestedInput
    PanelistCode?: PanelistCodeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type EventCreateManyOrganizerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ScoreCreateManyPanelistInput = {
    id?: string
    marks: number
    remarks?: string | null
    roundId: string
    teamId: string
  }

  export type EventUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: RoundUpdateManyWithoutEventNestedInput
    teams?: TeamUpdateManyWithoutEventNestedInput
    panelistCode?: PanelistCodeUpdateOneWithoutEventNestedInput
    participantCode?: ParticipantCodeUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: RoundUncheckedUpdateManyWithoutEventNestedInput
    teams?: TeamUncheckedUpdateManyWithoutEventNestedInput
    panelistCode?: PanelistCodeUncheckedUpdateOneWithoutEventNestedInput
    participantCode?: ParticipantCodeUncheckedUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUpdateWithoutPanelistInput = {
    id?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    round?: RoundUpdateOneRequiredWithoutScoresNestedInput
    team?: TeamUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateWithoutPanelistInput = {
    id?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    roundId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreUncheckedUpdateManyWithoutPanelistInput = {
    id?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    roundId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type RoundCreateManyEventInput = {
    id?: string
    name: string
    order: number
  }

  export type TeamCreateManyEventInput = {
    id?: string
    name: string
  }

  export type RoundUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    scores?: ScoreUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    scores?: ScoreUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TeamUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    participants?: UserUpdateManyWithoutTeamNestedInput
    scores?: ScoreUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    participants?: UserUncheckedUpdateManyWithoutTeamNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreCreateManyRoundInput = {
    id?: string
    marks: number
    remarks?: string | null
    panelistId: number
    teamId: string
  }

  export type ScoreUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    panelist?: UserUpdateOneRequiredWithoutScoresNestedInput
    team?: TeamUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    panelistId?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreUncheckedUpdateManyWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    panelistId?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyTeamInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    isPublic?: boolean
    storageUrl?: string | null
  }

  export type ScoreCreateManyTeamInput = {
    id?: string
    marks: number
    remarks?: string | null
    roundId: string
    panelistId: number
  }

  export type UserUpdateWithoutTeamInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    scores?: ScoreUpdateManyWithoutPanelistNestedInput
    PanelistCode?: PanelistCodeUpdateOneWithoutUserNestedInput
    ParticipantCode?: ParticipantCodeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutPanelistNestedInput
    PanelistCode?: PanelistCodeUncheckedUpdateOneWithoutUserNestedInput
    ParticipantCode?: ParticipantCodeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    storageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScoreUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    round?: RoundUpdateOneRequiredWithoutScoresNestedInput
    panelist?: UserUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    roundId?: StringFieldUpdateOperationsInput | string
    panelistId?: IntFieldUpdateOperationsInput | number
  }

  export type ScoreUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    roundId?: StringFieldUpdateOperationsInput | string
    panelistId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}