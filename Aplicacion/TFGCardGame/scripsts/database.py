import pandas as pd
from sqlalchemy import create_engine

engine = create_engine('mysql+mysqlconnector://usu1:usu1@localhost/tfg')


file_path = 'OP01.xlsx'
data = pd.read_excel(file_path)
data.rename(columns={
    'ID': 'id',
    'Card Name': 'name',
    'Type': 'type',
    'Rarity': 'rarity',
    'Cost': 'cost',
    'Attack': 'power',
    'Atribute': 'attribute',
    'Counter': 'counter',
    'Color': 'color',
    'ARC': 'arc_1',
    'ARC2': 'arc_2',
    'ARC3': 'arc_3',
    'Effect': 'effect_1',
    'Effect 2': 'effect_2'
}, inplace=True)


data.fillna('NULL', inplace=True)

data.drop(['effect_1', 'effect_2'], axis=1, inplace=True)
data.to_sql('card', con=engine, if_exists='append', index=False)
