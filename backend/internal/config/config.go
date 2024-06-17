package config

import (
	"os"
	"strconv"
)

var HostName = "127.0.0.1"
var Port = 9000
var CorsAllowOrigin = "http://localhost:3000"
var DBHostName = "db"
var DBPort = 3306
var DBName = "training"

var DBUsername = "root"
var DBPassword = ""

// セッションストアのシークレットキー
// 本番環境では、crypto/rand or securecookie.GenerateRandomKey(32)を実行して、その結果を環境変数に設定する
var SessionSecret = "session"
var SessionName = "session-name"
var SessionKey = "username"

func init() {
	if v := os.Getenv("HOSTNAME"); v != "" {
		HostName = v
	}
	if v, err := strconv.ParseInt(os.Getenv("PORT"), 10, 64); err == nil {
		Port = int(v)
	}
	if v := os.Getenv("CORS_ALLOW_ORIGIN"); v != "" {
		CorsAllowOrigin = v
	}
	if v := os.Getenv("DB_HOSTNAME"); v != "" {
		DBHostName = v
	}
	if v, err := strconv.ParseInt(os.Getenv("DB_PORT"), 10, 64); err == nil {
		DBPort = int(v)
	}
	if v := os.Getenv("DB_NAME"); v != "" {
		DBName = v
	}
	if v := os.Getenv("DB_USERNAME"); v != "" {
		DBUsername = v
	}
	if v := os.Getenv("DB_PASSWORD"); v != "" {
		DBPassword = v
	}
	if v := os.Getenv("SESSION_SECRET"); v != "" {
		SessionSecret = v
	}
	if v := os.Getenv("SESSION_NAME"); v != "" {
		SessionName = v
	}
	if v := os.Getenv("SESSION_KEY"); v != "" {
		SessionKey = v
	}
}
