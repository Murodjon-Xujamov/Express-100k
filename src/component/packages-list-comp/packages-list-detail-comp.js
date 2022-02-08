import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { AiOutlineDeliveredProcedure, AiOutlineEdit } from "react-icons/ai";
import { FaRegMoneyBillAlt, FaPlus, FaMinus } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";
import { HiOutlineLockClosed } from "react-icons/hi";

const PackagesListDetailComp = ({ packageListDetailData }) => {
  console.log("aa", packageListDetailData);
  return (
    <div>
      <header className='header__info__row'>
        <section className='header__column'>
          <p>ZIN</p>
          <div className='column__row'>
            <BsFillCheckSquareFill className='package__detail__icons' />
            <h5>Yuborish</h5>
          </div>
        </section>
        <section className='header__column'>
          <p>Pochtalar</p>
          <div className='column__row'>
            <AiOutlineDeliveredProcedure className='package__detail__icons' />
            <h3>1</h3>
            <h3>ta</h3>
          </div>
        </section>
        <section className='header__column'>
          <p>Yo'lda</p>
          <div className='column__row'>
            <h3>0</h3>
            <h3>ta</h3>
          </div>
        </section>
        <section className='header__column'>
          <p>Sotildi</p>
          <div className='column__row'>
            <h3>0</h3>
            <h3>ta</h3>
          </div>
        </section>
        <section className='header__column'>
          <p>Atkaz</p>
          <div className='column__row'>
            <h3>0</h3>
            <h3>ta</h3>
          </div>
        </section>
        {/* caculating */}
        <section className='header__column'>
          <p>Magazinga beriladi</p>
          <div className='column__row'>
            <FaRegMoneyBillAlt className='package__detail__icons' />
            <h3>0</h3>
            <h3>ta</h3>
          </div>
        </section>
        <section className='header__column'>
          <p>Plus</p>
          <div className='column__row'>
            <FaPlus className='package__detail__icons' />
            <h3>0</h3>
            <h3>So'm</h3>
          </div>
        </section>
        <section className='header__column'>
          <p>Minus</p>
          <div className='column__row'>
            <FaMinus className='package__detail__icons' />

            <h3>0</h3>
            <h3>So'm</h3>
          </div>
        </section>
        <section className='header__column'>
          <p>Dostavka summasi</p>
          <div className='column__row'>
            <GiTakeMyMoney className='package__detail__icons' />
            <h3>0</h3>
            <h3>So'm</h3>
          </div>
        </section>
      </header>
      <div className='buttons__container'>
        <button className='btn bg-warning'>
          <BiArrowBack /> Listlar ro'yxatiga qaytish
        </button>
        <button className='btn bg-info text-white'>
          {" "}
          <AiOutlineEdit /> Tahrirlash
        </button>
        <button className='btn bg-primary text-white'>
          <HiOutlineLockClosed /> Royxatni yopish
        </button>
      </div>
      <section className='main__info'>
        <div className='main__info__row'>
          <div>
            <label htmlFor='store'>Magazin</label>
            <p>asdfggh</p>
          </div>
          <div>
            <label htmlFor='store'>Bazaga kiritdi</label>
            <p>asdfggh</p>
          </div>
        </div>
        <div className='main__info__row'>
          <div>
            <label htmlFor='store'>Ro'yxat turi</label>
            <p>asdfggh</p>
          </div>
          <div>
            <label htmlFor='store'>Kuryer</label>
            <p>asdfggh</p>
          </div>
        </div>
      </section>
      <article className='package__tabs'>
        <Tabs>
          <TabList>
            <Tab>Buyurtmalar</Tab>
            <Tab>Printerdan chiqarish</Tab>
            <Tab>Hisob kitob</Tab>
            <Tab>O'zgarishlar tarixi</Tab>
          </TabList>
          <TabPanel>
            <table class='table'>
              <thead>
                <tr>
                  <th scope='col'>Id</th>
                  <th scope='col'>Kimdan/Qayerdan</th>
                  <th scope='col'>Kimga/Qayerga</th>
                  <th scope='col'>Jo'natma</th>
                  <th scope='col'>Kuryer</th>
                  <th scope='col'>Holat</th>
                  <th scope='col'>Sana</th>
                  <th scope='col'>Amallar</th>
                </tr>
              </thead>
              <tbody>
                {packageListDetailData &&
                  packageListDetailData.store_packages.map((i) => (
                    <tr>
                      <th>{i.id}</th>
                      <td>{i.from_full_address}</td>
                      <td>
                        {i.recipient_name},<br /> {i.recipient_phone} <br />
                        {i.to_full_address}
                      </td>
                      <td>
                        {i.matter} 1 ta 149000 som <br /> #izoh: {i.note}
                      </td>
                      <td>Kuryerga topshirilmagan 30000 som</td>
                      <td>
                        <BsFillCheckSquareFill />
                      </td>
                      <td>{i.created_at}</td>
                      <td></td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <table class='table'>
              <thead>
                <tr>
                  <th scope='col'>Id</th>
                  <th scope='col'>Amount</th>
                  <th scope='col'>Type</th>

                  <th scope='col'>Comment</th>
                  <th scope='col'>Created_at</th>
                  <th scope='col'>Target_Id</th>
                  <th scope='col'>Target_type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>4770</th>
                  <td>1000</td>
                  <td>plus</td>
                  <td>Qoshimcha mahsulot berib yubordi </td>
                  <td>пн, 31 янв. 2022 г., 0:12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
          <TabPanel>
            <table className='w-100 table table-info'>
              <thead className='border-dark'>
                <tr>
                  <th>Vaqt</th>
                  <th>Admin</th>
                  <th>Polya</th>
                  <th>Oldin</th>
                  <th>Keyin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2022-01-31 05:07:59</td>
                  <td>1</td>
                  <td>store_id</td>
                  <td></td>
                  <td>69135</td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
      </article>
    </div>
  );
};

export default PackagesListDetailComp;
