package model

type Vaccine struct {
	VaccineID   int    `json:"vaccine_id"`
	VaccineName string `json:"vaccine_name"`
	VaccineSeq  int    `json:"vaccine_seq"`
	VaccineDesc string `json:"vaccine_desc"`
	VaccineAge  int    `json:"vaccine_age"`
}
