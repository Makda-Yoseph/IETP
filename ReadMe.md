# Garbage Management API

This API provides a set of endpoints to manage garbage records, including storing data from sensors, retrieving, updating, and deleting garbage records.

Base URL: [https://ietp-ppq7.onrender.com/api/garbage](https://ietp-ppq7.onrender.com/api/garbage)

## API Endpoints

### 1. Create Garbage Record (Store Data from Sensor)
- **URL**: `https://ietp-ppq7.onrender.com/api/garbage`
- **Method**: `POST`
- **Description**: Create a new garbage record. This endpoint is used to store data collected from sensors such as temperature, humidity, or any relevant data.
- **Request Body**:
  - `name` (string): The name of the garbage item.
  - `quantity` (string/number): The quantity of the garbage item.
  - `location` (string): The location where the garbage was found.
  - `sensor_data` (object):
    - `temperature` (number): The temperature reading from the sensor.
    - `humidity` (number): The humidity reading from the sensor.

- **Response**:
  - **Success**: HTTP Status 201 with a message and created data.
  - **Failure**: HTTP Status 400 or 500 with error message.

### 2. Get All Garbage Records
- **URL**: `https://ietp-ppq7.onrender.com/api/garbage`
- **Method**: `GET`
- **Description**: Retrieve a list of all garbage records in the system.
- **Response**:
  - **Success**: HTTP Status 200 with a list of all garbage records.
  - **Failure**: HTTP Status 500 with error message.

### 3. Get Garbage Record by ID
- **URL**: `https://ietp-ppq7.onrender.com/api/garbage/:id`
- **Method**: `GET`
- **Description**: Retrieve a specific garbage record by its ID.
- **Parameters**:
  - `id` (required): The unique ID of the garbage record.
- **Response**:
  - **Success**: HTTP Status 200 with the specified garbage record data.
  - **Failure**: HTTP Status 404 if the record is not found, or HTTP Status 500 with error message.

### 4. Update Garbage Record
- **URL**: `https://ietp-ppq7.onrender.com/api/garbage/:id`
- **Method**: `PUT`
- **Description**: Update an existing garbage record by its ID.
- **Parameters**:
  - `id` (required): The unique ID of the garbage record to update.
- **Request Body**:
  - `name` (string): The name of the garbage item.
  - `quantity` (string/number): The quantity of the garbage item.
  - `location` (string): The location where the garbage was found.
  - `sensor_data` (object):
    - `temperature` (number): The updated temperature reading from the sensor.
    - `humidity` (number): The updated humidity reading from the sensor.
- **Response**:
  - **Success**: HTTP Status 200 with the updated garbage record data.
  - **Failure**: HTTP Status 400 if invalid data is sent, HTTP Status 404 if the record is not found, or HTTP Status 500 with error message.

### 5. Delete Garbage Record
- **URL**: `https://ietp-ppq7.onrender.com/api/garbage/:id`
- **Method**: `DELETE`
- **Description**: Delete a specific garbage record by its ID.
- **Parameters**:
  - `id` (required): The unique ID of the garbage record to delete.
- **Response**:
  - **Success**: HTTP Status 200 with a success message.
  - **Failure**: HTTP Status 404 if the record is not found, or HTTP Status 500 with error message.

## How to Use the API

You can interact with the API by sending HTTP requests (POST, GET, PUT, DELETE) to the corresponding endpoints.

1. **Create Garbage Record**: Use the `POST` method to store data from sensors and garbage details.
2. **Get All Garbage Records**: Use the `GET` method to retrieve all records.
3. **Get Garbage Record by ID**: Use the `GET` method with an `id` to retrieve a specific garbage record.
4. **Update Garbage Record**: Use the `PUT` method to update an existing garbage record.
5. **Delete Garbage Record**: Use the `DELETE` method to remove a garbage record by its `id`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Express.js for providing the backend framework.
- Contributors for their valuable contributions to this project.
