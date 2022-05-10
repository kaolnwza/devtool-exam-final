package services

import (
	"devtool-exam-final/model"
	"devtool-exam-final/repository"
	"fmt"
	"strconv"
)

func OrderVaccine(info model.Information) error {
	//register person
	person_id, err := repository.RegisterVaccinePerson(info)
	if err != nil {
		return err
	}

	//register person address table
	err = repository.RegisterVaccinePersonAddress(person_id, info)
	if err != nil {
		fmt.Println("err2")
		return err
	}

	err = repository.RegisterVaccinePersonContact(person_id, info)
	if err != nil {
		fmt.Println("err3")
		return err
	}

	_, err = repository.RegisterOrderVaccine(person_id, info)
	if err != nil {
		fmt.Println("err4")
		return err
	}

	return nil
}

func GetVaccine(year string) ([]model.Vaccine, error) {
	yearInt, _ := strconv.Atoi(year[:3])
	year_type := 1
	//if dob is not kid
	if yearInt < 2004 {
		year_type = 2
	}

	vac, err := repository.GetVaccineQueries(year_type)
	if err != nil {
		return []model.Vaccine{}, err
	}

	return vac, nil

}
