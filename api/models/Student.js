/**
* Student.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {

        //attributes
        name: {
            type: 'string'
        },

        number: {
            type: 'integer'
        },

        onField: {
            type: 'boolean',
            defaultsTo: false
        },

        bscore: {
            type: 'integer',
            defaultsTo: 0
        },


        //relationships
        group: {
            model: 'group'
        },

        snapscores: {
            collection: 'snapscore',
            via: 'student'
        },

        seatposition: {
            collection: 'seatposition',
            via: 'student'
        },







  }
};
