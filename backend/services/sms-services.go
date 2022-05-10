package services

import (
	"fmt"
	"log"

	"github.com/souvikhaldar/gobudgetsms"
)

func SMSTest() {
	conf := gobudgetsms.SetConfig("username", "userid", "handle", "customid", 1, 0, 0)
	res, err := gobudgetsms.SendSMS(conf, "kuy", "+660991745105", "")
	if err != nil {
		fmt.Println(err)
	}
	log.Print("The response after sending sms is ", res)
}
