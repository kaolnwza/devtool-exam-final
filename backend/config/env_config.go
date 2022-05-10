package config

import (
	"fmt"

	"github.com/joho/godotenv"
)

func DotenvConfig() map[string]string {
	dotenv_data, err := godotenv.Read()
	if err != nil {
		fmt.Println("Read .env err")
	}

	return dotenv_data

}
