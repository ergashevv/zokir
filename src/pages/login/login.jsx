import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <div className="container-min mt-5 pt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telefon raqamingiz</Form.Label>
                        <Form.Control type="tel" placeholder="+998 999 99 99" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Parol</Form.Label>
                        <Form.Control type="password" placeholder="*******" />
                    </Form.Group>
                    <div className="buttons d-flex justify-content-between align-items-center">
                        <Button style={{
                            width: "50%",
                            height: "52px",
                        }} variant="dark" type="submit">
                            Jo'natish
                        </Button>
                        <Link to="/register">Ro'yhatdan o'tish</Link>
                    </div>
                </Form>

            </div>
        </>
    )
}
export default Login