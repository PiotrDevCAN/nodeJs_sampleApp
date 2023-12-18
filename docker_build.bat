docker build -t uk_bi_app_1 --no-cache  --progress=plain  . 2> build.log
docker run -dit -p 8091:8080  --name uk_bi_app_1 -v C:/CETAapps/UK_BI_apps/App_1:/var/www/html --env-file C:/CETAapps/UK_BI_apps/App_1/dev_env.list uk_bi_app_1
