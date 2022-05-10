package model

import (
	"time"
)

type Person struct {
	PersonID     int        `json:"person_id"`
	PrefixName   string     `json:"prefix_name"`
	Firstname    string     `json:"firstname"`
	Lastname     string     `json:"lastname"`
	GenderType   string     `json:"gender_type"`
	DOB          *time.Time `json:"dob"`
	IdentityType string     `json:"identity_card_type"`
	IdentityId   string     `json:"identity_id"`
	Passport     string     `json:"passport"`
	National     string     `json:"national"`
}
