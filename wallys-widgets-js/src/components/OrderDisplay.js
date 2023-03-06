import "../App.css";

export default function OrderDisplay(props) {
  const xlPack = 5000;
  const lPack = 2000;
  const mPack = 1000;
  const sPack = 500;
  const xsPack = 250;
  let orderArray = [];
  let finalWidgetPacks = "";
  function widgetCounter() {
    if (props.userOrder === 0) {
      return 0;
    } else {
      let numberOfPacks = 0;
      let remainderFromXLPack = props.userOrder % xlPack;
      numberOfPacks = (props.userOrder - remainderFromXLPack) / xlPack;
      if (numberOfPacks > 0) {
        orderArray.push(
          numberOfPacks > 1
            ? numberOfPacks + ` x ${xlPack}s`
            : numberOfPacks + ` x ${xlPack}`
        );
      }
      let remainderFromLPacks = remainderFromXLPack % lPack;
      numberOfPacks = (remainderFromXLPack - remainderFromLPacks) / lPack;
      if (numberOfPacks > 0) {
        orderArray.push(
          numberOfPacks > 1
            ? numberOfPacks + ` x ${lPack}s`
            : numberOfPacks + ` x ${lPack}`
        );
      }
      let remainderFromMPacks = remainderFromLPacks % mPack;
      numberOfPacks = (remainderFromLPacks - remainderFromMPacks) / mPack;
      if (numberOfPacks > 0) {
        orderArray.push(
          numberOfPacks > 1
            ? numberOfPacks + ` x ${mPack}s`
            : numberOfPacks + ` x ${mPack}`
        );
      }
      numberOfPacks = remainderFromMPacks / xsPack;
      if (numberOfPacks > 0) {
        orderArray.push(
          numberOfPacks > 3
            ? `2 x ${sPack}s`
            : numberOfPacks > 2
            ? `1 x ${sPack} and 1 x ${xsPack}`
            : numberOfPacks > 1
            ? `1 x ${sPack}`
            : `1 x ${xsPack}`
        );
      }
    }
    formatOrder(orderArray);
  }
  function formatOrder(orderArray) {
    if (orderArray.length === 1) {
      finalWidgetPacks = orderArray[0];
      return finalWidgetPacks;
    } else {
      orderArray[orderArray.length - 2] =
        orderArray[orderArray.length - 2] +
        " and " +
        orderArray[orderArray.length - 1];
      orderArray.pop();
      finalWidgetPacks = orderArray.join(", ");
      return finalWidgetPacks;
    }
  }
  widgetCounter();
  return (
    <div className="order-card">
      <h2>Your order</h2>
      <p> Widget Packs: {finalWidgetPacks} </p>
      <p> Tracking number: </p>
      <button onClick={() => window.location.reload()}>Reorder</button>
      <button> Track Order</button>
    </div>
  );
}
