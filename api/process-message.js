// const fetch = require('node-fetch');
// const processMessage = require('./process-message');

//     const projectId = ''; //https://dialogflow.com/docs/agents#settings
//     const sessionId = '';
//     const languageCode = '';

//     const dialogflow = require('dialogflow');

//     const config = {
//       credentials: {
//         private_key: process.env.DIALOGFLOW_PRIVATE_KEY,
//         client_email: process.env.DIALOGFLOW_CLIENT_EMAIL
//       }
//     };

//     const sessionClient = new dialogflow.SessionsClient(config);

//     const sessionPath = sessionClient.sessionPath(projectId, sessionId);


//     const { FACEBOOK_ACCESS_TOKEN } = process.env;

//     const sendTextMessage = (userId, text) => {
//       return fetch(
//         `https://graph.facebook.com/v2.6/me/messages?access_token=${FACEBOOK_ACCESS_TOKEN}`,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           method: 'POST',
//           body: JSON.stringify({
//             messaging_type: 'RESPONSE',
//             recipient: {
//               id: userId,
//             },
//             message: {
//               text,
//             },
//           }),
//         }
//       );
//     }

//     module.exports = (event) => {
//       const userId = event.sender.id;
//       const message = event.message.text;

//       const request = {
//         session: sessionPath,
//         queryInput: {
//           text: {
//             text: message,
//             languageCode: languageCode,
//           },
//         },
//       };

//       sessionClient
//         .detectIntent(request)
//         .then(responses => {
//           const result = responses[0].queryResult;
//           return sendTextMessage(userId, result.fulfillmentText);
//         })
//         .catch(err => {
//           console.error('ERROR:', err);
//         });
//     }

//     module.exports = (req, res) => {
//         if (req.body.object === 'page') {
//           req.body.entry.forEach(entry => {
//             entry.messaging.forEach(event => {
//               if (event.message && event.message.text) {
//                 processMessage(event);
//               }
//             });
//           });
  
//           res.status(200).end();
//         }
//       };