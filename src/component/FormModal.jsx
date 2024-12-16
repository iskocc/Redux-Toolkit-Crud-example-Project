import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { input } from "../constant";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/slice/crudSlice";

const FormModal = ({ isOpen, close, task }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const taskData = Object.fromEntries(formData.entries());
    if (!task) {
      dispatch(addTask(taskData));
    } else {
      dispatch(updateTask({ id: task.id, ...taskData }));
    }
    close();
  };
  return (
    <Modal
      size="lg"
      show={isOpen}
      centered
      className="text-black"
      onHide={close}
    >
      <Modal.Header closeButton>
        <Modal.Title>{task ? "Veriyi Düzenle" : "Yeni Görev Ekle"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          {input.map((prop, key) => (
            <Form.Group key={key}>
              <Form.Label>{prop.label}</Form.Label>
              <Form.Control
                name={prop.name}
                placeholder={prop.holder}
                required
                type={prop.type}
                defaultValue={task && task[prop.name]}
              />
            </Form.Group>
          ))}
          <Modal.Footer>
            <Button onClick={close} variant="secondary">
              İptal Et
            </Button>
            <Button type="submit" variant={task ? "primary" : "success"}>
              {task ? "Düzenle" : " Ekle"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
