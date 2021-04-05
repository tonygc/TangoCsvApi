Hi There!

I used Express and SQLITE3 to build this code challenge.
In the directory called "documentation" i put csv samples and the Postman collection to test.

I have made 2 requests on the API.
The first loads the records from the csv file and inserts them into the local SQLITE database.
You should access it with the following url ->
	http://localhost:3000/api/csv/upload
This request must contain a key named "file" with the csv file as the value to import.

The last request gets all the records saved in the database.
This is the method's url.
	http://localhost:3000/api/csv/tutorials

Bouth methods have a json response.
	

Thanks for your time
Tony