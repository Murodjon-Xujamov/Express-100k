import React, { useState } from "react";
import Select from "react-dropdown-select";
import { useDispatch } from "react-redux";
import { deleteDelivery } from "../../redux/actions/delivery-actions";
import ContentLoading from "../loading/content-loading";
import PackageModalComp from "./package-modal-comp";

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
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-lg-4 col-md-6 col-sm-12'>
                <Select
                  className='border-info w-100 mt-2'
                  options={regions}
                  onChange={(option) => setRegionId(option[0].value)}
                />
              </div>
              <div className='col-12 col-lg-4 col-md-6 col-sm-12'>
                <Select
                  options={districtList}
                  className='w-100 mt-2 border-info'
                />
              </div>
              <div className='col-12 col-lg-4 col-md-6 col-sm-12'>
                <input
                  className='p-1 w-100 mt-2  border-info'
                  type={"number"}
                  placeholder="Id bo'yicha qidirish"
                />
              </div>
            </div>
          </div>
          <div className='overflow-auto'>
            <table className='table mt-3'>
              <thead>
                <tr>
                  <th scope='col'>Id</th>
                  <th scope='col'>Qayerdan</th>
                  <th scope='col'>Qayerga</th>
                  <th scope='col'>Dostovka summa</th>
                  <th scope='col'>Vaqt</th>
                  <th scope='col'>Buyurtma</th>
                  <th scope='col'>Umumiy summa</th>
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
                    className='delivery__table__hover__tr '
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
          </div>
        </>
      )}
      <PackageModalComp
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
