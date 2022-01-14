import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/scss/_delivery.scss";
import DeliveryModal from "../../component/delivery/DeliveryModal";
import { fetchDelivery } from "../../redux/actions/deliveryActions";

const Delivery = () => {
  const [showModalDelivery, setShowModalDelivery] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDelivery());
  }, []);

  const deliveryList = useSelector((state) => state.delivery.list);
  console.log(deliveryList);

  return (
    <>
      <div className="delivery__top">
        <h1>Pochtalar</h1>
        <div className="delivery__status">
          <div className="delivery__box__white"></div>
          Yangi
        </div>
        <div className="delivery__status">
          <div className="delivery__box__success"></div>
          Yetqazib berilganlar
        </div>
        <div className="delivery__status">
          <div className="delivery__box__red"></div>
          Atkazlar
        </div>
        <div className="delivery__status delivery__status__right">
          <div className="delivery__box__yellow"></div>
          Yo'lda
        </div>
      </div>
      <div className="card__delivery__table">
        <table>
          <tr>
            <th>Id</th>
            <th>Qayerdan</th>
            <th>Qayerga</th>
            <th>Dostovka summa</th>
            <th>Vaqt</th>
            <th>Buyurtma</th>
            <th>Umumiy summa</th>
          </tr>
          {[1, 2, 3].map((item) => (
            <tr
              key={item}
              className="delivery__table__hover__tr success"
              onClick={() => {
                setShowModalDelivery(true);
              }}
            >
              <td>10</td>
              <td>Toshkent sas sasaasasasas sasaa</td>
              <td>Qashqadaryo sasasasaasasasa</td>
              <td>40000 sum</td>
              <td className="delivery__table__date__td">18:12 12.12.2023</td>
              <td>
                Buyurtma: Sovg'a, <br /> Izoh: Ertaga oladi 9:00 ga, <br />
                Transport_turi: Yingil <br />
              </td>
              <td>150000 sum</td>
            </tr>
          ))}
          <tr className="delivery__table__hover__tr rejection">
            <td>10</td>
            <td>Toshkent sas sasaasasasas sasaa</td>
            <td>Qashqadaryo sasasasaasasasa</td>
            <td>40000 sum</td>
            <td className="delivery__table__date__td">18:12 12.12.2023</td>
            <td>
              Buyurtma: Sovg'a, <br /> Izoh: Ertaga oladi 9:00 ga, <br />
              Transport_turi: Yingil <br />
            </td>
            <td>150000 sum</td>
          </tr>
          {[1, 2, 4, 5].map((item) => (
            <tr
              key={item}
              className="delivery__table__hover__tr still_on_the_road"
            >
              <td>10</td>
              <td>Toshkent sas sasaasasasas sasaa</td>
              <td>Qashqadaryo sasasasaasasasa</td>
              <td>40000 sum</td>
              <td className="delivery__table__date__td">18:12 12.12.2023</td>
              <td>
                Buyurtma: Sovg'a, <br /> Izoh: Ertaga oladi 9:00 ga, <br />
                Transport_turi: Yingil <br />
              </td>
              <td>150000 sum</td>
            </tr>
          ))}
        </table>
      </div>
      <DeliveryModal
        show={showModalDelivery}
        onClose={() => {
          setShowModalDelivery(false);
        }}
      />
    </>
  );
};

export default Delivery;
