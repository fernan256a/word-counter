import React, {useState} from "react";
import {Button, Col, Form, Input, Label, Row} from "reactstrap";

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
      <Form className="mb-3" onSubmit={handleSubmit}>
        <Row className="d-flex justify-content-between align-items-center">
          <Col xs={6} sm={4} className="align-items-center d-flex">
            <Label className="me-2" for={'para-id'}>Paragraphs</Label>
            <Input type="number" id={'para-id'} bsSize="sm" className="max-w-50px" value={paragraphs}
                   onChange={onParagraphChange}/>
          </Col>
          <Col xs={6} sm={4} className="text-center">
            <Label check>
              <Input type="checkbox" value={isLorem} onChange={onLoremChange} className="me-2"/>
              <span>Starts with lorem</span>
            </Label>
          </Col>
          <Col xs={12} sm={4} className="text-end mt-2 mt-sm-0">
            <Button color={'danger'} className="w-sm-100">Generate</Button>
          </Col>
        </Row>
      </Form>
      <div className="border p-2">{
        baconData.text.map(paragraph => <p>{paragraph}</p>)
      }</div>
    </div>
  )
}

export default TextContainer;
