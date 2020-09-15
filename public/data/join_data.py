import pandas as pd
df1 = pd.read_csv('./data.csv', sep='|')
df2 = pd.read_csv('../../src/data/data2.csv', sep='|')
df2 = df2[['Name','Size']]
df2 = df2.drop_duplicates().reset_index()
print(df2)
df1 = df1.merge(df2, on='Name', how='left')
df1.to_csv('./data2.csv', index=False, sep='|')
