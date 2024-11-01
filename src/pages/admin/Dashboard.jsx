import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [messages, setMessage] = useState([]);
  const [users, setUsers] = useState([]);
  const [messengerMsg, setMessengerMsg] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const users_message = await axios.get(
          "http://localhost:5000/users_message_to_palash"
        );
        const users = await axios.get(
          "http://localhost:5000/registered_users_of_palash_portfolio"
        );
        const messengerMsg = await axios.get(
          "http://localhost:5000/messengerMessage"
        );

        setMessage(users_message.data);
        setUsers(users.data);
        setMessengerMsg(messengerMsg.data);
      } catch (error) {
        console.log(error?.message);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div className=" border">
        {messengerMsg.map((msg) => (
          <Link
            className="block mb-3"
            to={`/dashboard/replay_to/${msg.email}/${msg._id}`}>
            {msg._id}
          </Link>
        ))}
      </div>
      {/* {users.length == 0 || messages.length == 0 ? (
        <h1 className="text-center text-2xl p-2">Please wait</h1>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-2">
          <div className="border">
            <h1 className="text-center font-bold text-lg">
              Total registered users: {users.length}
            </h1>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Uid</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td title={user.uid}>{user.uid.slice(0, 10)}...</td>
                      {user.providerData.map((info) => (
                        <>
                          <td>{info.displayName}</td>
                          <td>{info.email}</td>
                          <td>
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={info.photoURL}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </td>
                        </>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="border">
            <h1 className="text-center font-bold text-lg">
              Message from users: {messages.length}
            </h1>
            <div className="overflow-x-auto">
              <table className="table">
                
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Sending time</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((message) => (
                    <tr className="bg-base-200" key={message._id}>
                      <th>{message.name}</th>
                      <td>{message.email}</td>
                      <td>
                        {message?.sendingTime ? message?.sendingTime : null}
                      </td>
                      <td className="h-28 overflow-y-auto">
                        {message.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}
