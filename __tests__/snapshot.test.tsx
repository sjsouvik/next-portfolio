import { render } from "@testing-library/react";
import { ThemeProvider } from "../context/ThemeContext";
import Home from "../pages";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
    push: jest.fn(),
    query: {},
    asPath: "/",
  }),
}));

describe("Snapshot tests for all pages", () => {
  it("should render the home page properly", () => {
    const { container } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
