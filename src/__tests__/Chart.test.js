import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";
import Chart from "../components/Chart";
import React from "react";

test("Displays a default coinName as 'Bitcoin' ", () => {
  const chart = render(<Chart />);

  const testChart = chart.getByPlaceholderText("coinName");
  expect(testChart).toBe("bitcoin");
});
