import { render } from "@testing-library/react";
import Home from "../pages";
import { useRouter } from "next/router";
import { ThemeProvider } from "../context/ThemeContext";

jest.mock("next/router");

describe("Snapshot tests for all pages", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: "/",
    }));
  });

  it("should render the home page properly", () => {
    const { container } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
