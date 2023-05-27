import { useNavigate } from "react-router-dom"; 
import EventP from "./EventP";

export default function EventListContainer(props: any) {
  const { eventList } = props;
  const navigate = useNavigate(); 

  const handleEventClick = (event: any) => {
    return (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      console.log("Clicked event:", event); 
      
      navigate(`/event?id=${event.id}`); 
    };
  };

  return eventList.map((event: any) => {
    console.log("Mapping event:", event); // Add this line to log the event being mapped
    return (
      <EventP event={event} key={event.id} onClick={handleEventClick(event)} />
    );
  });
}
