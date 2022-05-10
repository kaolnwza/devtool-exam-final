package model

import "time"

type VaccineDate struct {
	VaccineDateId int        `json:"vaccine_date_id"`
	Date          *time.Time `json:"date"`
	TimeStart     string     `json:"time_start"`
	TimeEnd       string     `json:"time_end"`
}
