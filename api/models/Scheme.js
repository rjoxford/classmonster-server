/**
* Scheme.js
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
        subject: {
            model: 'subject',
        },

        units: {
            collection: 'unit',
            via: 'scheme'
        }
    }

};
