import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "hrnet-react-plugin";
import Form from "./../components/Form";

function Home() {
  useEffect(() => {
    document.title = "HRnet";
  }, []);

  const [showModal, setShowModal] = useState(false);

  const showCallback = (event) => {
    setShowModal(!showModal);
  };

  return (
    <main>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <NavLink to="/employees-list">View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <Form showModalCallback={showCallback} />
      </div>
      <Modal show={showModal} closeCallback={showCallback} style={{}}>
        Employee Created!
      </Modal>
    </main>
  );
}

export default Home;
