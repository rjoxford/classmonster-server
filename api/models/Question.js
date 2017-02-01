/**
* Question.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {

        //atributes
        length: {
            //TODO - optimise database queries by storing Integer representation: 1 = Instant, 2=Short, 3=Medium, 4=Long
            type: 'string'
        },
        difficulty: {
            //TODO - optimise database queries by storing Integer representation: 1=Easy, 2=Medium, 3=Challenging
            type: 'string'
        },

        questionText: {
            type: 'string'
        },
        answer: {
            type: 'string'
        },


        //boolean hasPicture should allow for more rapid filtering of questions.
        hasPicture: {
            type: 'boolean',
            defaultsTo: false
        },
        picture: {
            type: 'string'
        },

        //Support for multiple choice answers to the questions
        hasMulti: {
            type: 'boolean',
            defaultsTo: false
        },
        answer2: {
            type: 'string'
        },
        answer3: {
            type: 'string'
        },
        answer4: {
            type: 'string'
        },

        //Question advice
        hasAdvice: {
            type: 'boolean',
            defaultsTo: false
        },
        advice: {
            type: 'string'
        },


        //relationships
        objective: {
            model: 'objective',
        },

    }
};
