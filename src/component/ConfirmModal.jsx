import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/slice/crudSlice";

const ConfirmModal = ({ close, isOpen, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(id));
    close();
    console.log(id);
  };
  return (
    <Modal
      className="text-dark"
      show={isOpen}
      onHide={close}
      animation={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Silmek istediğinizden emin misiniz?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Bu işlem geri alınamaz</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          İptal Et
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Sil
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
