import React,{useState,useEffect} from 'react';
import './EventList.css';
import AllButtons from '../../components/AllButtons';
import EventCard from '../../components/EventCard';
import makeRequest from "../../utils/makeRequest";
import { GET_EVENTS } from "../../constants/apiEndPoints"
import { Link, useNavigate } from 'react-router-dom';
const EventList = () => {

    const [events, setAllEvents] = useState([]);

  const navigate = useNavigate();

    // const [filterdata, setFilterdata]= useState([]);
    // const [query, setQuery] = useState('');
    const [filterdata, setFilterdata]= useState([]);
    useEffect(() => {
        makeRequest(GET_EVENTS, {},navigate)
            .then((response) => {
              setAllEvents(response);
              setFilterdata(response);
            });
    }, []);

    return (
        <div>

            <AllButtons events={events} setAllEvents={setAllEvents} filterdata={filterdata} setFilterdata={setFilterdata}/>
        <div className="app--container">
        <div className='event--container'>
           {
                events.map((event)=>{
                    return(
                        <EventCard event={event}/>
                    )
                })

           } 
            </div>
        </div>
            

        </div>
    );
};

export default EventList;