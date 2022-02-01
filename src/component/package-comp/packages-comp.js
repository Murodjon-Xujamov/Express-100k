import React, { useState } from "react";
import Select from "react-dropdown-select";
import { useDispatch } from "react-redux";
import { deleteDelivery } from "../../redux/actions/delivery-actions";
import ContentLoading from "../loading/content-loading";
import DeliveryModal from "./package-modal-comp";

const PackagesComp = ({ deliveryList, loading, locations, regions }) => {
  const [showModalDelivery, setShowModalDelivery] = useState(false);
  const [modalList, setModalList] = useState([]);
  const [fromRegionId, setRegionId] = useState(regions.name);

  const openDeliveryModal = (item) => {
    setModalList(item);
    setShowModalDelivery(true);
  };

  const dispatch = useDispatch();

  const district = locations.filter((loc) => loc.id == fromRegionId);
  const districtList =
    district &&
    district[0]?.states.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });

  return (
    <div>
      {loading ? (
        <div className='loading__container'>
          <ContentLoading />
        </div>
      ) : (
        <>
          <div className='filter__container'>
            <Select
              options={regions}
              onChange={(option) => setRegionId(option[0].value)}
            />
            <Select options={districtList} />
            <input type={"number"} placeholder="Id bo'yicha qidirish" />
          </div>
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
            {/* 
?.filter((d: any) => {
              return d?.number?.toLowerCase().includes(filter.toLowerCase());
            })
 */}
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
                  <td className='delivery__table__date__td'>
                    {item.created_at}
                  </td>
                  <td>
                    {item.matter}, <br />
                    {item.note}
                  </td>
                  <td>{item.cash_amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
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

export default PackagesComp;
