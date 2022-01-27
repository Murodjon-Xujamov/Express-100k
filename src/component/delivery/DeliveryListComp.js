import React, { useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { deleteDelivery } from "../../redux/actions/deliveryActions";
import ContentLoading from "../loading/ContentLoading";
import DeliveryModal from "./DeliveryModal";

const DeliveryListComp = ({ deliveryList, loading }) => {
  const [showModalDelivery, setShowModalDelivery] = useState(false);
  const [modalList, setModalList] = useState([]);

  const openDeliveryModal = (item) => {
    setModalList(item);
    setShowModalDelivery(true);
  };

  const dispatch = useDispatch();

  return (
    <div>
      {loading ? (
        <div className='loading__container'>
          <ContentLoading />
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Qayerdan</th>
              <th>Qayerga</th>
              <th>Dostovka summa</th>
              <th>Vaqt</th>
              <th>Buyurtma</th>
              <th>Umumiy summa</th>
            </tr>
          </thead>

          <tbody>
            {deliveryList.map((item) => (
              <tr
                key={item.id}
                className='delivery__table__hover__tr success'
                onClick={() => {
                  openDeliveryModal(item);
                }}>
                <td>{item.id}</td>
                <td>{item.from_full_address}</td>
                <td>{item.to_full_address}</td>
                <td>{item.delivery_fee_amount}</td>
                <td className='delivery__table__date__td'>{item.created_at}</td>
                <td>
                  {item.matter}, <br />
                  {item.note}
                </td>
                <td>{item.cash_amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <DeliveryModal
        deliveryList={modalList}
        show={showModalDelivery}
        removeDelivery={(delId) => dispatch(deleteDelivery(delId))}
        onClose={() => {
          setShowModalDelivery(false);
        }}
      />
    </div>
  );
};

export default DeliveryListComp;
