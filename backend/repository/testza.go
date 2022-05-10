package repository

import (
	"devtool-exam-final/model"
	"fmt"
)

type Tag struct {
	TagId   int    `json:"tag_id"`
	TagName string `json:"tag_name`
}

func TestDB() ([]model.Person, error) {
	sqlStatement := `SELECT * FROM person`
	//Query all rows in table post
	rows, err := db.Query(sqlStatement)
	if err != nil {
		return []model.Person{}, err
	}
	//Create postList slice's for store post row form rows
	// postList := make([]model.Post, 0)
	var person_arr []model.Person
	// release connection resource when finish this function
	defer rows.Close()
	//loop for scan and push row to slice for return to API
	for rows.Next() {
		var person model.Person
		err := rows.Scan(&person.PersonID, &person.PrefixName, &person.Firstname, &person.Lastname, &person.GenderType,
			&person.DOB, &person.IdentityType, &person.IdentityId, &person.Passport,
			&person.National)
		if err != nil {
			return []model.Person{}, err
		}
		person_arr = append(person_arr, person)
	}

	fmt.Println("arrrrrr", person_arr)
	return person_arr, nil
}

func TestDB2() ([]model.Vaccine, error) {
	sqlStatement := `SELECT * FROM vaccine`
	//Query all rows in table post
	rows, err := db.Query(sqlStatement)
	if err != nil {
		return []model.Vaccine{}, err
	}
	//Create postList slice's for store post row form rows
	// postList := make([]model.Post, 0)
	var vac_arr []model.Vaccine
	// release connection resource when finish this function
	defer rows.Close()
	//loop for scan and push row to slice for return to API
	for rows.Next() {
		var vac model.Vaccine
		err := rows.Scan(&vac.VaccineID, &vac.VaccineName, &vac.VaccineSeq, &vac.VaccineDesc)
		if err != nil {
			return []model.Vaccine{}, err
		}
		vac_arr = append(vac_arr, vac)
	}

	fmt.Println("err", err)
	fmt.Println("arrrrrr", vac_arr)
	return vac_arr, nil
}
