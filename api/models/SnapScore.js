/**
* Score.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {

        //attributes
        score: {
            type: 'integer'
        },

        //relationships
        objective: {
            model: 'objective'
        },

        student: {
            model: 'student'
        },


  }
};
