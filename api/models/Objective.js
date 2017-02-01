/**
* Objective.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {

        //atributes
        name: {
            type: 'string'
        },

        branch: {
            type: 'string'
        },
        area: {
            type: 'string'
        },
        topic: {
            type: 'string'
        },

        level: {
            type: 'integer'
        },


        //relationships
        snapscores: {
            collection: 'snapscore',
            via: 'objective'
        },

        feedbacks: {
            collection: 'feedback',
            via: 'objective'
        },

        questions: {
            collection: 'question',
            via: 'objective'
        },

    }

};
