# Apartments Catalog

## Description

This project is a demo of an apartments listing app.

## Run

Run the following command in order to start the containers:

```bash
npm run start
```

## Services / Containers

### Frontend

- The front end of this project is built using NextJS. It provides a simple web app for users to view and add apartments

### Backend

- The backend of this project is built using NestJS. It provides a RESTful API for managing apartment listings. The backend interacts with MongoDB for data storage and Minio for handling image uploads and storage.

- Go to http://localhost:3001/docs for OpenAPI documentation

### MongoDB

- In this project, MongoDB is used to manage and store the application's data.

### Minio

- Minio is an open-source object storage server that is compatible with Amazon S3 cloud storage service.

- In this project, Minio is used to provide a scalable and high-performance storage solution for managing and storing images.

- By using Minio, the project can leverage a reliable and efficient storage system that supports S3-compatible APIs, making it easier to manage and retrieve stored data.

- Go to http://localhost:9001 to view the files bucket
