import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const [sms, setSms] = useState(false)

    return (
        <>
            <div className="register container-min pt-5 mt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telefon raqami</Form.Label>
                        <Form.Control type="email" placeholder="+998 999 99 99" />
                    </Form.Group>
                    {
                        sms &&
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Tastiqlash kodi</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    }
                    <div style={{
                        textAlign: "center"
                    }}>
                        <Button onClick={() => !sms ? setSms(true) : navigate('/client')} variant="dark" type="submit">
                            Ro'yhatdan o'tish
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}
export default Register