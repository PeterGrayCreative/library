// listing 3.7, p. 72

const _ = require('lodash')

const data = ['alonzo church', 'Haskell curry', 'stephen_kleene', 'John Von Neumann', 'stephen_kleene']

const isValid = val => !_.isUndefined(val) && !_.isNull(val)


console.log( _.chain(data)
    .filter(isValid)
    .map(s => s.replace(/_/, ' '))
    .uniq()
    .map(_.startCase)
    .sort()
    .value()
)

