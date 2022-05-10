package config

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/lib/pq"
)

const (
	host = "db"
	// host = "localhost"
	port = 5432
)

func ConnectDB() *sql.DB {

	// env := DotenvConfig()
	//log.Println("env is :", env["POSTGRES_USER"], env["POSTGRES_PASSWORD"], env["POSTGRES_DB"])
	pg := fmt.Sprintf(
		"host=%s port=%d user=%s password=%s dbname = %s sslmode=disable",
		host, port, os.Getenv("POSTGRES_USER"), os.Getenv("POSTGRES_PASSWORD"), os.Getenv("POSTGRES_DB"))
	// host, port, "postgres", "1234", "covid")

	db, err := sql.Open("postgres", pg)
	if err != nil {
		fmt.Println("failed to connect to database: ", err)
		return &sql.DB{}
	}

	// err = db.Ping()
	// if err != nil {
	// 	fmt.Println("ping!!!: ", err)
	// }

	return db
}
