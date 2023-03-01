
import { render, screen } from "@testing-library/react";
import AllButtons from "..";
describe("AllButtons", () => {
    it("should render correctly and create a snapshot", () => {
        const {asFragment } = render(<AllButtons />);
        expect(asFragment()).toMatchSnapshot();
      });

    it("should render correctly", () => {
        render(<AllButtons />);
        const element = screen.getByTestId("all-btns");
        expect(element).toBeInTheDocument();
    });
});
