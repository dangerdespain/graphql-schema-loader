# graphql-schema-loader

This is a boilerplate schema structure and loader utils to provide file-based organization for GraphQL schemas. Included in this module is a basic Github public API example.

Usage is simple

**Install as npm module**

`$ npm install graphql-schema-loader --save`

**Install as standalone plugin**

`$ git clone git@github.com:dangerdespain/graphql-schema-loader.git`
`$ cd graphql-schema-loader/ && npm install && rm .git && cd ../`

**Usage**
```JavaScript
var GraphQL = require('graphql');
var schema = require('./graphql-schema-loader').schema

graphql(schema: schema,
  requestString: 'string',
  rootValue?: '?any',
  variableValues?: {key: "any"},
  operationName?: '?string'
).then(function(res){
  if(res.errors){ } // Errors happened... GraphQL takes care of populating the API response but you can add more logic here.
  res = res // Handle your data and/or complete your response here
  return res
}) // if this function pattern doesn't make sense, check out Promises! BluebirdJS is my favorite Promise lib.
```

**Advanced usage**

My goal here was extendable schema definitions. Imagine being able to chain in a pre-built User Management/Stripe/Facebook Login schema to your primary app schema. I love the idea of being able to modularize and re-use chunks of schema endpoints and functions and hope that this catches on. This will be how I plan to build my GraphQL plugins from now on.

```JavaScript
var utils = require('./graphql-schema-loader').utils

utils = {
  collectObjects : function(){
    // Smart-load and collect the items in the objects directory.
  },
  collectMutations : function(){}
  collectQueries : function(){}

  extendSchema : function(schemaObjects={}){
    // Builds the schema from the objects/queries/mutations directories.
    // If schemaObjects is included, this extends that schema with the new objects, queries, and mutations.
  },

  compileSchema : function(schemaObjects={}){
  // Calls extendSchema and returns a GraphQL Schema Object
  // If schemaObjects is included, this extends that schema with the new objects, queries, and mutations before creating the Schema object. This should be the last method called if chaining schemas.
  }
}
```

This module can easily be extended to dynamically generate schemas from a set of inputs, or to pass in a seeded schema object set.
