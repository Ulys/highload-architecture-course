# Highload home work 4

## NO CACHING
### Test case 1
Input: `siege -c 1 -t 5s http://localhost:50000/data`
Output:
```
{
    "transactions": 1822,
	"availability":	100.00,
	"elapsed_time": 4.31,
	"data_transferred": 0.17,
	"response_time": 0.00,
	"transaction_rate":422.74,
	"throughput": 0.04,
	"concurrency": 1.00,
	"successful_transactions": 1822,
	"failed_transactions": 0,
	"longest_transaction": 0.02,
	"shortest_transaction": 0.00
}
```

### Test case 2
Input: `siege -c 10 -t 5s http://localhost:50000/data`
Output:
```
{	
    "transactions": 4106,
	"availability": 100.00,
	"elapsed_time": 4.22,
	"data_transferred": 0.39,
	"response_time": 0.01,
	"transaction_rate" 972.99,
	"throughput": 0.09,
	"concurrency": 9.96,
	"successful_transactions": 4106,
	"failed_transactions": 0,
	"longest_transaction": 0.03,
	"shortest_transaction": 0.00
}
```

### Test case 3
Input: `siege -c 100 -t 20s http://localhost:50000/data`
Output:
```
{	
    "transactions": 16397,
	"availability":	100.00,
	"elapsed_time": 19.63,
	"data_transferred": 1.55,
	"response_time": 0.11,
	"transaction_rate": 835.30,
	"throughput": 0.08,
	"concurrency": 88.74,
	"successful_transactions": 16397,
	"failed_transactions": 0,
	"longest_transaction": 0.32,
	"shortest_transaction": 0.00
}
```

### Test case 4
Input: `siege -c 200 -t 40s http://localhost:50000/data`
Output:
```
{	
    "transactions": 16518,
	"availability": 100.00,
	"elapsed_time": 39.11,
	"data_transferred": 1.56,
	"response_time": 0.24,
	"transaction_rate": 422.35,
	"throughput":  0.04,
	"concurrency": 101.43,
	"successful_transactions": 16518,
	"failed_transactions": 0,
	"longest_transaction": 0.76,
	"shortest_transaction": 0.01
}
```

## WITH CACHING
### Test case 1
Input: `siege -c 1 -t 5s http://localhost:50000/data`
Output:
```
{
    "transactions": 2493,
    "availability": 100.00,
    "elapsed_time": 4.97,
    "data_transferred": 0.24,
    "response_time": 0.00,
    "transaction_rate": 501.61,
    "throughput": 0.05,
    "concurrency": 0.98,
    "successful_transactions": 2493,
    "failed_transactions": 0,
    "longest_transaction": 0.01,
    "shortest_transaction": 0.00
}
```

### Test case 2
Input: `siege -c 10 -t 5s http://localhost:50000/data`
Output:
```
{	
    "transactions": 5527,
	"availability": 100.00,
	"elapsed_time": 4.86,
	"data_transferred": 0.52,
	"response_time": 0.01,
	"transaction_rate": 1137.24,
	"throughput": 0.11,
	"concurrency": 9.95,
	"successful_transactions": 5527,
	"failed_transactions": 0,
	"longest_transaction": 0.20,
	"shortest_transaction": 0.00
}
```

### Test case 3
Input: `siege -c 100 -t 20s http://localhost:50000/data`
Output:
```
{	
    "transactions": 16462,
    "availability":	100.00,
    "elapsed_time": 19.24,
    "data_transferred": 1.55,
    "response_time": 0.09,
    "transaction_rate":855.61,
    "throughput": 0.08,
    "concurrency": 79.77,
    "successful_transactions": 16462,
    "failed_transactions": 0,
    "longest_transaction": 0.40,
    "shortest_transaction": 0.01
}
```

### Test case 4
Input: `siege -c 200 -t 40s http://localhost:50000/data`
Output:
```
{	
    "transactions": 16524,
	"availability": 98.80,
	"elapsed_time": 41.16,
	"data_transferred": 1.56,
	"response_time": 0.14,
	"transaction_rate": 401.46,
	"throughput":  0.04,
	"concurrency": 58.06,
	"successful_transactions": 16524,
	"failed_transactions": 200,
	"longest_transaction": 3.21,
	"shortest_transaction": 0.01
}
```
