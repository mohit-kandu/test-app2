import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from "../components/Nav/Nav"
import userData from "../DummyData"
import "./Home.css"
import more from "../assets/more.png"
import sort from "../assets/sort.png"
import filter from "../assets/filter.png"
import leftArrow from "../assets/arrowLeft.png"
import rightArrow from "../assets/arrowRight.png"

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(userData)
  }, [])

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className='home'>
        <Navbar />
        <div className='px-5'>
          <div>
          </div>
          <main className='bg-white p-3 main'>
            <div className='d-flex justify-content-between table-head'>
              <h4 className='mb-5 p-3'>All tickets</h4>
              <div className='d-flex gap-4 mt-2'>
                <div className='cursor-pointer'><img src={sort} alt="sort" /><span className='sort_filter'>Sort</span></div>
                <div className='cursor-pointer'><img src={filter} alt="filter" /><span className='sort_filter'>Filter</span></div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead>
                  <tr className='table-header'>
                    <th scope="col" >Ticket details</th>
                    <th scope="col">Customer name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Priority</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody className='tickets-table-body'>
                  {
                    data.map(user => {
                      const { photoUrl, message, updated, name, ticket_date, date, time, priority } = user
                      return <tr
                        style={{ verticalAlign: "middle" }}
                      >
                        <td ><div className='d-flex align-items-center gap-4 td1'>
                          <div>
                            <img src={photoUrl} alt="user_photo" />
                          </div>
                          <div className='d-flex flex-column'>
                            <h6>{message}</h6>
                            <p className='updated'>Updated {updated} day ago</p>
                          </div>
                        </div></td>
                        <td className='td2'>
                          <div>
                            <h6>{name}</h6>
                            <p>on {ticket_date}</p>
                          </div> </td>
                        <td className='td3'>
                          <div>
                            <h6>{date}</h6>
                            <p>{time}</p>
                          </div>
                        </td>
                        <td className={`text-white`}>
                          {priority === "HIGH" && <div className={`bg-priority-danger priority`}>{priority}</div>}
                          {priority === "NORMAL" && <div className={`bg-priority-success priority`}>{priority}</div>}
                          {priority === "LOW" && <div className={`bg-priority-warning priority`}>{priority}</div>}
                        </td>
                        <td>
                          <div className='cursor-pointer'>
                            <img src={more} alt="more_options" />
                          </div>
                        </td>
                      </tr>
                    })
                  }

                </tbody>
              </table>
              <div className="pagination">
                <div>
                  <span className='me-2'>Rows per page:</span>
                  <select name="pagination" id="pagination">
                    <option value="8">8</option>
                  </select>
                </div>
                <div className='d-flex gap-4 align-items-center'>
                  <span>1-8 of 1240</span>
                  <div><img src={leftArrow} alt="left arrow" /></div>
                  <div><img src={rightArrow} alt="right arrow" /></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
