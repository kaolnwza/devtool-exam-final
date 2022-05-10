package model

type Information struct {
	VaccineID int `json:"vaccine_id"`
	Person
	Address
	Contact
	Vaccine
	VaccineDate
}
