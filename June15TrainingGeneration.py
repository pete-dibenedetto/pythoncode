
# coding: utf-8

# In[49]:

import json
import csv
import sys, getopt

with open('/Users/Pete/Customers/taxtest.csv') as taxfile:

    reader = csv.DictReader(taxfile)
    
#    print(row['first_name'], row['last_name'])
   # with open('/Users/Pete/Customers/taxpreformat.csv', 'w') as outfile:
    
    with open('/Users/Pete/Customers/taxprejson.json', "w") as f:
        #listWriter = csv.DictWriter(open(, 'wb'))
    
        #w = csv.DictWriter(outfile, fieldnames=reader.fieldnames)
        #w.writeheader()
        
        for index,row in enumerate(reader):
        
            row['naic_tamr_taxdesc'] = row['naic_tamr_taxdesc'].split('-')
            #print(row['naic_tamr_taxdesc'])
            f.write(json.dumps(row, sort_keys=False, indent=4, separators=(',', ': '),encoding="utf-8",ensure_ascii=False))
            
            #w.writerow(row)
    


# In[8]:




# In[ ]:



