import React, { useState } from "react";
import Select from "react-dropdown-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ContentLoading from "../loading/content-loading";
import { Link } from "react-router-dom";

const PackagesListComp = ({ packagesListData, loading }) => {
  const [startDate, setStartDate] = useState(new Date());

  console.log("dd0", packagesListData);

  return (
    <div>
      <div className='filter mt-2'>
        <div className='filter__column'>
          <Select placeholder='Skladni tanlang' className='select__filter' />
        </div>
        <div className='filter__column'>
          <input className='' type={"checkbox"} />
          <p className=''>Faqat aktiv listlar</p>
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
            className=' p-1 '
          />
        </div>
      </div>

      {loading ? (
        <ContentLoading />
      ) : (
        <table className='packages__table mt-4'>
          <thead>
            <tr>
              <td>Id</td>
              <td>Vaqt</td>
              <td>Kuryer</td>
              <td>Magazin</td>
              <td>Aktivlashtirilgan</td>
              <td>Yopilgan</td>
              <td>Pochta soni</td>
              <td>Sklad</td>
              <td>
                <input type={"checkbox"} />
              </td>
            </tr>
          </thead>
          <tbody>
            {packagesListData &&
              packagesListData?.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.created_at}</td>
                  <td>Kuryer</td>
                  <td>{item.store_name}</td>
                  <td>{item.is_active}</td>
                  <td>{item.is_closed}</td>
                  <td>{item.packages_count}</td>
                  <td>Foziltepa 14a</td>
                  <Link to={`/packages-list-detail/${item.id}`}>Batafsil</Link>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PackagesListComp;
