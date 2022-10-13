# serverless--api

[API URL](https://wr7mb7u8w6.execute-api.us-west-2.amazonaws.com/lab18sjc/people)

### Feature Tasks & Requirements

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services

**Database: DynamoDB**
1 Table required

**Routing: API Gateway:**

**POST**
/people - Given a JSON body, inserts a record into the database
returns an object representing one record, by its id (##)

**GET**
/people - returns an array of objects representing the records in the database
/people/## - returns an object representing one record, by its id (##)

**PUT**
/people/## - Given a JSON body and an ID (##), updates a record in the database
returns an object representing one record, by its id (##)

**DELETE**
/people/## - Given an id (##) removes the matching record from the database
returns an empty object


### AWS POST UML
![AWS POST UML](./assets/AWS%20POST%20UML.png)

### AWS GET UML
![AWS GET UML](./assets/AWS%20GET%20UML.png)

### AWS PUT UML
![AWS PUT UML](./assets/AWS%20PUT%20UML.png)

### AWS DELETE UML
![AWS DELETE UML](./assets/AWS%20DELETE%20UML.png)

