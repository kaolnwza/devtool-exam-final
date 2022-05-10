package main

import (
	"devtool-exam-final/config"
	"devtool-exam-final/controller"
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("Go Start!")
	fmt.Println(os.Getenv("POSTGRES_USER"))
	r := gin.Default()

	r.Use(config.CorsConfig())
	r.SetTrustedProxies([]string{"*"})

	controller.Route(r)

	r.Run(":8000") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
