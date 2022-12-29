import { useSelector, useDispatch } from "react-redux";
function Thanks() {
    const Order_ID = useSelector((state) => state.Sites.Order_ID) || "";
  return (
    <div>Thanks Order ID {Order_ID}</div>
  )
}

export default Thanks