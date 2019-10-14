import React, { useState } from "react";
import Modal from "../Modal";
import { Form, ButtonRow } from "./styles";

const initialFormState = {
  firstName: "",
  lastName: "",
  hobbies: ""
};

const HobbyFormModal = ({ onSubmit, onClear, ...rest }) => {
  const [formState, setFormState] = useState(initialFormState);
  const [formError, setFormError] = useState();

  const handleInputChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, hobbies } = formState;
    if (firstName && lastName && hobbies) {
      onSubmit({ firstName, lastName, hobbies });
    } else {
      setFormError("All fields are required");
    }
  };

  const handleClear = e => {
    e.preventDefault();
    setFormState(initialFormState);
    if (onClear) {
      onClear();
    }
  };

  return (
    <Modal {...rest}>
      <Form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={formState.firstName}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            onChange={handleInputChange}
            value={formState.lastName}
          />
        </label>
        <label>
          Hobbies
          <textarea
            name="hobbies"
            onChange={handleInputChange}
            value={formState.hobbies}
          />
        </label>
        <ButtonRow>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
          <button type="submit">Submit</button>
        </ButtonRow>
        {formError && <p className="error">{formError}</p>}
      </Form>
    </Modal>
  );
};

export default HobbyFormModal;
