#!/bin/bash

# Connect to MongoDB and create a new user
mongo admin --eval 'db.createUser({ user: "admin", pwd: "admin123", roles: ["readWrite", "dbAdmin"] })'
