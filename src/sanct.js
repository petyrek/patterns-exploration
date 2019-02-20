import { Observable } from "rxjs"
import { map } from "rxjs/operators"
import { create, env } from "sanctuary"
import * as $ from "sanctuary-def"
import type from "sanctuary-type-identifiers"

// 1. Specify @@type for Observable values, so Sanctuary sees them as
//    members of a custom type rather than as plain JavaScript objects.
//    Otherwise, ‘S.map’ would treat Observable values as string maps.
Observable["@@type"] = "rxjs/Observable"

// 2. Provide a fantasy-land/map implementation so Observable values
//    are considered functors. Note the use of a lambda to prevent ‘f’
//    from being applied to more than one argument (which is illegal).
Observable.prototype["fantasy-land/map"] = function(f) {
  return this.pipe(map(x => f(x)))
}

// 3. Define a type constructor (of type ‘Type -> Type’) for the
//    Observable type. The predicate uses ‘x.constructor['@@type']’
//    to determine whether ‘x’ is a member of the Observable type.
const ObservableType = $.UnaryType("rxjs/Observable")("")(
  x => type(x) === "rxjs/Observable",
)(observable => [])

// 4. Create a custom Sanctuary module which recognizes Observable
//    values, by appending the custom type to the default environment.
export const S = create({
  checkTypes: true,
  env: env.concat([ObservableType($.Unknown)]),
})
