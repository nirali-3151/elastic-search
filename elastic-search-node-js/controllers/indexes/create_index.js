const axios = require("axios");
const elasticClient = require("../../app/connection");
const esUrl = "https://elastic-search-demo-ce96fb.es.us-central1.gcp.cloud.es.io/";

// exports.create_index = (req,res,next) => {
//     console.log("req.body is : ", req.body);
//     // elasticClient.indices.exists({ index: 'users' }, (err, res, status) => {
//     //     if (res) {
//     //         console.log('index already exists');
//     //     } else {
//             elasticClient.indices.create({ index: 'users' }, (err, res, status) => {
//                 console.log("err, res, status");
//         //     })
//         // }

//     })
// }

// exports.create_index = async (indexName, res, next) => {
//     await elasticClient.indices.create({ index: indexName });
//     console.log("Index created");
//     // await checkIndices();
//     // console.log("create_index");

//     // await elasticClient.indices.exists({ index: 'persons' }, async (err, res, status) => {
//     //     if (res) {
//     //         console.log('index already exists');
//     //     } else {
//     //         await elasticClient.indices.create({ index: 'persons' }, (err, res, status) => {
//     //             console.log(err, res, status);
//     //         })
//     //     }
//     // })
//     create_index("persons")
// }
//  const createIndex = async (indexName) => {
//     await elasticClient.indices.create({ index: indexName });
//     console.log("Index created");
//   };
  
//   createIndex("posts");
  