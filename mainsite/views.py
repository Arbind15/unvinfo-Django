from django.shortcuts import render
from django.http import HttpResponse
import csv, json, itertools, re

def home(request):
    # for deployment
    # with open('media/data.csv', 'r') as csv_file:
    with open('media/data.csv','r',encoding="mbcs") as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        num=1
        lst=[]
        for data in csv_reader:
            data.append(num)
            lst.append(data)
            num=num+1
            if num==21:
                break

        # print(lst)
    return render(request,'mainsite/home.html',{"list":lst})

def chunks(request):
    index=int(request.GET['index'])
    # print(index)
    # with open('media/data.csv', 'r') as csv_file:
    with open('media/data.csv','r',encoding="mbcs") as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        num=0
        i=0
        lst=[]
        # next(itertools.islice(csv.reader(csv_file), index, None))
        for data in csv_reader:
            if i<=index:
                i = i + 1
                continue
            data.append(index+1)
            tmp={'value':data}
            lst.append(tmp)
            num=num+1
            index=index+1
            if num==10:
                break
        # print(lst)
    return HttpResponse(json.dumps(lst),'')

def Search(request):
    search_txt=request.GET['search_txt'].lower()
    # with open('media/data.csv', 'r') as csv_file:
    with open('media/data.csv', 'r', encoding="mbcs") as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        lst = []
        index=0
        num=0
        # next(itertools.islice(csv.reader(csv_file), index, None))
        for data in csv_reader:
            if re.search(search_txt,str(data[1]).lower()) or re.search(search_txt,str(data[0]).lower()):
                index=index+1
                num=num+1
                data.append(index)
                tmp = {'value': data}
                lst.append(tmp)
                if num==50:
                    break
    return HttpResponse(json.dumps(lst),'')
