import React, { useContext } from "react";
import { EditAccount } from "../components/EditAccount.jsx";
import { Header } from "../components/Header.jsx";
import { InfoAccount } from "../components/InfoAccount.jsx";
import '../styles/MyAccount.scss';
import '../styles/EditAccount.scss';
import { Layaout } from "../containers/Layaout.jsx";
import { authContext } from "../context/AuthContext.js";

const MyAccount = () => {
  const [showEdit, setShowEdit] = React.useState(true);
  const { user, upDateUserProfile } = useContext(authContext);
  const handleEdit = (ev) => {
    ev.preventDefault();
    setShowEdit(!showEdit);
  };

  return (
    <>
   
      {!!showEdit 
      ? <InfoAccount handleEdit={handleEdit} user={user} />
      : <EditAccount handleEdit={handleEdit} upDateUserProfile={upDateUserProfile} user={user} />} 
      
  </>
  );
};

export { MyAccount };