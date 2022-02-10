import React, { useState } from "react";
import Select from "react-dropdown-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ContentLoading from "../loading/content-loading";
import { Link } from "react-router-dom";

const PackagesListComp = ({ packagesListData, loading }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <div className='container mw-100'>
        <div className='row'>
          <div className='col-12 col-lg-2 col-md-4 col-sm-6 mt-2'>
            <Select placeholder='Skladni tanlang' className='select__filter' />
          </div>
          <div
            className='col-12 col-lg-2 col-md-4 col-sm-6 mt-2
           d-flex flex-row justify-content-evenly align-items-center'>
            <input className='' type={"checkbox"} />
            <p className='m-0'>Faqat aktiv listlar</p>
          </div>
          <div className='col-12 col-lg-2 col-md-4 col-sm-6 mt-2 d-flex flex-row justify-content-evenly align-items-center'>
            <input type={"checkbox"} />
            <p className='m-0'>Faqat ochiq listlar</p>
          </div>
          <div className='col-12 col-lg-2 col-md-4 col-sm-6 mt-2'>
            <Select
              placeholder="Ro'yhat turi: all"
              className='select__filter'
            />
          </div>
          <div className='col-12 col-lg-2 col-md-4 col-sm-6 mt-2'>
            <Select placeholder='Haydovchi: all' />
          </div>
          <div className='col-12 col-lg-2 col-md-4 col-sm-6 mt-2'>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className=' p-1 w-100'
            />
          </div>
        </div>
      </div>

      {loading ? (
        <ContentLoading />
      ) : (
        <div className='overflow-auto'>
          <table className='table table-hover  mt-4'>
            <thead>
              <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Vaqt</th>
                <th scope='col'>Kuryer</th>
                <th scope='col'>Magazin</th>
                <th scope='col'>Aktivlashtirilgan</th>
                <th scope='col'>Yopilgan</th>
                <th scope='col'>Pochta soni</th>
                <th scope='col'>Sklad</th>
                <th scope='col'></th>
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
                    <td>
                      <Link
                        to={`/packages-list/detail/${item.id}`}
                        className='text-info text-decoration-none'>
                        Batafsil
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PackagesListComp;
