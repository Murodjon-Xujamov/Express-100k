import React from "react";

export default class PrintPackagesComp extends React.Component {
  render() {
    return (
      <div className='p-2'>
        <table class='table table-hover border border-dark'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Qayerdan</th>
              <th scope='col'>Qayerga</th>
              <th scope='col'>Mahsulot</th>
              <th scope='col'>Xaridor</th>
              <th scope='col'>Xarodor raqami</th>
              <th scope='col'>Vaqt</th>
              <th scope='col'>Dastavka summasi</th>
              <th scope='col'>Umumiy summasi</th>
            </tr>
          </thead>
          <tbody>
            <tr key={this.props.deliveryList.id}>
              <td>{this.props.deliveryList.id}</td>
              <td>{this.props.deliveryList.from_full_address}</td>
              <td>{this.props.deliveryList.to_full_address}</td>
              <td>{this.props.deliveryList.matter}</td>
              <td>{this.props.deliveryList.recipient_name}</td>
              <td>{this.props.deliveryList.recipient_phone}</td>
              <td>{this.props.deliveryList.created_at}</td>
              <td>{this.props.deliveryList.delivery_fee_amount}</td>
              <td>{this.props.deliveryList.cash_amount}</td>
            </tr>
          </tbody>
        </table>

        <div
          className='col-6 col-lg-6 col-md-6 col-sm-12 border border-dark p-2'
          style={{ fontSize: "13px" }}>
          <div className='row'>
            <div className='col'>ID/Sana</div>
            <div className='col'>
              {this.props.deliveryList.id} /{" "}
              {this.props.deliveryList.created_at}
            </div>
          </div>
          <div className='row'>
            <div className='col'>Qabul qiluvchi mijoz</div>
            <div className='col'>
              {this.props.deliveryList.recipient_name},{" "}
              {this.props.deliveryList.recipient_phone}
            </div>
          </div>
          <div className='row'>
            <div className='col'>Yetkazib berish manzili</div>
            <div className='col'>{this.props.deliveryList.to_full_address}</div>
          </div>
          <div className='row'>
            <div className='col'>Jo'natma</div>
            <div className='col'>{this.props.deliveryList.matter}</div>
          </div>
          <div className='row'>
            <div className='col'>Izoh</div>
            <div className='col'>{this.props.deliveryList.note}</div>
          </div>

          <div className='row'>
            <div className='col'>Mijozdan olinadigan summa</div>
            <div className='col'>
              {this.props.deliveryList.cash_amount} so'm
            </div>
          </div>
          <div className='row'>
            <div className='col'>Yuboruvchi</div>
            <div className='col'>
              {this.props.deliveryList.from_full_address}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
