import WidgetCalculator from "../components/WidgetCalculator";
import OrderCard from "../components/OrderCard";

describe("widgetCalculator()", () => {
  it("returns '0 packs' if userOrder is 0", () => {
    const props = { newOrder: { user_order: 0 } };
    expect(WidgetCalculator(props)).toEqual(
      <OrderCard finalWidgetPacks="0 packs" />
    );
  });

  it("correctly calculates widget packs when userOrder equal to 1", () => {
    const props = { newOrder: { user_order: 1 } };
    expect(WidgetCalculator(props)).toEqual(
      <OrderCard finalWidgetPacks="1 x 250" />
    );
  });

  it("correctly calculates widget packs when userOrder equal to 250", () => {
    const props = { newOrder: { user_order: 250 } };
    expect(WidgetCalculator(props)).toEqual(
      <OrderCard finalWidgetPacks="1 x 250" />
    );
  });

  it("correctly calculates widget packs when userOrder equal to 251", () => {
    const props = { newOrder: { user_order: 251 } };
    expect(WidgetCalculator(props)).toEqual(
      <OrderCard finalWidgetPacks="1 x 500" />
    );
  });

  it("correctly calculates widget packs when userOrder equal to 501", () => {
    const props = { newOrder: { user_order: 501 } };
    expect(WidgetCalculator(props)).toEqual(
      <OrderCard finalWidgetPacks="1 x 500 and 1 x 250" />
    );
  });

  it("correctly calculates widget packs when userOrder equal to 12001", () => {
    const props = { newOrder: { user_order: 12001 } };
    expect(WidgetCalculator(props)).toEqual(
      <OrderCard finalWidgetPacks="2 x 5000s, 1 x 2000 and 1 x 250" />
    );
  });
});
