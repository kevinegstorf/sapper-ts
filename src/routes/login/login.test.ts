import Login from "./index.svelte";
import { render } from "@testing-library/svelte";

it("renders", () => {
  const { getByText } = render(Login);

  expect(getByText("Login")).toBeTruthy;
  expect(getByText("Hi")).toBeTruthy;
});
