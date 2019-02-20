# patterns-exploration

explore patterns for react development

# stuff at works here

- no default exports to help avoid name inconsistencies
- union types using daggy.js
- fantasy-land ADTs from sanctuary
- observable monad (rxjs) to abstract backend data source, incorporated into fantasyland & sanctuary
- firebase (though this architecture is server-agnostic, anything could be used instead)
- higher order functions/components

# naming conventions

- var\$ means it is an observable rxjs stream
- varU means it is a daggy.js union type
- varM means it is a Maybe monad
- varE means it is an Either monad (not there yet)
