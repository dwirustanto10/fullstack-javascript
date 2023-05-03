import React, { useState } from 'react';
import NowLoading from './NowLoading';

const Profile = () => {
  // pros adalah sebuah parameter yang diberikan dari parent componentnya

  // jika ingin membuat component, pastkan dalam function ada return

  const [teams, setUser] = useState([
    {
      name: 'Mr Dwi',
      hobby: 'Belajar',
    },
    {
      name: 'Reni',
      hobby: 'Happy Shopping',
    },
    {
      name: 'Keiza',
      hobby: 'Religi',
    },
    {
      name: 'Malika',
      hobby: 'Art',
    },
    {
      name: 'Ciku',
      hobby: 'Mengeong',
    },
  ]);

  return (
    <div className="table-profile">
      <table className="table table-hover table-bordered">
        <thead className="bg-primary text-white">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Hobby</th>
          </tr>
        </thead>

        {/* 
Jika array teams kosong === 0,
kita akan tampilkan Nowloading
Jika arry teams lebih dari 0,
kita akan tampilkan users.map

jika pakai if:
let teams = true;
if (teams) {
  console.log(1)
} else {
  console.log(0)
}

di react tidak bisa menggunakan IF, jadi kita menggunakan tennary

teams ? console.log (1) : console.log(0)
 */}

        <tbody>
          {teams.length !== 0 ? (
            teams.map((user, index) => {
              const { name, hobby } = user;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{hobby}</td>
                </tr>
              );
            })
          ) : (
            <NowLoading />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
