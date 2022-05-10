import { Form, Button, Col, Row, Image } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
import { Text } from 'vue'

const Order = () => {

    const [prefixname, setPrefixname] = useState('นาย')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [gender, setGender] = useState('ชาย')
    const [dob, setDob] = useState('')
    const [identityType, setIdentityType] = useState('identity_id')
    const [identityId, setIdentityId] = useState('')
    const [passport, setPassport] = useState('')
    const [national, setNational] = useState('')

    const [line, setLine] = useState('')
    const [email, setEmail] = useState('')

    const [houseid, setHouseid] = useState('')
    const [villageno, setVillageno] = useState('')
    const [villagename, setVillagename] = useState('')
    const [room, setRoom] = useState('')
    const [avenue, setAvenue] = useState('')
    const [alley, setAlley] = useState('')
    const [vacList, setVacList] = useState([])
    const [vacid, setVacid] = useState()
    const [date, setDate] = useState('')
    const [timestart, setTimestart] = useState()
    const [timeend, setTimeend] = useState()



    // const [dob, setDob] = useState('')

    const GetVaccine = async () => {
        console.log(firstname)
        console.log("test")
        await axios.get(`/vaccine/${dob}`)
            .then(res => {
                setVacList(res.data.message)
                console.log(res.data)
            })
    }

    const SubmitData = async () => {

        var data = {

            prefix_name: prefixname,
            firstname: firstname,
            lastname: lastname,
            gender_type: gender,
            dob: dob + "T00:00:00Z",
            identity_card_type: identityType,
            identity_id: identityId,
            passport: passport,
            national: national,

            house_id: houseid,
            village_no: villageno,
            village_name: villagename,
            room: room,
            avenue: avenue,
            alley: alley,

            line_id: line,
            email: email,

            vaccine_id: parseInt(vacid),

            date: date + "T00:00:00Z",
            time_start: timestart


        }
        console.log(data)
        await axios.post("/register", data)
            .then(res => {
                console.log(res.status)
            })


    }

    return (
        <Form style={{ marginTop: '10%', paddingLeft: '0%' }}>
            <Row>
                <div style={{ fontSize: 23, marginBottom: 8 }}>ข้อมูลผู้ลงทะเบียนรับวัคซีน</div>
                <hr />
                <Col>
                    <Form.Group className="mb-3" >
                        <Form.Label>คำนำหน้า*</Form.Label>
                        <Form.Control
                            as="select"
                            style={{ width: '75%' }}
                            onChange={e => setPrefixname(e.target.value)}
                        >
                            <option value="นาย">นาย</option>
                            <option value="นาง">นาง</option>
                            <option value="นางสาว">นางสาว</option>
                            <option value="ด.ช.">ด.ช.</option>
                            <option value="ด.ญ.">ด.ญ.</option>



                        </Form.Control>

                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>ชื่อ*</Form.Label>
                        <Form.Control type="text" placeholder=""
                            style={{ width: '75%' }}
                            onChange={e => setFirstname(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>นามสกุล*</Form.Label>
                        <Form.Control type="text" placeholder=""
                            style={{ width: '75%' }}
                            onChange={e => setLastname(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>เพศ*</Form.Label>
                        <Form.Control
                            as="select"
                            style={{ width: '75%' }}
                            onChange={e => setGender(e.target.value)}
                        >
                            <option value="ชาย">ชาย</option>
                            <option value="หญิง">หญิง</option>


                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>วัน-เดือน-ปี เกิด*</Form.Label>
                        <Form.Control type="text" placeholder="YEAR-MM-DAY (2000-05-02)"
                            style={{ width: '75%' }}
                            onChange={e => setDob(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>บัตรประจำตัว*</Form.Label>
                        <Form.Control
                            as="select"
                            style={{ width: '75%' }}
                            onChange={e => setIdentityType(e.target.value)}
                        >
                            <option value="identity_id">บัตรประชาชน</option>
                            <option value="pink">บัตรชมพู</option>
                            <option value="passport">พาสปอร์ต</option>


                        </Form.Control>
                    </Form.Group>
                    {identityType != 'passport' ?
                        <Form.Group className="mb-3" >
                            <Form.Label>หมายเลขบัตรประจำตัว</Form.Label>
                            <Form.Control type="text" placeholder="13 หลัก"
                                style={{ width: '75%' }}
                                onChange={e => setIdentityId(e.target.value)} />
                        </Form.Group>
                        : null
                    }
                    {identityType != 'identity_id' ?
                        <>
                            <Form.Group className="mb-3" >
                                <Form.Label>หมายเลขพาสปอร์ต*</Form.Label>
                                <Form.Control type="text" placeholder=""
                                    style={{ width: '75%' }}
                                    onChange={e => setPassport(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>สัญชาติ*</Form.Label>
                                <Form.Control
                                    as="select"
                                    style={{ width: '75%' }}
                                    onChange={e => setNational(e.target.value)}
                                >
                                    <option value="กัมภูชา">กัมภูชา</option>
                                    <option value="เมียนมา">เมียนมา</option>
                                    <option value="ไม่ระบุ">ไม่ระบุ</option>
                                    <option value="ลาว">ลาว</option>


                                </Form.Control>
                            </Form.Group>
                        </>
                        : null
                    }

                    <div style={{ fontSize: 23, marginBottom: 8 }}>ข้อมูลการติดต่อ</div>
                    <hr />
                    <Form.Group className="mb-3" >
                        <Form.Label>Line ID</Form.Label>
                        <Form.Control type="text" placeholder=""
                            style={{ width: '75%' }}
                            onChange={e => setLine(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>อีเมล</Form.Label>
                        <Form.Control type="text" placeholder=""
                            style={{ width: '75%' }}
                            onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <div style={{ fontSize: 23, marginBottom: 8 }}>ที่อยู่</div>
                    <hr />

                    <Form.Group className="mb-3" >
                        <Form.Label>บ้านเลขที่*</Form.Label>
                        <Form.Control type="number" placeholder=""
                            style={{ width: '75%' }}
                            onChange={e => setHouseid(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>หมู่</Form.Label>
                        <Form.Control type="text" placeholder=""
                            style={{ width: '75%' }}
                            onChange={e => setVillageno(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>หมู่บ้าน</Form.Label>
                        <Form.Control type="text" placeholder=""
                            style={{ width: '75%' }}
                            onChange={e => setVillagename(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>อาคาร / ชั้น / ห้อง</Form.Label>
                        <Form.Control type="text" placeholder=""
                            style={{ width: '75%' }}
                            onChange={e => setRoom(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>ถนน*</Form.Label>
                        <Form.Control type="text" placeholder=""
                            style={{ width: '75%' }}
                            onChange={e => setAvenue(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>ซอย</Form.Label>
                        <Form.Control type="text" placeholder=""
                            style={{ width: '75%' }}
                            onChange={e => setAlley(e.target.value)} />
                    </Form.Group>

                    <div style={{ fontSize: 23, marginBottom: 8 }}> เลือกสถานที่ และเข็มที่ต้องการฉีด (ชนิดวัคซีนที่ได้รับ ขึ้นอยู่กับกรมการแพทย์จัดสรรในแต่ละวัน)</div>
                    <hr />

                    <Form.Group className="mb-3" >
                        <Button variant="primary" onClick={() => GetVaccine()}>
                            Reload
                        </Button>
                        <Form.Control
                            as="select"
                            style={{ width: '75%', marginTop: 10 }}
                            onChange={e => setVacid(e.target.value)}
                        >
                            {
                                vacList.map((item, i) => (
                                    <option value={item.vaccine_id}>{item.vaccine_name} เข็ม {item.vaccine_seq + ' '}

                                        {item.vaccine_desc}
                                    </option>
                                ))
                            }


                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>วันที่</Form.Label>
                        <Form.Control
                            as="select"
                            style={{ width: '75%' }}
                            onChange={e => setDate(e.target.value)}
                        >
                            <option value="2022-05-12">12-05-2022</option>
                            <option value="2022-05-13">13-05-2022</option>
                            <option value="2022-05-14">14-05-2022</option>
                            <option value="2022-05-15">15-05-2562</option>


                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>เวลา</Form.Label>
                        <Form.Control
                            as="select"
                            style={{ width: '75%' }}
                            onChange={e => setTimestart(e.target.value)}
                        >
                            <option value="09.00">09.00-10.00</option>
                            <option value="10.00">10.00-11.00</option>
                            <option value="11.00">11.00-12.00</option>
                            <option value="14.00">14.00-15.00</option>


                        </Form.Control>
                    </Form.Group>

                    <Button variant="danger" onClick={() => SubmitData()} >
                        Submit
                    </Button></Col>
            </Row>

        </Form>
    )
}

export default Order