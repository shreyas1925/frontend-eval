import { render, screen } from "@testing-library/react";
import Footer from "..";
describe("AllButtons", () => {
    it("should render correctly and create a snapshot", () => {
        const {asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
      });

    it("should render correctly", () => {
        render(<Footer />);
        const element = screen.getByTestId("footer");
        expect(element).toBeInTheDocument();
    });
});
