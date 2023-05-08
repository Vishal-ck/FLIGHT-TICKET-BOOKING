# FLIGHT-TICKET-BOOKING

This is  a console based backend application developed with node ,express,mongodb.

USER USE CASES

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






