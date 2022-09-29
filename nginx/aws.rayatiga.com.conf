server {
        listen 80;
        listen [::]:80;

        root /var/www/aws.rayatiga.com;
        index index.html index.htm index.nginx-debian.html;

        server_name aws.rayatiga.com www.aws.rayatiga.com;

        location / {
                try_files $uri $uri/ =404;
        }
}
