import React from "react";

const PrintPackagesListComp = ({ packageListDetailData }) => {
  console.log("dddd", packageListDetailData.store_packages);
  const printTable = () => {
    window.print();
  };
  return (
    <div className='container text-start overflow-auto'>
      <div className='container border border-dark overflow-auto'>
        <table class='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>Id/Sana</th>
              <th scope='col'>Mijoz</th>
              <th scope='col'>Manzil</th>
              <th scope='col'>Mahsulot/Jo'natma</th>
              <th scope='col'>Izoh</th>
              <th scope='col'>Yetkazib berish summasi</th>
              <th scope='col'>Umumiy summa</th>
            </tr>
          </thead>
          <tbody>
            {packageListDetailData &&
              packageListDetailData.store_packages.map((i) => (
                <tr key={i.id}>
                  <th>
                    {i.id}
                    <br />
                    {i.created_at}
                  </th>

                  <td>
                    {i.recipient_name},<br /> {i.recipient_phone} <br />
                  </td>
                  <td>{i.to_full_address}</td>

                  <td>
                    {i.matter} 1 ta 149000 som <br />
                  </td>
                  <td>{i.note}</td>
                  <td>{i.delivery_fee_amount} so'm</td>
                  <td>{i.cash_amount} so'm</td>
                </tr>
              ))}
          </tbody>
        </table>
        {packageListDetailData &&
          packageListDetailData.store_packages.map((i) => (
            <>
              <div>Ro'yhat ID: 226 </div>
              <div>Do'kon: dev.100k.uz, +998555005511 </div>
              <div>Umumiy mijozdan olinadigan summa: {i.cash_amount} so'm </div>
              <div>
                Umumiy yetqazib berish summasi: {i.delivery_fee_amount} so'm{" "}
              </div>
              <div>Umumiy jo'natmalar soni: 1 ta </div>
            </>
          ))}
      </div>
      <button className='btn btn-info mt-3' onClick={printTable}>
        Print
      </button>
      <div className='container mt-3'>
        <div className='row'>
          {packageListDetailData &&
            packageListDetailData.store_packages.map((i) => (
              <div className='col-6 col-lg-6 col-md-6 col-sm-12 border border-dark'>
                <div className='row'>
                  <div className='col border border-dark'>ID/Sana</div>
                  <div className='col border border-dark'>
                    {i.id}-{i.created_at}
                  </div>
                </div>
                <div className='row'>
                  <div className='col border border-dark'>
                    Qabul qiluvchi mijoz
                  </div>
                  <div className='col border border-dark'>
                    {i.recipient_name}, {i.recipient_phone}
                  </div>
                </div>
                <div className='row'>
                  <div className='col border border-dark'>
                    Yetkazib berish manzili
                  </div>
                  <div className='col border border-dark'>
                    {i.to_full_address}
                  </div>
                </div>
                <div className='row'>
                  <div className='col border border-dark'>Jo'natma</div>
                  <div className='col border border-dark'>{i.matter}</div>
                </div>
                <div className='row'>
                  <div className='col border border-dark'>Izoh</div>
                  <div className='col border border-dark'>{i.note}</div>
                </div>
                <div className='row'>
                  <div className='col border border-dark'>
                    ichki buyurtma raqami
                  </div>
                  <div className='col border border-dark'>
                    {i.store_package_list_id}
                  </div>
                </div>
                <div className='row'>
                  <div className='col border border-dark'>
                    Mijozdan olinadigan summa
                  </div>
                  <div className='col border border-dark'>
                    {i.cash_amount} so'm
                  </div>
                </div>
                <div className='row'>
                  <div className='col border border-dark'>
                    Yuboruvchi / Do'kon
                  </div>
                  <div className='col border border-dark'>
                    dev.100k.uz, +998555005511{" "}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <button className='btn btn-info mt-3'>Print</button>
    </div>
  );
};

export default PrintPackagesListComp;
