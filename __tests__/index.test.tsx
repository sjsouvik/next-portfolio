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

describe("Testing the home page", () => {
  it("should render the home page", () => {
    const { getByText, getByRole } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );

    expect(getByText(/i am souvik jana/i)).toBeInTheDocument();
    expect(
      getByRole("heading", { name: /featured projects/i }),
    ).toBeInTheDocument();
    expect(
      getByRole("heading", { name: /work experiencee/i }),
    ).toBeInTheDocument();
  });
});
