import { version } from '../../package.json';
import { Router } from 'express';


export default ({ config }) => {
	let api = Router();

  // ===============================
  // Anonymous User Endpoints
  // ===============================

  // Registration route for creating an anonymous user. We are provided a userId to create the user
  api.post('/anonymoususer', (req, res) => {
    
    //  *** Expected response ***
    //  {
    //    user: {
    //      "id": "string",
    //      "name": "string", *** I think here we can return an empty string is no string is provided
    //      "cell": "string"
    //    }
    //  }
    
  });

  // Route for updating an anonymous user. We are provided with userId and a property to update.
  // Lets use PUT requests to update a resource or when Idempotence is a concern
  api.put('/anonymoususer', (req, res) => {
    
    //  *** Expected response ***
    //  {
    //    user: {
    //      "id": "string",
    //      "name": "string", *** This is where the name can be changed
    //      "cell": "string"
    //    }
    //  }

  });

  // Login route for anonymous use. If the user with the provided userId exists then return the user
  api.get('/anonymoususer', (req, res) => {

    //  *** Expected response ***
    //  {
    //    user: {
    //      "id": "string",
    //      "name": "string",
    //      "cell": "string"
    //    }
    //  }

  });


  // ===============================
  // User Endpoints
  // ===============================

  // Registration route for creating a user
  // This route will remove the anonymoususer associated with the account if one exists
  api.post('/user', (req, res) => {


    //  *** Expected input ***
    //  {
    //    email: "string",
    //    password: "string",
    //    confirmPassword: "string",
    //  }
    

    
    //  *** Expected response ***
    //  {
    //    token: "string", *** This should be a jwt
    //    user: {
    //      "id": "string",
    //      "name": "string",
    //      "cell": "string"
    //    }
    //  }

  });

  // This route updates a user
  // This route expects a the jwt that we sent from either the registration or login endpoint
  api.put('/user', (req, res) => {
    // It's reponse should be the same as POST /user
  });

  // Login route for user. If the user data is retrieve via a email and password then send them the user data
  api.get('/user', (req, res) => {

    
    //  *** Input ***
    //  {
    //    email: "string",
    //    password: "string",
    //  }

    // It's reponse should be the same as POST /user
  });



  // ===============================
  // Photo Endpoints
  // ===============================

  // Creates a photo (These will be photos of the bill)
  // The user will upload a photo of the bill and for now the Billworthy team will manually enter the info from the photo into the API
  api.post('/photo', (req, res) => {

  });

  // Updates a photo
  api.put('/photo', (req, res) => {
    
  });

  // Deletes a photo
  api.delete('/photo', (req, res) => {

  });

  // Gets a photo
  api.get('/photo', (req, res) => {

  });



  // ===============================
  // Bill Endpoints
  // ===============================
  
  // Creates a bill (This is where the Billworthy team will add the information that they gathered from the photo)
  api.post('/bill', (req, res) => {
    // This is the expected input
    //  {
    //    "billId": 0,
    //    "dueDate": "2018-04-07T00:23:53.789Z",
    //    "amount": 0,
    //    "billerId": 0,
    //    "userId": "string",
    //    "billStatusId": 0,
    //    "biller": {
    //      "billerId": 0,
    //      "userId": "string",
    //      "name": "string",
    //      "street1": "string",
    //      "street2": "string",
    //      "city": "string",
    //      "state": "string",
    //      "zip": "string",
    //      "phone": "string",
    //      "accountNumber": "string",
    //      "lobAddressId": "string"
    //    }
    //  }

    // Expected response
    // Also send them back the bill that's in the database, just so that they can verify that it was entered
    // My thinking is that they can easily ignore the extra data, and so having it available may be nice
    // 200 = Success
    // 201 = Item created
    // 400 = Invalid input, object invalid
    // 409 = The item already exists
  });

  // This updates a bill
  api.put('/bill', (req, res) => {
    // This is the expected input
    // If a property is missing then just use the value already available, although as of now all properties in the Bill schema are required
    // If a property exists and matches what's in the database then it's kinda irrelevant. Just use the value already in the database or update it with the same value
    // If a property exists and doesn't match whats in the database then obviously use the new value
    // ^ just to be explicit
    //  {
    //    "billId": 0,
    //    "dueDate": "2018-04-07T00:23:53.789Z",
    //    "amount": 0,
    //    "billerId": 0,
    //    "userId": "string",
    //    "billStatusId": 0,
    //    "biller": {
    //      "billerId": 0,
    //      "userId": "string",
    //      "name": "string",
    //      "street1": "string",
    //      "street2": "string",
    //      "city": "string",
    //      "state": "string",
    //      "zip": "string",
    //      "phone": "string",
    //      "accountNumber": "string",
    //      "lobAddressId": "string"
    //    }
    //  }

    // Expected response
    // Also send them back the updated bill
    // 200 = Successful response, but bill not updated
    // 201 = Bill updated
    // 400 = Invalid ID supplied
    // 404 = Bill not found
  });

  // Gets a bill
  api.get('/bill', (req, res) => {
    // This expects a billId

    // Returns the whole bill object 
  });

  // Deletes a bill
  api.delete('/bill', (req, res) => {
    // This just expects a billId
    // Although, just expecting a billId may make it too easy to delete a bill. That could be a potential vulnerability. I'll let you guys decide

    // Expected response
    // 200 = Success
    // 400 = Invalid ID supplied
    // 404 = Bill not found
  });


  // ===============================
  // Biller Endpoints
  // ===============================

  // Creates a biller
  api.post('/biller', (req, res) => {
    // Expected paramters
    // {
    //   "billerId": 0,
    //   "userId": "string",
    //   "name": "string",
    //   "street1": "string",
    //   "street2": "string",
    //   "city": "string",
    //   "state": "string",
    //   "zip": "string",
    //   "phone": "string",
    //   "accountNumber": "string",
    //   "lobAddressId": "string"
    // }

    // Expected response
    // Might as well send them back the biller object so that they can verify
    // 200 = Success - Item created
    // 400 = Invalid input, object invalid
    // 409 = The item already exists

  });

  // Updates a biller
  api.put('/biller', (req, res) => {
    // Logic is the same as the PUT /bill endpoint
  });

  // Gets a biller
  api.get('/biller', (req, res) => {
    // Logic is the same as the GET /bill endpoint
  });

  // Deletes a biller
  api.delete('/biller', (req, res) => {
    // Logic is the same as the DELETE /bill endpoint
  });

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
