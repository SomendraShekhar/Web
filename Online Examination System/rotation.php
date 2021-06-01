from copy import deepcopy
m, n, r = map(int, raw_input().split())
matrix = []
for i in xrange(m):
    matrix.append(map(int, raw_input().split()))
k = min(m, n) / 2
rows = []
for ii in xrange(k):
    row = []
    for i in xrange(ii, m - 1 - ii):
        row.append(matrix[i][ii])
    for i in xrange(ii, n - 1 - ii):
        row.append(matrix[m - 1 - ii][i])
    for i in xrange(m - 1 - ii, ii, -1):
        row.append(matrix[i][n - 1 - ii])
    for i in xrange(n - 1 - ii, ii, -1):
        row.append(matrix[ii][i])
    rows.append(row)

result = deepcopy(matrix)

for ii in xrange(k):
    row = rows[ii]
    shift = r % len(row)
    idx = -shift
    for i in xrange(ii, m - 1 - ii):
        result[i][ii] = row[idx]
        idx += 1
        idx %= len(row)
    for i in xrange(ii, n - 1 - ii):
        result[m - 1 - ii][i] = row[idx]
        idx += 1
        idx %= len(row)
    for i in xrange(m - 1 - ii, ii, -1):
        result[i][n - 1 - ii] = row[idx]
        idx += 1
        idx %= len(row)
    for i in xrange(n - 1 - ii, ii, -1):
        result[ii][i] = row[idx]
        idx += 1
        idx %= len(row)
for i in result:
    print " ".join(map(str, i))