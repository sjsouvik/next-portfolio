import { render } from "@testing-library/react";
import { ThemeProvider } from "../context/ThemeContext";
import About from "../pages/about";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/about",
    push: jest.fn(),
    query: {},
    asPath: "/about",
  }),
}));

describe("Testing the about page", () => {
  it("should render the about page", () => {
    const { getByText, getByRole } = render(
      <ThemeProvider>
        <About />
      </ThemeProvider>,
    );

    expect(getByText(/hello, i am souvik/i)).toBeInTheDocument();
    expect(getByRole("heading", { name: /skills/i })).toBeInTheDocument();
    expect(getByRole("heading", { name: /education/i })).toBeInTheDocument();
  });
});
