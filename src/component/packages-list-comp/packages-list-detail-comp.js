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
  return (
    <div>
      <header className='d-flex flex-row justify-content-between align-items-start flex-wrap'>
        <section className='border border-secondary p-2  my-1'>
          <p>ZIN</p>
          <div className='d-flex flex-row justify-content-evenly align-items-center'>
            <BsFillCheckSquareFill size={20} color='green' className='mb-2' />
            <h5>Yuborish</h5>
          </div>
        </section>
        <section className='border border-secondary p-2  my-1'>
          <p>Pochtalar</p>
          <div className='d-flex flex-row justify-content-evenly align-items-center'>
            <AiOutlineDeliveredProcedure size={20} className='mb-2' />
            <h5>1</h5>
            <h5>ta</h5>
          </div>
        </section>
        <section className='border border-secondary p-2  my-1'>
          <p>Yo'lda</p>
          <div className='d-flex flex-row justify-content-evenly align-items-center'>
            <h5>0</h5>
            <h5>ta</h5>
          </div>
        </section>
        <section className='border border-secondary p-2  my-1'>
          <p>Sotildi</p>
          <div className='d-flex flex-row justify-content-evenly align-items-center'>
            <h5>0</h5>
            <h5>ta</h5>
          </div>
        </section>
        <section className='border border-secondary p-2  my-1'>
          <p>Atkaz</p>
          <div className='d-flex flex-row justify-content-evenly align-items-center'>
            <h5>0</h5>
            <h5>ta</h5>
          </div>
        </section>
        {/* caculating */}
        <section className='border border-secondary p-2  my-1'>
          <p>Magazinga beriladi</p>
          <div className='d-flex flex-row justify-content-evenly align-items-center'>
            <FaRegMoneyBillAlt size={20} className='mb-2' />
            <h5>0</h5>
            <h5>ta</h5>
          </div>
        </section>
        <section className='border border-secondary p-2  my-1'>
          <p>Plus</p>
          <div className='d-flex flex-row justify-content-evenly align-items-center'>
            <FaPlus size={20} color='green' className='mb-2' />
            <h5>0</h5>
            <h5>So'm</h5>
          </div>
        </section>
        <section className='border border-secondary p-2  my-1'>
          <p>Minus</p>
          <div className='d-flex flex-row justify-content-evenly align-items-center'>
            <FaMinus size={20} color='red' className='mb-2' />

            <h5>0</h5>
            <h5>So'm</h5>
          </div>
        </section>
        <section className='border border-secondary p-2  my-1'>
          <p>Dostavka summasi</p>
          <div className='d-flex flex-row justify-content-evenly align-items-center'>
            <GiTakeMyMoney size={20} color='gray' className='mb-2' />
            <h5>0</h5>
            <h5>So'm</h5>
          </div>
        </section>
      </header>
      {/* Buttons */}
      <div className='d-flex flex-row flex-wrap'>
        <button className='btn bg-warning border-warning m-2'>
          <BiArrowBack size={20} /> Listlar ro'yxatiga qaytish
        </button>
        <button className='btn bg-info text-white border-info m-2'>
          {" "}
          <AiOutlineEdit size={20} /> Tahrirlash
        </button>
        <button className='btn bg-primary text-white border-primary m-2'>
          <HiOutlineLockClosed size={20} /> Royxatni yopish
        </button>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
            <label htmlFor='store' className='fw-bold'>
              Magazin
            </label>
            <p className='p-3 bg-light'>Ma'lumot yo'q</p>
          </div>
          <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
            <label htmlFor='store' className='fw-bold'>
              Bazaga kiritdi
            </label>
            <p className='p-3 bg-light'>Ma'lumot yo'q</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
            <label htmlFor='store' className='fw-bold'>
              Ro'yxat turi
            </label>
            <p className='p-3 bg-light'>Ma'lumot yo'q</p>
          </div>
          <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
            <label htmlFor='store' className='fw-bold'>
              Kuryer
            </label>
            <p className='p-3 bg-light'>Ma'lumot yo'q</p>
          </div>
        </div>
      </div>
      <article className='overflow-auto'>
        <Tabs>
          <TabList>
            <Tab>Buyurtmalar</Tab>
            <Tab>Printerdan chiqarish</Tab>
            <Tab>Hisob kitob</Tab>
            <Tab>O'zgarishlar tarixi</Tab>
          </TabList>
          <TabPanel>
            <table class='table table-hover'>
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
                    <tr key={i.id}>
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
            <table class='table table-hover'>
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
            <table className='w-100 table table-info table-hover'>
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
