import React, { useState } from "react";
import DeliveryModal from "./DeliveryModal";

const DeliveryListComp = () => {
  const [showModalDelivery, setShowModalDelivery] = useState(false);
  return (
    <div>
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
            className='delivery__table__hover__tr success'
            onClick={() => {
              setShowModalDelivery(true);
            }}>
            <td>10</td>
            <td>Toshkent sas sasaasasasas sasaa</td>
            <td>Qashqadaryo sasasasaasasasa</td>
            <td>40000 sum</td>
            <td className='delivery__table__date__td'>18:12 12.12.2023</td>
            <td>
              Buyurtma: Sovg'a, <br /> Izoh: Ertaga oladi 9:00 ga, <br />
              Transport_turi: Yingil <br />
            </td>
            <td>150000 sum</td>
          </tr>
        ))}
        <tr className='delivery__table__hover__tr rejection'>
          <td>10</td>
          <td>Toshkent sas sasaasasasas sasaa</td>
          <td>Qashqadaryo sasasasaasasasa</td>
          <td>40000 sum</td>
          <td className='delivery__table__date__td'>18:12 12.12.2023</td>
          <td>
            Buyurtma: Sovg'a, <br /> Izoh: Ertaga oladi 9:00 ga, <br />
            Transport_turi: Yingil <br />
          </td>
          <td>150000 sum</td>
        </tr>
        {[1, 2, 4, 5].map((item) => (
          <tr
            key={item}
            className='delivery__table__hover__tr still_on_the_road'>
            <td>10</td>
            <td>Toshkent sas sasaasasasas sasaa</td>
            <td>Qashqadaryo sasasasaasasasa</td>
            <td>40000 sum</td>
            <td className='delivery__table__date__td'>18:12 12.12.2023</td>
            <td>
              Buyurtma: Sovg'a, <br /> Izoh: Ertaga oladi 9:00 ga, <br />
              Transport_turi: Yingil <br />
            </td>
            <td>150000 sum</td>
          </tr>
        ))}
      </table>
      <DeliveryModal
        show={showModalDelivery}
        onClose={() => {
          setShowModalDelivery(false);
        }}
      />
    </div>
  );
};

export default DeliveryListComp;
