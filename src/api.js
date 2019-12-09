'use strict';

module.exports.handler = async (event, ctx, done) => {

 done(null, {
  statusCode: 200,
  headers: 'application/json',
  body: JSON.stringify({ message: 'Hello' })
 })

};
