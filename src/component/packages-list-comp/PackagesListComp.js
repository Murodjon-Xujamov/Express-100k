import React, { useState } from "react";
import Select from "react-dropdown-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PackagesListComp = ({ packagesListData }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div className='filter'>
        <div className='filter__column'>
          <Select placeholder='Skladni tanlang' className='select__filter' />
        </div>
        <div className='filter__column'>
          <input type={"checkbox"} />
          <p>Faqat aktiv listlar</p>
        </div>
        <div className='filter__column'>
          <input type={"checkbox"} />
          <p>Faqat ochiq listlar</p>
        </div>
        <div className='filter__column'>
          <Select placeholder="Ro'yhat turi: all" className='select__filter' />
        </div>
        <div className='filter__column'>
          <Select placeholder='Haydovchi: all' />
        </div>
        <div className='filter__column'>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className='select__filter'
          />
        </div>
      </div>

      <table className='packages__table'>
        <tr>
          <td>Id</td>
          <td>Vaqt</td>
          <td>Kuryer</td>
          <td>Magazin</td>
          <td>Aktivlashtirilgan</td>
          <td>Yopilgan</td>
          <td>Pochta soni</td>
          <td>Sklad</td>
          {/* <td>
              <input type={"checkbox"} />
            </td> */}
        </tr>

        {packagesListData.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.created_at}</td>
            <td>Kuryer</td>
            <td>{item.store_name}</td>
            <td>{item.is_active}</td>
            <td>{item.is_closed}</td>
            <td>{item.packages_count}</td>
            <td>Foziltepa 14a</td>
            {/* <td>
                <input type={"checkbox"} />
              </td> */}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default PackagesListComp;
