import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql/type';

module.exports = function(schema, utils){

  var models = (schema||{}).models || {};

   var gistType = new GraphQLObjectType({
    name: 'Gist',
    description: 'Github Gist Object',
    fields: () => ({
      
      // public

      id: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The id of the gist.',
      },
      description : {
        type: GraphQLString,
        description: '',
      },
      "public" : {
        type: GraphQLString,
        description: '',
      },
      truncated : {
        type: GraphQLString,
        description: '',
      },
      comments : {
        type: GraphQLString,
        description: '',
      },
      created_at : {
        type: GraphQLString,
        description: '',
      },
      updated_at : {
        type: GraphQLString,
        description: '',
      },

      // "Methods from url (public)"

      url : {
        type: GraphQLString,
        description: '',
      },
      forks_url : {
        type: GraphQLString,
        description: '',
      },
      commits_url : {
        type: GraphQLString,
        description: '',
      },
      comments_url : {
        type: GraphQLString,
        description: '',
      },
      html_url : {
        type: GraphQLString,
        description: '',
      },
      git_pull_url : {
        type: GraphQLString,
        description: '',
      },
      git_push_url : {
        type: GraphQLString,
        description: '',
      },

      // authenticated
      total_private_repos : {
        type: GraphQLString,
        description: '',
      },

    })
  });

  return {
    gistType : gistType,
  }
}