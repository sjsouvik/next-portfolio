import { render } from "@testing-library/react";
import Home from "../pages";
import { useRouter } from "next/router";

jest.mock("next/router");

describe("Snapshot tests for all pages", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: "/",
    }));
  });

  it("should render the home page properly", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
