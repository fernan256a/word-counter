import React, {useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

const TextContainer = ({baconData, generateBacon}) => {
  const [paragraphs, setParagraphs] = useState(1);
  const [isLorem, setLorem] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    generateBacon(paragraphs, isLorem)
  }

  const onParagraphChange = (e) => {
    setParagraphs(e.target.value);
  }

  const onLoremChange = (e) => {
    setLorem(e.target.checked);
  }

  return (
    <div>
      <Form className="d-flex justify-content-between align-items-center mb-3" onSubmit={handleSubmit}>
        <FormGroup className="d-flex align-items-center">
          <Label className="me-2" for={'para-id'}>Paragraphs</Label>
          <Input type="number" id={'para-id'} bsSize="sm" className="max-w-50px" value={paragraphs}
                 onChange={onParagraphChange}/>
        </FormGroup>
        <FormGroup check className="d-flex">
          <Label check>
            <Input type="checkbox" value={isLorem} onChange={onLoremChange}/>
            Starts with lorem
          </Label>
        </FormGroup>
        <Button color={'danger'}>Generate</Button>
      </Form>
      <div className="border p-2">{
        baconData.text.map(paragraph => <p>{paragraph}</p>)
      }</div>
    </div>
  )
}

export default TextContainer;
