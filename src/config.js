"use strict"

const assert = require("assert");
const dotenv = require("dotenv");

// read .env file
dotenv.config();

// capture the environment variables the app needs
const { 
    PORT,
    HOST,
    HOST_URL,
    COOKIE_ENCRYPT_PWD,
    SQL_SERVER,
    SQL_DATABASE,
    SQL_USER,
    SQL_PASSWORD,
    OKTA_ORG_URL,
    OKTA_CLIENT_ID,
    OKTA_CLIENT_SECRET
} = process.env;

const sqlEncrypt = process.env.SQL_ENVRYPT === "true";

// validate the requred configuration inforation
assert( PORT, "PORT configuration is required." );
assert( HOST, "HOST configuration is required." );
assert( HOST_URL, "HOST_URL configuration is required." );
assert( COOKIE_ENCRYPT_PWD, "COOKIE_ENCRYPT_PWD configuration is required." );
assert( SQL_SERVER, "SQL_SERVER configuration is required." );
assert( SQL_DATABASE, "SQL_DATABASE configuration is required." );
assert( SQL_USER, "SQL_USER configuration is required." );
assert( SQL_PASSWORD, "SQL_PASSWORD configuration is required." );

// export the config info
module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
            server: SQL_SERVER,
            database: SQL_DATABASE,
            user: SQL_USER,
            password: SQL_PASSWORD,
            options: {
                encrypt: sqlEncrypt
            }
    }
}