package controller

import (
	"devtool-exam-final/model"
	"devtool-exam-final/repository"
	"devtool-exam-final/services"
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
)

func Route(r *gin.Engine) {

	r.GET("/ping", func(c *gin.Context) {
		eiei, err := repository.TestDB()
		fmt.Println(eiei, err)
		if err != nil {
			c.JSON(500, gin.H{
				"err": err,
			})
		}

		c.JSON(200, gin.H{
			"message": eiei,
		})
	})
	r.GET("/ping2", func(c *gin.Context) {
		eiei, err := repository.TestDB2()
		fmt.Println(eiei, err)
		if err != nil {
			c.JSON(500, gin.H{
				"err": err,
			})
		}

		c.JSON(200, gin.H{
			"message": eiei,
		})
	})

	r.GET("/db", func(c *gin.Context) {

		c.JSON(200, gin.H{
			"message": os.Getenv("POSTGRES_DB"),
		})
	})

	r.GET("/sms", func(c *gin.Context) {
		services.SMSTest()
		c.JSON(200, gin.H{
			"message": "cool",
		})
	})

	r.POST("/register", func(c *gin.Context) {
		fmt.Println("register")
		var info model.Information
		if err := c.ShouldBindJSON(&info); err != nil {
			fmt.Println("json err", err)
			c.JSON(400, gin.H{
				"message": err,
			})
		}

		fmt.Println(info)
		err := services.OrderVaccine(info)
		fmt.Println(err)
		if err != nil {
			c.JSON(500, gin.H{
				"message": err,
			})
		}

		c.JSON(201, gin.H{
			"message": info,
		})
	})

	r.GET("/vaccine/:year", func(c *gin.Context) {
		year := c.Param("year")
		vac, err := services.GetVaccine(year)
		if err != nil {
			c.JSON(500, gin.H{
				"message": err,
			})
		}

		c.JSON(200, gin.H{
			"message": vac,
		})
	})

}
