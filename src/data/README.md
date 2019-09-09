# Create an instance of the mssql package.
1. Create a SQL connection with connect().
2. Use the connection to create a new SQL request.
3. Set any input parameters on the request.
4. Execute the request.
5. Process the results (e.g. recordset) returned by the request.

*Creating connections to SQL Server is a relatively expensive operation. There is also a practical limit to the 7. number of connections that can be established. By default, the mssql package’s .connect() function creates and 8. returns a connection “pool” object. A connection pool increases the performance and scalability of an application.*

*When a query request is created, the SQL client uses the next available connection in the pool. After the query is executed, the connection is returned to the connection to the pool.*