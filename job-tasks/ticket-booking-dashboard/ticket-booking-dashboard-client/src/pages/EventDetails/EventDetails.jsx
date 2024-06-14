import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import { useUser } from "../../context/UserContext";

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  console.log("EventDetails - Event ID:", eventId);
  console.log("EventDetails - User:", user);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axiosInstance.get(`/events/${eventId}`);
        setEvent(response.data.data);
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleBookTicket = async () => {
    if (!user) {
      alert("You need to log in to book a ticket.");
      return;
    }

    try {
      const response = await axiosInstance.post(`/events/${eventId}/book`, {
        userId: user.uid,
      });
      console.log("Booking response:", response.data);
      alert("Ticket booked successfully!");
    } catch (error) {
      console.error("Error booking ticket:", error);
      alert("Error booking ticket.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>Event not found.</div>;
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto py-6">
        <h1 className="text-5xl font-bold text-center mb-6">{event.name}</h1>
        <div className="card bg-base-100 shadow-xl mx-auto">
          <div className="card-body">
            <p>{event.description}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Price: {event.price === 0 ? "Free" : `$${event.price}`}</p>
            <div className="card-actions justify-end">
              {event.price > 0 ? (
                <button className="btn btn-primary" onClick={handleBookTicket}>
                  Book Ticket - ${event.price}
                </button>
              ) : (
                <button className="btn btn-primary" onClick={handleBookTicket}>
                  Book Free Ticket
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
