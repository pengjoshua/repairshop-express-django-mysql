from django.shortcuts import render
from django.http import HttpResponse
from django.db import connection

def index(request):
    return HttpResponse("See terminal command line for repairshop results")

cursor = connection.cursor()
cursor.execute("select mechanic, type, round(avg, 3) avg, round((avg / nationalavg), 3) ratio from repairs2 order by ratio")
rows = cursor.fetchall()
print("Name - type - average time - ratio of average")
for row in rows:
    print(row[0], "-", row[1], "-", row[2], "-", row[3])
