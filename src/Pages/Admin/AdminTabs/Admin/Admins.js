import React from "react";
import { useState, useEffect } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Admins() {
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  const navigate = useNavigate();
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetch(`/api/property/admin/admins`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setAdmins(data);
      })
      .catch(() => {
        console.error("No data to be fetched");
      });
  }, []);

  return path === "signupform" ? (
    <Outlet />
  ) : (
    <section className="admin-section">
      <table className="border-collapse border border-gray-300 rounded-t-lg overflow-hidden shadow-lg mt-6 mb-0 text-sm min-w-[400px]">
        <thead className="bg-sky-500 text-white text-left font-bold">
          <tr className="bg-sky-500 text-white text-left font-bold">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Surname</th>
            <th className="py-3 px-4">Username</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Address</th>
            <th className="py-3 px-4">Cellno</th>
          </tr>
        </thead>

        <tbody className="border-b border-b-4 border-sky-500">
          {admins.map((s, i) => (
            <tr className="border-b even:bg-cyan-100" key={i}>
              <td className="py-3 px-4">{s.name}</td>
              <td className="py-3 px-4">{s.surName}</td>
              <td className="py-3 px-4">{s.userName}</td>
              <td className="py-3 px-4">{s.email}</td>
              <td className="py-3 px-4">{s.userAddress}</td>
              <td className="py-3 px-4">{s.cellPhone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button 
        id="bottom-right-button" 
        className="fixed bottom-20 right-20 px-4 py-3 bg-sky-500 hover:bg-blue-500 text-white rounded-md shadow-md cursor-pointer" 
        onClick={() => navigate("signupform")}>
        + Sign Up
      </button>
    </section>
  );
}

export default Admins;
