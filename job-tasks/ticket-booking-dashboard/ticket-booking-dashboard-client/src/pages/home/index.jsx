import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import { useUser } from "../../context/UserContext";

function Home() {
  const [events, setEvents] = useState([]);
  const { user, dbUser, loading } = useUser();
  const navigate = useNavigate();
  if (user || dbUser) {
    // console.log(first)
  }
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosInstance.get("/events");
        setEvents(response.data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
//   console.log(events);
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto py-6">
        <h1 className="text-5xl font-bold text-center mb-6">
          Available Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <div key={event._id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{event.name}</h2>
                <p>{event.description}</p>
                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                <p>Price: {event.price === 0 ? "Free" : `$${event.price}`}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEventClick(event._id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
