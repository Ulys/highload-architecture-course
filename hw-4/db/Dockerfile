# Derived from official my.cnf image (our base image)
FROM mysql
# Add a database
ENV MYSQL_DATABASE test
ENV MYSQL_ROOT_PASSWORD password
# Add the content of the sql-scripts/ directory to your image
# All scripts in docker-entrypoint-initdb.d/ are automatically
# executed during container startup
COPY ./scripts/ /docker-entrypoint-initdb.d/

EXPOSE 3306
