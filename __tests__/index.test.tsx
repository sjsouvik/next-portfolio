import { fireEvent, render } from "@testing-library/react";
import Home from "../pages";
import { useRouter } from "next/router";

jest.mock("next/router");

describe("Testing the home page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: "/",
      push: jest.fn(),
    }));
  });

  it("should render the home page", () => {
    const { getByText, getByRole } = render(<Home />);

    expect(getByText(/i am souvik jana/i)).toBeInTheDocument();
    expect(
      getByRole("heading", { name: /featured projects/i })
    ).toBeInTheDocument();
    expect(
      getByRole("heading", { name: /work experience/i })
    ).toBeInTheDocument();
  });
});
