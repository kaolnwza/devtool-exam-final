package repository

import (
	"devtool-exam-final/config"
	"devtool-exam-final/model"
	"fmt"
)

var db = config.ConnectDB()

func RegisterVaccinePerson(info model.Information) (int, error) {

	entryStm := `INSERT INTO person `
	columnStm := `(
		prefix_name, firstname, lastname, gender_type, dob , 
		identity_card_type, identity_id, passport, national)`
	valuesStm := `VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING person_id`
	statement := entryStm + columnStm + valuesStm

	var person_id int

	err := db.QueryRow(
		statement, info.PrefixName, info.Firstname, info.Lastname, info.GenderType,
		info.DOB, info.IdentityType, info.IdentityId, info.Passport,
		info.National).Scan(&person_id)
	if err != nil {
		return -1, err
	}

	return person_id, nil
}

func RegisterVaccinePersonAddress(person_id int, info model.Information) error {

	entryStm := `INSERT INTO person_address `
	columnStm := `(
		person_id, house_id, village_no, village_name, room, avenue, alley) `
	valuesStm := `VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING person_id`
	statement := entryStm + columnStm + valuesStm

	var temp_person_id int

	err := db.QueryRow(
		statement, person_id, info.HouseId, info.VillageNo,
		info.VillageName, info.Room, info.Avenue, info.Alley).Scan(&temp_person_id)
	if err != nil {
		return err
	}

	return nil
}

func RegisterVaccinePersonContact(person_id int, info model.Information) error {
	fmt.Println(info.LineId, info.Email)
	entryStm := `INSERT INTO contact `
	columnStm := `(person_id, line_id, email) `
	valuesStm := `VALUES ($1, $2, $3) RETURNING person_id`
	statement := entryStm + columnStm + valuesStm

	var temp_person_id int

	err := db.QueryRow(
		statement, person_id, info.LineId, info.Email).Scan(&temp_person_id)
	if err != nil {
		return err
	}

	return nil
}

func RegisterOrderVaccine(person_id int, info model.Information) (int, error) {
	fmt.Println(info.LineId, info.Email)
	entryStm := `INSERT INTO vaccine_order `
	columnStm := `(user_id, vaccine_id, vaccine_date_id) `
	valuesStm := `VALUES ($1, $2, $3) RETURNING order_id`
	statement := entryStm + columnStm + valuesStm

	var order_id int

	err := db.QueryRow(
		statement, person_id, info.VaccineID, info.VaccineDateId).Scan(&order_id)
	if err != nil {
		return -1, err
	}

	return order_id, nil
}

func GetVaccineQueries(year int) ([]model.Vaccine, error) {
	fmt.Println(year)
	sqlStatement := `SELECT * FROM vaccine WHERE vaccine_age = $1`
	//Query all rows in table post
	rows, err := db.Query(sqlStatement, year)
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
		err := rows.Scan(&vac.VaccineID, &vac.VaccineName, &vac.VaccineSeq, &vac.VaccineDesc, &vac.VaccineAge)
		if err != nil {
			return []model.Vaccine{}, err
		}
		vac_arr = append(vac_arr, vac)
	}

	return vac_arr, nil
}
