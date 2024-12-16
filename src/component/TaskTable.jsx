import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";

import ConfirmModal from "./ConfirmModal";
import FormModal from "./FormModal";
const TaskTable = () => {
  const { tasks } = useSelector((store) => store.crudSlice);
  const [isDelOpen, setIsDelOpen] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(null);

  return (
    <Table variant="dark" responsive striped hover bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Görev</th>
          <th>Yazan</th>
          <th>Atanan</th>
          <th>Tarih</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, i) => (
          <React.Fragment key={task.id}>
            <tr>
              <td>{i + 1}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned}</td>
              <td>{task.end_date}</td>
              <td>
                <Button onClick={() => setIsEditOpen(task.id)}>
                  <MdEdit size={12} />
                </Button>
                <Button
                  onClick={() => setIsDelOpen(task.id)}
                  className="ms-2"
                  variant="danger"
                >
                  <FaTrashAlt size={12} />
                </Button>
              </td>
            </tr>
            {isEditOpen === task.id && (
              <FormModal
                task={task}
                isOpen={true}
                close={() => setIsEditOpen(null)}
              />
            )}
            {isDelOpen === task.id && (
              <ConfirmModal
                id={task.id}
                isOpen={true}
                close={() => setIsDelOpen(null)}
              />
            )}
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default TaskTable;
