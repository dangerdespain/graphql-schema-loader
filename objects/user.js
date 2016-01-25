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

	var gistType = models.gistType;

	var userType = new GraphQLObjectType({
	  name: 'User',
	  description: 'Github User Object',
	  fields: () => ({
	    
	    // public

	    login: {
        type: GraphQLString,
        description: '',
      },
	    id: {
	      type: new GraphQLNonNull(GraphQLInt),
	      description: 'The id of the user.',
	    },
	    avatar_url : {
        type: GraphQLString,
        description: '',
      },
	    gravatar_id : {
        type: GraphQLString,
        description: '',
      },
	    type : {
        type: GraphQLString,
        description: '',
      },
	    site_admin : {
        type: GraphQLBoolean,
        description: '',
      },
	    name : {
        type: GraphQLString,
        description: '',
      },
	    company : {
        type: GraphQLString,
        description: '',
      },
	    blog : {
        type: GraphQLString,
        description: '',
      },
	    location : {
        type: GraphQLString,
        description: '',
      },
	    email : {
        type: GraphQLString,
        description: '',
      },
	    hireable : {
        type: GraphQLBoolean,
        description: '',
      },
	    bio : {
        type: GraphQLString,
        description: '',
      },
	    public_repos : {
        type: GraphQLInt,
        description: '',
      },
	    public_gists : {
        type: GraphQLInt,
        description: '',
      },
	    followers : {
        type: GraphQLInt,
        description: '',
      },
	    following : {
        type: GraphQLInt,
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
	    html_url : {
        type: GraphQLString,
        description: '',
      },

	    // "Methods from url (public)"

	    url : {
        type: GraphQLString,
        description: '',
      },
	    followers_url : {
        type: GraphQLString,
        description: '',
      },
	    following_url : {
        type: GraphQLString,
        description: '',
      },
	    gists_url : {
        type: GraphQLString,
        description: '',
      },
	    starred_url : {
        type: GraphQLString,
        description: '',
      },
	    subscriptions_url : {
        type: GraphQLString,
        description: '',
      },
	    organizations_url : {
        type: GraphQLString,
        description: '',
      },
	    repos_url : {
        type: GraphQLString,
        description: '',
      },
	    events_url : {
        type: GraphQLString,
        description: '',
      },
	    received_events_url : {
        type: GraphQLString,
        description: '',
      },

	    gists: {
	      type: new GraphQLList(gistType),
	      description: '',
	      resolve: function(user, params, source, fieldASTs){
	        return utils.req('get',
	        	'/users/' + user.login + '/gists' ,
	        	{})
	      },
	    },

	  })

	});

	return {
		userType : userType,
	}
}

