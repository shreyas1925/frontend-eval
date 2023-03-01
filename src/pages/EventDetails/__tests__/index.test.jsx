import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const event  = {
    "id": 4,
    "name": "Karaoke Contest",
    "description": "Get ready to belt out your favorite tunes and show off your vocal skills at the Karaoke Contest! Whether you're a seasoned singer or a first-time performer, this is your chance to take center stage and shine. With a wide selection of songs to choose from, you can sing your heart out and compete for the grand prize. So warm up those vocal cords, gather your friends, and get ready for a night of music, laughter, and karaoke fun!",
    "venue": "Old Town Pub, Chicago, IL, USA",
    "datetime": "2023-03-21T02:00:00.000Z",
    "timezone": "US/Eastern",
    "areSeatsAvailable": true,
    "isRegistered": true,
    "isBookmarked": false,
    "imgUrl": "https://i.ibb.co/Hx0gKgH/karaoke-2.jpg"
}

describe("Event Card", () => {
    it("should render correctly and create a snapshot", () => {
        const {asFragment } = render(<BrowserRouter><EventCard event={event} /></BrowserRouter> );
        expect(asFragment()).toMatchSnapshot();
      });

    it("should render correctly", () => {
        render(<BrowserRouter><EventCard event={event} /></BrowserRouter> );
        const element = screen.getByTestId("event-card");
        expect(element).toBeInTheDocument();
    });
});