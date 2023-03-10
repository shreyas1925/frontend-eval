
import { render, screen } from "@testing-library/react";
import Navbar from "..";
import { BrowserRouter } from "react-router-dom";
describe("AllButtons", () => {
    it("should render correctly and create a snapshot", () => {
        const {asFragment } = render(<BrowserRouter><Navbar /></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
      });

    it("should render correctly", () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        const element = screen.getByTestId("navbar");
        expect(element).toBeInTheDocument();
    });
});
