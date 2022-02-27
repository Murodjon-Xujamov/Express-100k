import React from "react";

export default class TablePrintPackagesListComp extends React.Component {
  render() {
    return (
      <div className='container text-start overflow-auto p-1'>
        <div className='container p-0 border border-dark overflow-auto'>
          <table className='table table-hover fs-6'>
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
              {this.props.packageListDetailData &&
                this.props.packageListDetailData.store_packages.map((i) => (
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
          {this.props.packageListDetailData &&
            this.props.packageListDetailData.store_packages.map((i) => (
              <div
                className='container bg-light p-1'
                style={{ fontSize: "13px" }}>
                <div>Ro'yhat ID: 226 </div>
                <div>Do'kon: dev.100k.uz, +998555005511 </div>
                <div>
                  Umumiy mijozdan olinadigan summa: {i.cash_amount} so'm{" "}
                </div>
                <div>
                  Umumiy yetqazib berish summasi: {i.delivery_fee_amount} so'm{" "}
                </div>
                <div>Umumiy jo'natmalar soni: 1 ta </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
