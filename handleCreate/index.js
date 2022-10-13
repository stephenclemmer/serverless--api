// Handle Create for POST function

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

let parsedBody = JSON.parse(event.body);
let {name, id, gender, age} = parsedBody;

let person = {name, id, gender, age}

// console.log('nonsense ---->', objectName)


  const response = {statusCode: null, body: null};

  try {
    let newPerson = await peopleModel.create(person);
    response.statusCode = 200;
    response.body = JSON.stringify(newPerson);
      }    catch(e){
      console.log(e);
      response.statusCode = 500;
      response.body = JSON.stringify(e.message);
    }

  return response;
};
