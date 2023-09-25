# FLIGHT-TICKET-BOOKING

This is a console-based backend application developed using Node.js, Express.js, and MongoDB. It allows users to search for flights, book tickets, and manage their bookings. Additionally, administrators can add and remove flights and view bookings based on flight information.

USER USE CASES
--------------

1.To search for flights based on date and time, use the GET method with the following URL:
----------------------------------------------------------------------------------------

http://localhost/flight/search?date=<date>&time=<hh:mm>

Replace <date> with the desired date.
Replace <hh:mm> with the desired time.

This endpoint filters flights based on the provided date and time.

2. Booking Tickets on a Flight based on Availability
---------------------------------------------------------------------------------------

To book tickets on a flight, use the POST method with the following URL format:

http://localhost:3000/bookings/<flightNumber>/<Date>/<Time>

Replace <flightNumber> with the flight number.
Replace <Date> with the date in the format YYYY-MM-DD.
Replace <Time> with the time in the format HH:mm.

In the request body, send the following data:
{
  "seatsBooked": 2,
  "userId": "60a6dc65f57d3a3fc0e3dbd6"
}

This request will make a booking if the specified number of seats is available on the flight.

3. My Bookings
------------------------------------------------------------------------------------------
To list all the bookings made by a user, use the GET method with the following URL:

http://localhost:3000/myBookings/<userId>

Replace <userId> with the user's ObjectId (reference key).
This endpoint retrieves all the bookings associated with the specified user.


ADMIN USE CASES
---------------

1. Add Flights
------------------------------------------------------------------------------------------
To add new flights, use the POST method with the following URL:

http://localhost:3000/flights

In the request body, provide the flight details, including:

{
  "flightNumber": "121",
  "source": "cbe",
  "destination": "chennai",
  "departureTime": "2023-05-10T10:30:00.000Z",
  "arrivalTime": "2023-05-11T05:45:00.000Z",
  "seatsAvailable": 30
}
Ensure that the flight number is unique. This request adds a new flight to the system.

2. Remove Flights
-------------------------------------------------------------------------------------------

To remove flights, use the DELETE method with the following URL format:

http://localhost:3000/flights/delete/<flightNumber>

Replace <flightNumber> with the unique flight number of the flight to be deleted.

This request deletes the specified flight from the system.

3. View All Bookings Based on Flight Number and Time
---------------------------------------------------------------------------------------------

To view all bookings for a specific flight based on flight number and time, use the GET method with the following URL format:

http://localhost:3000/bookings/<flightNumber>/<date>/<time>

Replace <flightNumber> with the flight number.
Replace <date> with the date in the format YYYY-MM-DD.
Replace <time> with the time in the format HH:mm.

This endpoint retrieves all bookings for the specified flight and time.

4. Get All Flights
----------------------------------------------------------------------------------------------

To retrieve a list of all flights in the database, use the GET method with the following URL:

http://localhost:3000/flights

This endpoint returns a response listing all flights stored in the database.

Feel free to explore these endpoints to interact with the Flight Ticket Booking application.


