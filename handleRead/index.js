const dynamoose = require('dynamoose');

// create a schema

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  gender: String,
  age: Number,
});

// create a model using the schema

const peopleModel = dynamoose.model('person-table', peopleSchema);

exports.handler = async (event) => {


  const response = {
    statusCode: null,
    body: null,
  }

  try {
    let personRecords = await peopleModel.scan().exec();
    response.statusCode = 200;
    response.body = JSON.stringify(personRecords);

  } catch (e){
      console.log(e);
      response.statusCode = 500;
      response.body = JSON.stringify(e.message);
  }

  return response;
};

