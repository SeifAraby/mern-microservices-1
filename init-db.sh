#!/bin/bash

# Wait for MongoDB to be ready
until mongo admin --eval 'quit()' &>/dev/null; do
    echo "Waiting for MongoDB to be ready..."
    sleep 2
done

# Connect to MongoDB and create a new user
mongo admin --eval 'db.createUser({ user: "admin", pwd: "admin123", roles: ["readWrite", "dbAdmin"] })'
