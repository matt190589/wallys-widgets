export default function widgetCounter(orderedWidgets) {
  if (orderedWidgets === 0) {
    return 0;
  } else {
    const xlPack = 5000;
    const lPack = 2000;
    const mPack = 1000;
    const sPack = 500;
    const xsPack = 250;
    let orderArray = [];
    let factor = 0;
    let remainderFromXLPack = orderedWidgets % xlPack;
    console.log("initial remainder");
    factor = (orderedWidgets - remainderFromXLPack) / xlPack;
    if (factor > 0) {
      orderArray.push(factor > 1 ? factor + " xlPacks" : factor + " xlPack");
    }
    let remainderFromLPacks = remainderFromXLPack % lPack;
    factor = (remainderFromXLPack - remainderFromLPacks) / lPack;
    console.log(factor);
    if (factor > 0) {
      orderArray.push(factor > 1 ? factor + " lPacks" : factor + " lPack");
    }
    let remainderFromMPacks = remainderFromLPacks % mPack;
    factor = (remainderFromLPacks - remainderFromMPacks) / mPack;
    if (factor > 0) {
      orderArray.push(factor > 1 ? factor + " mPacks" : factor + " mPack");
    }
    let remainderFromSPacks = remainderFromMPacks % sPack;
    factor = (remainderFromMPacks - remainderFromSPacks) / sPack;
    if (factor > 0) {
      orderArray.push(factor > 1 ? factor + " sPacks" : factor + " sPack");
    }
    if (remainderFromSPacks > 0) {
      orderArray.push(
        remainderFromSPacks > 1
          ? remainderFromSPacks + " xsPacks"
          : remainderFromSPacks + " xsPack"
      );
    }
    let finalOrder = "";
    if (orderArray.length === 1) {
      finalOrder = orderArray[0].toString();
    } else {
      orderArray[orderArray.length - 2] =
        orderArray[orderArray.length - 2] +
        " and " +
        orderArray[orderArray.length - 1];
      orderArray.pop();
      finalOrder = orderArray.join(", ");
    }
  }
  return (
    <div>
      <h1>Wallys Widgets</h1>
      <input />
      <button>Order</button>
    </div>
  );
}
