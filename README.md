# FLIGHT-TICKET-BOOKING

This is  a console based backend application developed with node ,express,mongodb.

USER USE CASES
--------------

1.Search for Flights based on Date and time:

use the GET method with the url http:/localhost/flight/search?date=<yyyy-mm-dd>&time=<hh:mm>
here we are sending the date and time for filtering in the params.

2.Booking tickets on a flight based on availability (assuming the default
seat count is 60)

here we use the Post method with the url /booking/flightNumber/Date/Time
ex:http://localhost:3000/bookings/DL104/2022-05-11/08:00
in the body send the following data seats booked and userId:
{
  "seatsBooked": 2,
  "userId": "60a6dc65f57d3a3fc0e3dbd6"
}

thus this request will make the booking if the seats are avaliable in the particular flight.

3.My Booking -> to list out all the bookings made by that user

here use the GET method with userId in the params as the userId(ObjectId) will be the reference and the key to list the bookings
URLhttp:/localhost:3000/myBookings/userId 
ex:http:/localhost:3000/myBookings/60a6dc65f57d3a3fc0e3dbd6


ADMIN USE CASES
---------------

1.Add Flights

here by post method and the flight details in the body we are adding new flights url:http:/localhost:3000/flights
with the data: FlightNumber(unique),source,destination,DepatureTime,ArrivalTime,seatsAvaliable(default:60).
example:
{       "flightNumber": "121",
        "source": "cbe",
        "destination": "chennai",
        "departureTime": "2023-05-10T10:30:00.000Z",
        "arrivalTime": "2023-05-11T05:45:00.000Z",
        "seatsAvailable": 30
}

2.Remove Flights

here by delete method http:/localhost:3000/flights/delete/:flightNumber we find the flights by unique flight numbers 
example:http://localhost:3000/flights/delete/121

3.View all the booking based on flight number and time

here we are using GET method so the flight number and time should be send as params http:/localhost:3000/bookings/:flightNumber/:date/:time
like http://localhost:3000/bookings/DL104/2022-05-11/08:00

as in booking schema the flight is given as refernce the filght number will be searched in the booking collection 

4.TO GET ALL the flights 
here we use the simple GET method to get all the flights in the db url http:/localhost:3000/flights
 this returns the response as all the flights will be listed. 
 



