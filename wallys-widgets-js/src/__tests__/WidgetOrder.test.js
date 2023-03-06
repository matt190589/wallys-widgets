import React from "react";
import { render } from "@testing-library/react";
import OrderDisplay from "../components/WidgetCalculator";

describe("OrderDisplay component", () => {
  it("renders the order details correctly", () => {
    const userOrder = 12500;
    const { getByText } = render(<OrderDisplay userOrder={userOrder} />);
    const orderText = getByText(
      "Widget Order: 2 x 5000s, 1 x 2000 and 1 x 500"
    );
    expect(orderText).toBeInTheDocument();
  });
});
