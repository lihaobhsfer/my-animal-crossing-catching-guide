#!/usr/bin/env python
# coding: utf-8

# # Animal Crossing Catch Guide Data Prep
# 
# Data Source: Fandom(https://animalcrossing.fandom.com/wiki/Guide:January_fish_list_(New_Horizons))
# Last Updated: 2020-04-05



import requests
from lxml import html
import re
from bs4 import BeautifulSoup
import pandas as pd




# get table content

all_rows = []
link_rows = []
img_rows = []


months = ['January','February','March', 'April','May', 'June', 'July', 'August', 'September' ,'October', 'November','December']
types = ['Fish', 'Bug']
hm = ['Northern_hemisphere', 'Southern_hemisphere']
for item_type in types:
    print(item_type)
    for m in range(len(months)):
        print(months[m])
        resp = requests.get("https://animalcrossing.fandom.com/wiki/Guide:"+months[m]+"_"+ item_type.lower() +"_list_(New_Horizons)")
        if resp.status_code==200: 
    #         print("Successfully opened the web page") 

            soup=BeautifulSoup(resp.text,'html.parser')

            for h in hm:

                l=soup.find("span", {"id":h}) 
        #         print(l)
                table = l.next_element.next_element.next_element.next_element.next_element.next_element.next_element # table element
                j=0
                row = []
                imgs = table.findAll("img", {"class":""})
                rows = table.findAll("td")
                for i in range(len(rows)):
                    cell = rows[i]
                    j += 1
                    row.append(cell.text.replace('\n', '').strip())
                    mod = 6 if item_type == "Fish" else 5 # Bugs only has 5 rows
                    if j % mod == 0:
                        img = imgs[i//mod]
        #                 print(img['src'])
                        img_rows.append(img['src'])
                        row.append(img['src'])
                        if mod == 5: 
                            row[-1] = row[-2]
                            row[-2] = None
                            row.append(img['src'])
                        row.append(str(m + 1))
                        row.append(h.replace("_", " ").title())
                        row.append(item_type)
                        # print(row)
                        all_rows.append(row)
                        row=[]
                        j = 0
        else: 
            print("Error") 
df = pd.DataFrame(all_rows, columns=['Name','empty','Price', 'Location', 'Size', 'Time', 'url', 'Month', 'Hemisphere', 'Type'])
df = df[['Name','url','Price', 'Location', 'Size', 'Time', 'Month', 'Hemisphere', 'Type']]
df['Month'] = df['Month'].astype(int)
df = df.sort_values(by=['Name', 'Month']).reset_index(drop=True)

fish_months_map = []
for h in hm:
    h_n = h.replace("_", " ").title()
    print("H_n", h_n)
    df_n = df[df['Hemisphere'] == h_n]
    name = df_n.iloc[0]["Name"]
    months = []
    for index, row in df_n.iterrows():
        if row['Name'] == name and row['Hemisphere'] == h_n:
            if row['Month'] not in months:
                months.append(row['Month'])
        else:
            map_item = [name, months, h_n]
            fish_months_map.append(map_item)
            name = row["Name"]
            months = []
            if row['Month'] not in months:
                months.append(row['Month'])
    map_item = [name, months, h_n]
    fish_months_map.append(map_item)

df_fish_month = pd.DataFrame(fish_months_map, columns=['Name', 'Months', 'Hemisphere'])
df_unique = df.drop_duplicates(['Name', 'Hemisphere']).reset_index(drop=True)
df_full = df_unique.merge(df_fish_month, on=['Name', 'Hemisphere'], how='left') 


df_full.to_csv('./src/data/data.csv', index=False, sep='|') # Change the directory if necessary