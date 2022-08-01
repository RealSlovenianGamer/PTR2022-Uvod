from turtle import st


st_listov = int(input("Vnesi število listov: "))
ljubi = True

for i in range(st_listov):
    ljubi = not ljubi

print(ljubi)