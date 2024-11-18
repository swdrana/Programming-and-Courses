votes = input("Input the votes: Example: 1,4,2,1,2,3").split(',')
candidates = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0}
anotherWayCreateCandidates = dict(zip('12345', [0]*5))


# Method: 1
# ==============================================================================
# count votes
for v in votes:
    if v in candidates:
        candidates[v] += 1

# print candidates with zero votes
for c in candidates.keys():
    if candidates[c] == 0:
        print(c, end=' ')









# Method: 2
# ===============================================================================

emptyCandidates = {}
# another way to count votes
for v in votes:
    emptyCandidates.setdefault(v, 0)
    emptyCandidates[v] += 1

print()
# print candidates with zero votes, it will not working because candidates setdefault not set, but why???
for c in emptyCandidates.keys():
    if emptyCandidates[c] == 0:
        print(c, end=' ')

s1 = set('12345')
s2 = set(emptyCandidates.keys())
s3 = s1 - s2

for c in s3:
    print(c, end=' ')
print("CDD with votes",emptyCandidates)





# Method: 3
# ==============================================================================
# another way 
# votes = input("Input the votes: Example: 1,4,2,1,2,3").split(',')
cddwithvote = set(votes)
cddall = set('12345')
cdd0v = cddall - cddwithvote
for c in cdd0v:
    print(c, end=' ')
