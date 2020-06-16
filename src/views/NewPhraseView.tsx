import React from "react";
import MainTemplate from "templates/MainTemplate";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import SectionHeading from "components/SectionHeading";

const StyledForm = styled(Form)`
  max-width: 700px;
`;

const NewPhraseView: React.FC = () => (
  <MainTemplate>
    <SectionHeading>Add new phrase</SectionHeading>
    <StyledForm>
      <Form.Group>
        <Form.Label>Phrase</Form.Label>
        <Form.Control type="text" placeholder="e.g. lazily computation" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Translation</Form.Label>
        <Form.Control type="text" placeholder="e.g. leniwe obliczenia" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Stage</Form.Label>
        <Form.Control type="range" min="1" max="4" step="1" defaultValue="1" />
        <Form.Text muted>
          Stage means how close you are with the phrase (it usually starts from
          scratch)
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" size="lg">
        Submit
      </Button>
    </StyledForm>
  </MainTemplate>
);

export default NewPhraseView;
