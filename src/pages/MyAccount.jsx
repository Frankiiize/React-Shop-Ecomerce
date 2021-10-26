import React from "react";
import { EditAccount } from "../components/EditAccount.jsx";
import { Header } from "../components/Header.jsx";
import { InfoAccount } from "../components/InfoAccount.jsx";
import '../styles/MyAccount.scss';
import '../styles/EditAccount.scss';
import { Layaout } from "../containers/Layaout.jsx";

const MyAccount = () => {
  const [showEdit, setShowEdit] = React.useState(true);
  const handleEdit = (ev) => {
    ev.preventDefault();
    setShowEdit(!showEdit);
  };

  return (
    <>
      <Header />
      {!!showEdit 
      ? <InfoAccount handleEdit={handleEdit} />
      : <EditAccount handleEdit={handleEdit} />} 
      
  </>
  );
};

export { MyAccount };