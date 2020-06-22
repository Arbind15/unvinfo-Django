from django.shortcuts import render
from django.http import HttpResponse
import csv

def home(request):
    # for deployment
    with open('media/data.csv', 'r') as csv_file:
    # with open('media/data.csv','r',encoding="mbcs") as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        num=1
        lst=[]
        for data in csv_reader:
            data.append(num)
            num=num+1
            lst.append(data)
        # print(lst)
    return render(request,'mainsite/home.html',{"list":lst})
