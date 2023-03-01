import React, { useEffect,useState } from 'react'
import EventCard from '../../components/EventCard'
import './EventDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import makeRequest from '../../utils/makeRequest'
import { GET_EVENT_BYID } from '../../constants/apiEndPoints'


const EventDetails = () => {

  const {id} = useParams()

  const [event,setEvent] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    makeRequest(GET_EVENT_BYID(id), {},navigate)
        .then((response) => {
          setEvent(response);
          console.log(event)
        });
}, []);
  

  return (
    <div className="app--container">
        <div className='event--detail-container'>
                    <EventCard event={event}/>    
          </div>
    </div>
  )
}

export default EventDetails