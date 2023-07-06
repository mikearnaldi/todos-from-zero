import * as Effect from "@effect/io/Effect"
import * as Debug from "@effect/data/Debug"

Debug.runtimeDebug.tracingEnabled = false

const fn = <N extends number>(s: string, n: N) => Effect.gen(function* ($) {
    yield* $(Effect.sync(() => console.log(s, n)))
    return n
})

const z = Effect.gen(function* ($) {
    const x = yield* $(fn("x", 1))
    const y = yield* $(fn("y", 2))
    return x + y
  })

Effect.runFork(Effect.flatMap(z, (n) => Effect.sync(() => console.log("z", n))))