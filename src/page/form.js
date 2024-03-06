import { Button, Row, Col, Form, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";

export default function FormStatus() {

const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      isWorking: false,
      companyName: '',
      companyType: '',
      companyNumber: ''
    },
    resolver: yupResolver(schema),
  });

  let isUserWorking = watch("isWorking");
  let isOtherBrand = watch('favCar');

  const submitStatus = (ev) => {
    reset();
    console.log(ev);
  };

  return (
    <Form onSubmit={handleSubmit(submitStatus)}>
    <Container>
      <Row className="my-5">
        <Col
          sm={12}
          md={4}
        >
          <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                {...register("name")}
              />
              <Form.Text className="text-danger">
                {errors.name?.message}
              </Form.Text>
            </Form.Group>
        </Col>
      </Row>
      <Row className="my-5">
        <Col
          sm={12}
          md={4}
        >
          <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                {...register("email")}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
        </Col>
      </Row>
      <Row className="my-5">
          <Col
            sm={12}
            md={12}
          >
            <Form.Group>
              <Form.Check
                id="Are you Working?"
                size="lg"
                label="Are you Working?"
                {...register("isWorking")}
              />
            </Form.Group>
          </Col>
        </Row>
        {isUserWorking && (
          <Row>
            <Col
              sm={12}
              md={4}
            >
              <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  placeholder="Please type your company name"
                  {...register("companyName")}
                />
                <Form.Text className="text-danger">
                  {errors.companyName?.message}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col
              sm={12}
              md={4}
            >
              <Form.Group>
                <Form.Label>Company Type</Form.Label>
                <Form.Select {...register("companyType")}>
                  <option value="">--Select--</option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                  <option value="other">Other</option>
                </Form.Select>
                <Form.Text className="text-danger">
                  {errors.companyType?.message}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col
              sm={12}
              md={4}
            >
              <Form.Group>
                <Form.Label>Company Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Please type your company number"
                  {...register("companyNumber")}
                />
                <Form.Text className="text-danger">
                  {errors.companyNumber?.message}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
        )}
      <Row>
          <Col
            md={6}
            sm={12}
          >
            <Form.Group>
              <Form.Label>Fav Car</Form.Label>
              <Form.Select {...register("favCar")}>
                <option value="">--Select Brand--</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="bugati">Bugati</option>
                <option value="other">Other</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.favCar?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        {isOtherBrand === "other" && (
          <Row className="my-5">
            <Col
              md={6}
              sm={12}
            >
              <Form.Group>
                <Form.Label>Other Car</Form.Label>
                <Form.Control
                  placeholder="Please type other car"
                  {...register("otherCar")}
                />
                <Form.Text className="text-danger">
                  {errors.otherCar?.message}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
        )}
      <Row>
        <Col>
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Container>
    </Form>
  )
}