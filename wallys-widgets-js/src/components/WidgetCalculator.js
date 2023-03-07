import "../App.css";
import OrderCard from "./OrderCard";

export default function WidgetCalculator(props) {
  let userOrder = Number(props.newOrder.user_order);
  const trackingNumber = props.newOrder.tracking_number;
  let finalWidgetPacks = "0 packs";

  const xlPack = 5000;
  const lPack = 2000;
  const mPack = 1000;
  const sPack = 500;
  const xsPack = 250;
  let orderArray = [];

  function widgetCounter() {
    if (userOrder === 0) {
      return finalWidgetPacks;
    } else {
      let numberOfPacks = 0;
      let remainderFromXLPack = userOrder % xlPack;
      numberOfPacks = (userOrder - remainderFromXLPack) / xlPack;
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
    <OrderCard
      finalWidgetPacks={finalWidgetPacks}
      trackingNumber={trackingNumber}
    />
  );
}

//Refactoring using a pack object

// function widgetCounter() {
// const packs = {
//     xlPack: 5000,
//     lPack: 2000,
//     mPack: 1000,
//     sPack: 500,
//     xsPack: 250,
//   },
//   orderArray = [];
//   if (userOrder === 0) return finalWidgetPacks;
//   for (let key in packs) {
//     if (userOrder >= packs[key]) {
//       let factor = Math.floor(userOrder / packs[key]);
//       orderArray.push((factor += factor > 1 ? " " + key + "s" : " " + key));
//       userOrder = userOrder % packs[key];
//     }
//   }
//   formatOrder(orderArray);
// }
