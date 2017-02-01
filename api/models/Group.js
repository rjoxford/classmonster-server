/**
* Group.js
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

        

        //relationships
        user: {
            model: 'user',
        },

        students: {
            collection: 'student',
            via: 'group'
        },

        //The scheme that the class are currently studying
        currentScheme: {
            model: 'scheme'
        },

        //The unit that the class are currently studying
        currentUnit: {
            model: 'unit'
        },

        //The objective that the class are currently studying
        currentObjective: {
            model: 'objective'
        },



    }
};

