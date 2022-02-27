import React from "react";

export default class CardPrintPackagesListComp extends React.Component {
  render() {
    return (
      <div className='container mt-3 '>
        <div className='row'>
          {this.props.packageListDetailData &&
            this.props.packageListDetailData.store_packages.map((i) => (
              <div
                className='col-6 col-lg-6 col-md-6 col-sm-12 border border-dark'
                style={{ fontSize: "13px" }}>
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
    );
  }
}
