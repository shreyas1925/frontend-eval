import React, { useEffect, useState } from "react";
import "./EventCard.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  GET_EVENTS,
  GET_EVENT_BYID,
  UPDATE_REGISTER_BY_ID,
} from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";
const EventCard = ({ event }) => {
  const [register, setRegister] = useState();
  const [bookmarked,setBookmarked] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
     makeRequest(GET_EVENT_BYID(event.id), {}, navigate).then((response) => {
      setRegister(response.isRegistered);
      setBookmarked(response.isBookmarked);
      console.log(response);
    });
  }, []);

  const navigateDetails = () => {
    navigate(`/event/${event.id}`, {
      state: {
        event: event,
      },
    });
  };

  const registered = "✅ Registered";
  const noseatsavailable = "❌ No Seats Available";

  const handleBookmark = async () => {
    await makeRequest(UPDATE_REGISTER_BY_ID(event.id),  {
      data: { isBookmarked: !bookmarked }
    },navigate);
    setBookmarked(!bookmarked);
  };

  const handleRegister = async () => {
    // console.log(event.isRegistered);
    await makeRequest(UPDATE_REGISTER_BY_ID(event.id), {
      data: { isRegistered: !register }
    },navigate);
    setRegister(!register);
  };
  return (
    <div className="card" onClick={navigateDetails} data-testid='event-card'>
      <div className="card--image">
        <img src={event.imgUrl} alt="" />
      </div>
      <div className="card--description">
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <br />
        <br />
        <p>Venue: {event.venue}</p>
        <p>Date: {event.datetime}</p>
      </div>
      <div className="card--footer">
        <p>{event.isRegistered === true ? registered : null}</p>
        <p>{event.areSeatsAvailable === false ? noseatsavailable : null}</p>
        {event.isBookmarked === true ? (
          <i className="fa fa-bookmark" onClick={handleBookmark}></i>
        ) : (
          <i class="far fa-bookmark" onClick={handleBookmark}></i>
        )}
      </div>
      {id ? (
        <div className="card--footer">
          {id && event.isRegistered === true ? (
            <button className="btn" onClick={handleRegister}>
              Unregister
            </button>
          ) : null}
          {id && event.isRegistered === false ? (
            <button className="btn" onClick={handleRegister}>
              Register
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default EventCard;
