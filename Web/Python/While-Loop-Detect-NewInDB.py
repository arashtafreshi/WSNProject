#!/usr/bin/python

import MySQLdb

db = MySQLdb.connect("host", "user", "password", "dbname")
cursor = db.cursor()

while (1 < 9):
    
count = """SELECT count(*) as tot FROM simpletable"""
cursor.execute(count)
data = cursor.fetchone()

print data



