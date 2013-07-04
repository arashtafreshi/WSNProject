import MySQLdb as mdb
import os

db=mdb.connect('localhost','root','12345','TestBed')
with db: 
    cur = db.cursor()
    

#create file:
    filename="/var/www/Test/main.exe"
  #  path = "/var/www/Test"
    with open(filename,"wb") as output_file:
        cur.execute("SELECT File FROM Tests WHERE ID=1")
        data = cur.fetchone()
        output_file.write(data[0])


    os.system("'tos-bsl -c /dev/ttyUSB0 --telosb  -r -e -I -p " +filename + "'")
