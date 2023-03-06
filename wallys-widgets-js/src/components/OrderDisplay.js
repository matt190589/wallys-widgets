import "../App.css";

export default function OrderDisplay(props) {
  // function widgetCounter(orderedWidgets) {
  let finalOrder = "";
  if (props.userOrder === 0) {
    return 0;
  } else {
    const xlPack = 5000;
    const lPack = 2000;
    const mPack = 1000;
    const sPack = 500;
    const xsPack = 250;
    let orderArray = [];
    let factor = 0;
    let remainderFromXLPack = props.userOrder % xlPack;
    factor = (props.userOrder - remainderFromXLPack) / xlPack;
    if (factor > 0) {
      orderArray.push(factor > 1 ? factor + " x 5000s" : factor + " x 5000");
    }
    let remainderFromLPacks = remainderFromXLPack % lPack;
    factor = (remainderFromXLPack - remainderFromLPacks) / lPack;
    console.log(factor);
    if (factor > 0) {
      orderArray.push(factor > 1 ? factor + " x 2000s" : factor + " x 2000");
    }
    let remainderFromMPacks = remainderFromLPacks % mPack;
    factor = (remainderFromLPacks - remainderFromMPacks) / mPack;
    if (factor > 0) {
      orderArray.push(factor > 1 ? factor + " x 1000s" : factor + " x 1000");
    }
    let remainderFromSPacks = remainderFromMPacks % sPack;
    factor = (remainderFromMPacks - remainderFromSPacks) / sPack;
    if (factor > 0) {
      orderArray.push(factor > 1 ? factor + " x 500s" : factor + " x 500");
    }
    factor = remainderFromSPacks / xsPack;
    console.log("xs packs", factor);
    if (factor > 0) {
      orderArray.push(factor > 1 ? 2 + " x 250s" : 1 + " x 250");
    }
    if (orderArray.length === 1) {
      finalOrder = orderArray[0].toString();
    } else {
      orderArray[orderArray.length - 2] =
        orderArray[orderArray.length - 2] +
        " and " +
        orderArray[orderArray.length - 1];
      orderArray.pop();
      finalOrder = orderArray.join(", ");
      console.log("final order", finalOrder);
      return finalOrder;
    }
  }
  return (
    <div className="order-card">
      <h3>Your order</h3>
      <p> Widget Order: {finalOrder} </p>
    </div>
  );
}
