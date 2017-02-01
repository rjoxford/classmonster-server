/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {

        //attributes
        forename: {
            type: 'string'
        },

        surname: {
            type: 'string'
        },

        username: {
            type: 'string'
        },

        email: {
            type: 'string'
        },

        password: {
            type: 'string'
        },

        //relationships
        groups: {
            collection: 'group',
            dominant: true
        },

        // school: {
        //     type: 'string',
        // }

  }
};
