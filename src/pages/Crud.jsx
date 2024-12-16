import React, { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import FormModal from "../component/FormModal";

import TaskTable from "../component/TaskTable";

const Crud = () => {
  const [isOpen, setIsOpen] = useState(false);
  // todo taskleri listele

  return (
    <div className="vh-100">
      <Container>
        <Stack className="align-items-end my-5">
          <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
        </Stack>
        <TaskTable />
      </Container>
      <FormModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};

export default Crud;
