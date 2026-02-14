import { render } from "@testing-library/react";
import About from "../pages/about";
import { useRouter } from "next/router";
import { ThemeProvider } from "../context/ThemeContext";

jest.mock("next/router");

describe("Testing the about page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: "/abc",
    }));
  });

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
