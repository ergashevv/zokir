import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Clinet = () => {
    const [value, setValue] = useState('')
    console.log(value);
    const Region = [
        {
            name: "Andijon viloyati"
        },
        {
            name: "Buxoro  viloyati"
        },
        {
            name: "Fargʻona viloyati"
        },
        {
            name: "Jizzax viloyati"
        },
        {
            name: "Xorazm viloyati"
        },
        {
            name: "Namangan viloyati"
        },
        {
            name: "Navoiy viloyati"
        },
        {
            name: "Qashqadaryo viloyati	"
        },
        {
            name: "Qoraqalpogʻiston Respublikasi"
        },
        {
            name: "Samarqand viloyati"
        },
        {
            name: "Sirdaryo viloyati"
        },
        {
            name: "Surxondaryo viloyati"
        },
        {
            name: "Toshkent viloyati"
        }
    ]
    const Andijon = [
        {
            name: "Andijon (tuman)"
        },
        {
            name: "Asaka tumani"
        },
        {
            name: "Baliqchi tumani"
        },
        {
            name: "Boʻston (tuman)"
        },
        {
            name: "Izboskan (tuman)"
        },
        {
            name: "Xoʻjaobod tumani"
        },
        {
            name: "Qoʻrgʻontepa tumani"
        },
        {
            name: "Marhamat tumani"
        },
        {
            name: "Oltinkoʻl (tuman)"
        },
        {
            name: "Paxtaobod tumani"
        },
        {
            name: "Shahrixon (tuman)"
        },
        {
            name: "Ulugʻnor (tuman)"
        },
    ]
    const Buxoro = [
        {
            name: "Olot tumani"
        },
        {
            name: "Buxoro tumani"
        },
        {
            name: "Gʻijduvon tumani"
        },
        {
            name: "Jondor tumani"
        },
        {
            name: "Kogon tumani"
        },
        {
            name: "Jondor tumani"
        },
        {
            name: "Gʻijduvon tumani"
        },
        {
            name: "Buxoro tumani"
        },
        {
            name: "Oltinkoʻl (tuman)"
        },
        {
            name: "Paxtaobod tumani"
        },
        {
            name: "Shahrixon (tuman)"
        },
        {
            name: "Ulugʻnor (tuman)"
        },
    ]
    const Fargona = [

        {
            name: "Oltiariq tumani	Oltiariq"
        },
        {
            name: "Bagʻdod tumani"
        },
        {
            name: "Beshariq tumani	(Beshariq)"
        },
        {
            name: "Dangʻara tumani	(Dangʻara)"
        },
        {
            name: "Fargʻona tumani	(Vodil)"
        },
        {
            name: "Furqat tumani"
        },
        {
            name: "Qoʻshtepa tumani"
        },
        {
            name: "Quva"
        },
        {
            name: "Rishton tumani"
        },
        {
            name: "Soʻx tumani"
        },
        {
            name: "Toshloq tumani"
        },
        {
            name: "Uchkoʻprik tumani"
        },
        {
            name: "Oʻzbekiston tumani"
        },
        {
            name: "Yozyovon tumani"
        }
    ]
    const Jizzax = [

        {
            name: "Arnasoy tumani"
        },
        {
            name: "Baxmal tumani"
        },
        {
            name: "Doʻstlik tumani"
        },
        {
            name: "Forish tumani"
        },
        {
            name: "Gʻallaorol tumani"
        },
        {
            name: "Sharof Rashidov tumani"
        },
        {
            name: "Mirzachoʻl tumani"
        },
        {
            name: "Paxtakor tumani"
        },
        {
            name: "Yangiobod tumani"
        },
        {
            name: "Zomin tumani"
        },
        {
            name: "Zafarobod tumani"
        },
        {
            name: "Zarbdor tumani"
        },
    ]
    let City = value === 'Buxoro  viloyati' && Buxoro || value === "Andijon viloyati" && Andijon || value === "Fargʻona viloyati" && Fargona || value === "Jizzax viloyati" && Jizzax

    return (
        <>
            <div className="register container pt-5 mt-5">
                <Form>
                    <Row>
                        <Col xs>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ismi</Form.Label>
                                <Form.Control type="text" placeholder="Ism" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Familiya</Form.Label>
                                <Form.Control type="text" placeholder="Familiya" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Sharifi</Form.Label>
                                <Form.Control type="text" placeholder="Sharifi" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Yashash manzili</Form.Label>
                                <Form.Select onChange={(e) => setValue(e.target.value)} className='mb-3' aria-label="Default select example">
                                    <option value="">Viloyatingizni tanlang</option>
                                    {
                                        Region.map((i, k) => (
                                            <option key={k} value={i.name}>{i.name}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                            {value && <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Yashash manzili</Form.Label>
                                <Form.Select className='mb-3' aria-label="Default select example">
                                    {
                                        value && City?.map((i, k) => (
                                            <option key={k} value={i.name}>{i.name}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>}

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Yashash manzilingizni to'liq qoldiring</Form.Label>
                                <Form.Control type="text" placeholder="Buxoro shahar Vobkent tumani, Afrosiyob ko'chasi 22-xonadon" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Passport seriya</Form.Label>
                                <Form.Control type="text" placeholder="Seriya" />
                            </Form.Group>
                        </Col>
                        <Col xs>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Tug'ulgan sana</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Passport raqami</Form.Label>
                                <Form.Control type="text" placeholder="xxxxx" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>O'qish joyi</Form.Label>
                                <Form.Control type="email" placeholder="Kodni kiriting" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Rasm 3x4</Form.Label>
                                <Form.Control type="file" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Passport file</Form.Label>
                                <Form.Control type="file" placeholder="Kodni kiriting" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Parol</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                    </Row>

                </Form>
            </div>
        </>
    )
}
export default Clinet