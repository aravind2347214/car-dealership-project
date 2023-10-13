import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router'
import AddUserModal from '../components/AddUserModal'
import FormSucessModal from '../components/FormSucessModal'
import moment from 'moment'
import { DeleteIcon } from '../components/Icons'

function AdminPanel(props) {
  const{login,setLogin}=props

  const [users,setUsers]=useState([])
  const [reviews,setReviews]=useState([])
  const [contactEmails,setContactEmails]=useState([])
  const [dealerEmails,setDealerEmails]=useState([])
  const [addUserModal,setAddUserModal]=useState(false)
  const [successModal,setSucessModal]=useState(false)
  const [userDeleted,setUserDeleted]=useState(false)

  const navigate = useNavigate()

  const getAllUsers=async()=>{
    axios.get("http://localhost:8000/get-all-users").then((res)=>{
        setUsers(res.data)
      }).catch((err)=>{
        console.log(err)
      })
  }

  const handleDelete=async(e,id)=>{
    const deleteId=id
    console.log(deleteId);
    axios.delete(`http://localhost:8000/delete-user/${deleteId}`).then((res)=>{
      setUsers(res.data)
      setUserDeleted(true)
    }).catch((err)=>{
      console.log(err)
    })
    

  }

  useEffect(()=>{
    getAllUsers()
  },[successModal])



  useEffect(()=>{
    if(users.length===0){
      getAllUsers()
    }

    if(reviews.length===0){
      axios.get("http://localhost:8000/get-all-reviews").then((res)=>{
        console.log(res.data)
        setReviews(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }

    if(contactEmails.length===0){
      axios.get("http://localhost:8000/get-all-contact-emails").then((res)=>{
        setContactEmails(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }

    if(dealerEmails.length===0){
      axios.get("http://localhost:8000/get-all-dealer-emails").then((res)=>{
        setDealerEmails(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },[])

  useEffect(()=>{
    if(!login){
      navigate("/login")
    }

  },[])

  const handleLogout=()=>{
    setLogin(false)
    navigate("/login")

  }

  const handleAddUser=()=>{
    setAddUserModal(true)
  }
  return (
    <>
    <Navbar activeTab="admin-panel" login={login}/>
   
    <div className='my-20 flex flex-col w-[95%] mx-auto relative'>
      {addUserModal&&
      <AddUserModal setModal={setAddUserModal} setSucessModal={setSucessModal}/>
      }

      {
        successModal?<FormSucessModal message="New User Added Successfully" heading="Users Updated" setModal={setSucessModal}/>:null
      }
      {
        userDeleted?
        <FormSucessModal message="One user was deleted from Users" heading="Delete Update" setModal={setUserDeleted()}/>:null
      }

      

      <div className='flex justify-end w-full '>
        <button onClick={handleLogout} className='font-bold hover:bg-[#7289da4c]   text-[#7289DA] rounded-md text-[14px] h-fit px-4 py-2'>Logout</button>
      </div>

      <div className='text-center font-bold text-[50px] text-[#7289DA] my-10'>
        Admin Panel
      </div>

      <div className='flex flex-row gap-2 flex-wrap xl:flex-nowrap'>
        
        <div className='p-2   flex flex-col gap-1 my-3 bg-gray-100 rounded-md min-w-[50%]'>
          <div className='flex flex-row justify-between text-white items-center'>
            <div className='text-[30px] font-bold text-[#7289DA]'>Users</div>
            <button className=' font-bold bg-[#7289DA] hover:bg-[#576dba] rounded-md text-[12px] h-fit px-4 py-2' onClick={handleAddUser}>Add User</button>
          </div>

          <div className=' p-1 flex flex-col gap-1  flex-1'>
          {
            users&&users.length>0?
              <table>
                  <tr >
                      
                      <th >Name</th>
                      <th >Phone</th>
                      <th >Gender</th>
                      <th>Email</th>
                      <th >Date of Birth</th>
                      <th className='text-center'>Action</th>
                  </tr>
                  <tbody class="tbody" id="tbody" className='text-[11px]'>
                    {users?.map((node)=>(
                      <tr key={node.userID}>
                        <td>{node.name}</td>
                        <td>{node.phone}</td>
                        <td>{node.gender}</td>
                        <td className='truncate'>{node.email}</td>
                        <td>{moment(node.dob).format("LL")}</td>
                        <td title='Delete' className='flex  justify-center'><button onClick={(e)=>handleDelete(e,node.userID)}><DeleteIcon/></button></td>

                      </tr>
                    ))
                    }
                  </tbody>
              </table>:
              <div className='mx-auto text-gray-300 font-semibold text-[20px] mt-[20%]'>
                No Existing Users
              </div>
          }  

          </div>

        </div>


        <div className='p-2  flex flex-col  gap-1 my-3 bg-gray-100 rounded-md'>
          <div className='text-[30px] font-bold text-[#7289DA]'>Reviews</div>
          <div className=' p-1 flex flex-col gap-1'>
            {
              reviews&&reviews.length>0?
              <table>
                  <tr >
                      <th >Name</th>
                      <th >Review</th>
                  </tr>
                  <tbody id="tbody" className='text-[11px] tbody'>
                    {reviews.map((node)=>(
                      <tr key={node.userID}>
                        <td>{node.reviewerName}</td>
                        <td>{node.reviewContent}</td>
                      </tr>
                    ))
                    }
                  </tbody>
              </table>:
              <div className='mx-auto text-gray-300 font-semibold text-[20px] mt-[20%]'>
                No Existing Users
              </div>
            }

          </div>

        </div>
      </div>

      <div className='flex flex-row gap-2 flex-wrap xl:flex-nowrap'>
      <div className='p-2  flex flex-col gap-1 my-3 bg-gray-100 rounded-md'>
        <div className='text-[30px] font-bold text-[#7289DA]'>Contact Emails</div>
        <div className=' p-1 flex flex-col gap-1'>
          {
            contactEmails&&contactEmails.length>0?
          <table>
              <tr >
                  <th >Name</th>
                  <th>Email</th>
                  <th >Query</th>
              </tr>
              <tbody class="tbody" id="tbody" className='text-[11px]'>
                {contactEmails.map((node)=>(
                  <tr key={node.userID}>
                    <td>{node.name}</td>
                    <td className='truncate'>{node.email}</td>
                    <td>{node.query}</td>
                  </tr>
                ))
                }
              </tbody>
          </table>:
          <div className='mx-auto text-gray-300 font-semibold text-[20px] mt-[20%]'>
          No Existing Users
          </div>  
          }

        </div>

      </div>

      <div className='p-2  flex flex-col gap-1 my-3 bg-gray-100 rounded-md '>
        <div className='text-[30px] font-bold text-[#7289DA]'>Dealer Emails</div>
        <div className=' p-1 flex flex-col gap-1'>
          {
            dealerEmails&&dealerEmails.length>0?
            <table>
                <tr >
                    <th >Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Dealer</th>
                </tr>
                <tbody class="tbody" id="tbody" className='text-[11px]'>
                  {dealerEmails.map((node)=>(
                    <tr key={node.eid}>
                      <td>{node.name}</td>
                      <td className='truncate'>{node.email}</td>
                      <td>{node.phone}</td>
                      <td>{node.dealerName}</td>
                    </tr>
                  ))
                  }
                </tbody>
            </table>:
            <div className='mx-auto text-gray-300 font-semibold text-[20px] mt-[20%]'>
            No Existing Users
            </div>  


          }

        </div>

      </div>

      </div>
    </div>
  

    <Footer/>
    </>
  )
}

export default AdminPanel