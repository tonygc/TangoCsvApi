Hi There!

I used Express, Jest and SQLITE3 to build this code challenge.
In the directory called "documentation" i put examples from csv files and the Postman collection to test.
Before you start reviewing the code, you must run "npm install" to download all dependencies.

Run the test with "npm test".

I have made 2 requests on the API.
The first loads the records from the csv file and inserts them into the local SQLITE database.
You should access it with the following url ->
	http://localhost:3000/api/csv/upload
This request must contain a key named "file" with the csv file as the value to import.

The last request gets all the records saved in the database.
This is the method's url.
	http://localhost:3000/api/csv/tutorials

Both methods have a json response.

One last thing, if you want to delete all records from database you must delete the file "database/database.db"
and restart your server.
	

Thanks for your time
Tony
