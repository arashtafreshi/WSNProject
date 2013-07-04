#!/usr/bin/python
# -*- coding: utf-8 -*-

import MySQLdb as mdb
import os

db=mdb.connect('localhost','root','12345','TestBed')
with db: 
    cur = db.cursor()
    cur.execute("SELECT File FROM Tests WHERE ID=1")

    
    data = mdb.Binary(open("main.exe","rb").read())



#get the name of the file
cur.execute("SELECT Name FROM ContentFiles WHERE ID=3")
nombre = cur.fetchone()
#open file and write into.
with open(nombre[0],"wb") as output_file:
    cur.execute("SELECT File FROM ContentFiles WHERE ID=3")
    ablob = cur.fetchone()
    output_file.write(ablob[0])



os.system("'tos-bsl -c /dev/ttyUSB0 --telosb  -r -e -I -p " + data + "'")
