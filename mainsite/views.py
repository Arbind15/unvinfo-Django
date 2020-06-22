from django.shortcuts import render
from django.http import HttpResponse
import csv, json, itertools

def home(request):
    # for deployment
    with open('media/data.csv', 'r') as csv_file:
    # with open('media/data.csv','r',encoding="mbcs") as csv_file:
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
    with open('media/data.csv', 'r') as csv_file:
    # with open('media/data.csv','r',encoding="mbcs") as csv_file:
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
            if num==5:
                break
        # print(lst)
    return HttpResponse(json.dumps(lst),'')